import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity configuration for browser-side usage
// Using useCdn: false to avoid CORS issues with CDN endpoint
export const client = createClient({
  projectId: 'tj76z81j',
  dataset: 'production',
  useCdn: false, // Disable CDN to use API endpoint which has better CORS support
  apiVersion: '2024-01-01',
  perspective: 'published',
  withCredentials: false,
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types for our blog posts
export interface AdvocacyPost {
  _id: string;
  _type: 'advocacyPost';
  title: string;
  slug: {
    current: string;
  };
  orderId: number;
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImageSource;
  gallery?: Array<{
    asset: SanityImageSource;
    alt?: string;
    caption?: string;
  }>;
  body: any[]; // Portable Text content
}

export interface ProjectPost {
  _id: string;
  _type: 'projectPost';
  title: string;
  slug: {
    current: string;
  };
  orderId: number;
  publishedAt?: string;
  excerpt?: string;
  mainImage?: SanityImageSource;
  gallery?: Array<{
    asset: SanityImageSource;
    alt?: string;
    caption?: string;
  }>;
  body: any[]; // Portable Text content
  projectType?: string;
}

