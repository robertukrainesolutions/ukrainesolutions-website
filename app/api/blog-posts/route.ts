import { NextResponse } from 'next/server';
import { fetchSubstackRSS, getSubstackFeedUrl } from '@/lib/rss';

// ISR: Revalidate every 15 minutes (900 seconds) for faster updates
export const revalidate = 900;

export async function GET() {
  const feedUrl = getSubstackFeedUrl();
  
  try {
    const posts = await fetchSubstackRSS(feedUrl);
    return NextResponse.json({ 
      posts,
      feedUrl, // Include feed URL for debugging
      count: posts.length 
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch blog posts',
        message: error instanceof Error ? error.message : 'Unknown error',
        feedUrl 
      },
      { status: 500 }
    );
  }
}

