'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import { advocacyPostsQuery } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity';
import type { AdvocacyPost } from '@/lib/sanity';

export default function AdvocacyPosts() {
  const [posts, setPosts] = useState<AdvocacyPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchPosts() {
      const timeoutId = setTimeout(() => {
        if (isMounted) {
          setPosts([]);
          setLoading(false);
        }
      }, 15000);
      
      try {
        const fetchedPosts = await client.fetch<AdvocacyPost[]>(advocacyPostsQuery);
        
        clearTimeout(timeoutId);
        
        if (isMounted) {
          setPosts(fetchedPosts || []);
          setError(null);
        }
      } catch (err) {
        clearTimeout(timeoutId);
        if (isMounted) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setPosts([]);
          }
        }
      } finally {
        clearTimeout(timeoutId);
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();
    
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading advocacy posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">No advocacy posts found.</p>
        <p className="text-sm text-gray-500">
          Posts will appear here once published in Sanity.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => {
        const date = new Date(post.publishedAt);
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
        });

        return (
          <article
            key={post._id}
            className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <Link 
              href={`/advocacy-for-ukraine/${post.slug.current}`} 
              className="block group"
            >
              {post.mainImage && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(675).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                {post.excerpt && (
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

