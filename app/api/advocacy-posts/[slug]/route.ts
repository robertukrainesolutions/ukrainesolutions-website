import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { advocacyPostQuery } from '@/lib/sanity.queries';

export const revalidate = 900; // Revalidate every 15 minutes

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = await client.fetch(advocacyPostQuery, { slug });
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

