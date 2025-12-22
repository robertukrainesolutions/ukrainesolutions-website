'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import { projectPostsQuery } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity';
import type { ProjectPost } from '@/lib/sanity';

const POSTS_PER_PAGE = 10;

export default function ProjectPosts() {
  const [posts, setPosts] = useState<ProjectPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

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
        const fetchedPosts = await client.fetch<ProjectPost[]>(projectPostsQuery);
        
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
        <p className="mt-4 text-gray-600">Loading project posts...</p>
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
        <p className="text-gray-600 mb-4">No project posts found.</p>
        <p className="text-sm text-gray-500">
          Posts will appear here once published in Sanity.
        </p>
      </div>
    );
  }

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = posts.length > visibleCount;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + POSTS_PER_PAGE, posts.length));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {visiblePosts.map((post) => {
          return (
            <article
              key={post._id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <Link 
                href={`/projects/post/${post.slug.current}`} 
                className="block group"
              >
                {post.mainImage && (
                  <div className="relative w-full overflow-hidden flex justify-center items-center bg-gray-100">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                )}
                
                <div className="p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  {post.excerpt && (
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {post.projectType && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-semibold">
                        {post.projectType}
                      </span>
                    </div>
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

      {hasMore && (
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={handleShowMore}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Show More</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

