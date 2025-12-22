import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['media:content', 'media'],
      ['media:thumbnail', 'thumbnail'],
    ],
  },
});

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  content?: string;
  image?: string;
  author?: string;
  categories?: string[];
}

export async function fetchSubstackRSS(feedUrl: string): Promise<BlogPost[]> {
  try {
    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    // Fetch the RSS feed with abort signal
    const response = await fetch(feedUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    clearTimeout(timeoutId);
    
    // Parse the RSS feed text
    const feed = await parser.parseString(text);
    
    // Return ALL items from the feed (no limit)
    // RSS feeds typically return the most recent posts, but we'll get all available
    return feed.items.map((item) => {
      // Extract image from content or media
      let image: string | undefined;
      
      // Check enclosure (Substack uses this for featured images)
      if (item.enclosure && item.enclosure.url) {
        image = item.enclosure.url;
      }
      
      // Check media field
      if (!image && item.media) {
        image = typeof item.media === 'string' ? item.media : item.media['$']?.url;
      }
      
      // Try to extract image from content HTML (Substack image galleries)
      if (!image && item.content) {
        // First try to find image gallery staticGalleryImage
        const galleryMatch = item.content.match(/staticGalleryImage[^}]+src[^:]+:\s*"([^"]+)"/i);
        if (galleryMatch) {
          image = galleryMatch[1];
        }
        
        // If no gallery image, try regular img tag
        if (!image) {
          const imgMatch = item.content.match(/<img[^>]+src="([^"]+)"/i);
          if (imgMatch) {
            image = imgMatch[1];
          }
        }
      }
      
      // Extract content snippet
      let contentSnippet = item.contentSnippet || '';
      if (!contentSnippet && item.content) {
        // Strip HTML tags for snippet
        contentSnippet = item.content
          .replace(/<[^>]+>/g, '')
          .replace(/&nbsp;/g, ' ')
          .trim()
          .substring(0, 200);
      }

      return {
        title: item.title || 'Untitled',
        link: item.link || '',
        pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        contentSnippet,
        content: item.content,
        image,
        author: item.creator || (item as any)['dc:creator'] || feed.title,
        categories: item.categories || [],
      };
    });
  } catch (error) {
    // Silently return empty array on error to prevent console noise
    // Errors are handled gracefully by the UI
    if (error instanceof Error) {
      // Suppress network errors and abort errors - these are expected
      if (error.name === 'AbortError' || error.name === 'TypeError' || error.message.includes('fetch')) {
        // These are network/timeout errors - silently handle
        return [];
      }
      // Only log unexpected errors for debugging (but don't throw)
      if (process.env.NODE_ENV === 'development') {
        console.warn('RSS feed fetch failed:', error.message);
      }
    }
    return [];
  }
}

// Get Substack RSS URL from environment variable or config
export function getSubstackFeedUrl(): string {
  // Format: https://yourblog.substack.com/feed
  // You can set this in .env.local as NEXT_PUBLIC_SUBSTACK_FEED_URL
  // Default to ukrainesolutions.substack.com if not set
  return process.env.NEXT_PUBLIC_SUBSTACK_FEED_URL || 'https://ukrainesolutions.substack.com/feed';
}

