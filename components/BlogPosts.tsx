'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/rss';

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchPosts() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
      
      try {
        // Add cache-busting query param to ensure fresh data
        const response = await fetch(`/api/blog-posts?t=${Date.now()}`, {
          cache: 'no-store', // Always fetch fresh data
          signal: controller.signal,
        }).catch((err) => {
          // Suppress network errors - they're handled gracefully
          if (err.name === 'AbortError' || err.name === 'TypeError') {
            return null;
          }
          throw err;
        });
        
        clearTimeout(timeoutId);
        
        if (!response) {
          // Network error - silently handle
          if (isMounted) {
            setPosts([]);
            setLoading(false);
          }
          return;
        }
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || 'Failed to fetch blog posts');
        }
        
        const data = await response.json();
        
        if (isMounted) {
          // Show ALL posts, sorted by date (newest first)
          const sortedPosts = (data.posts || []).sort((a: BlogPost, b: BlogPost) => {
            return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
          });
          setPosts(sortedPosts);
          setError(null);
        }
      } catch (err) {
        clearTimeout(timeoutId);
        if (isMounted) {
          // Only set error for non-network errors
          if (err instanceof Error && !err.message.includes('fetch') && err.name !== 'AbortError') {
            setError(err.message);
          } else {
            setPosts([]);
          }
        }
        // Don't log network errors to console
        if (err instanceof Error && !err.message.includes('fetch') && err.name !== 'AbortError') {
          console.error('Error fetching blog posts:', err);
        }
      } finally {
        clearTimeout(timeoutId);
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();
    
    // Refresh posts every 15 minutes
    const interval = setInterval(fetchPosts, 15 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <p className="text-sm text-gray-600">
          Make sure NEXT_PUBLIC_SUBSTACK_FEED_URL is set in your environment variables.
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="space-y-8">
        {posts.map((post, index) => {
        const date = new Date(post.pubDate);
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        return (
          <article
            key={post.link || index}
            className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <Link href={post.link} target="_blank" rel="noopener noreferrer" className="block group">
              {post.image && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <time dateTime={post.pubDate}>{formattedDate}</time>
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                {post.contentSnippet && (
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {post.contentSnippet}
                  </p>
                )}
                
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold"
                      >
                        {category}
                      </span>
                    ))}
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
    </div>
  );
}

