import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { projectPostsQuery } from '@/lib/sanity.queries';

export const revalidate = 900; // Revalidate every 15 minutes

export async function GET() {
  try {
    const posts = await client.fetch(projectPostsQuery);
    return NextResponse.json({ 
      posts,
      count: posts.length 
    });
  } catch (error) {
    return NextResponse.json(
      { 
        posts: [],
        count: 0,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 200 }
    );
  }
}

