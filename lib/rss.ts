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
    const feed = await parser.parseURL(feedUrl);
    
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
    console.error('Error fetching RSS feed:', error);
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

