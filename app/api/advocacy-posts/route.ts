import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { advocacyPostsQuery } from '@/lib/sanity.queries';
import type { AdvocacyPost } from '@/lib/sanity';

export async function GET() {
  try {
    const posts = await client.fetch<AdvocacyPost[]>(advocacyPostsQuery);
    return NextResponse.json(
      { posts: posts || [] },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching advocacy posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch advocacy posts', posts: [] },
      { status: 500 }
    );
  }
}

