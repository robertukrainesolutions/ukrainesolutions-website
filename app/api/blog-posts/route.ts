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
    // Silently handle errors - return empty array instead of error
    // This prevents console errors from showing up
    return NextResponse.json(
      { 
        posts: [],
        feedUrl,
        count: 0,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 200 } // Return 200 to prevent fetch errors in client
    );
  }
}

