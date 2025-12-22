import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { projectPostsQuery } from '@/lib/sanity.queries';
import type { ProjectPost } from '@/lib/sanity';

export async function GET() {
  try {
    const posts = await client.fetch<ProjectPost[]>(projectPostsQuery);
    return NextResponse.json(
      { posts: posts || [] },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching project posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project posts', posts: [] },
      { status: 500 }
    );
  }
}

