import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { advocacyPostQuery, advocacyPostSlugsQuery } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity';
import type { AdvocacyPost } from '@/lib/sanity';
import ImageGalleryCarousel from '@/components/ImageGalleryCarousel';

async function getAdvocacyPost(slug: string): Promise<AdvocacyPost | null> {
  try {
    const post = await client.fetch<AdvocacyPost>(advocacyPostQuery, { slug });
    return post || null;
  } catch (error) {
    console.error('Error fetching advocacy post:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<{ slug: string }[]>(advocacyPostSlugsQuery);
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error fetching advocacy posts for static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getAdvocacyPost(slug);
  
  if (!post) {
    return {
      title: 'Advocacy Post Not Found - Ukraine Solutions',
    };
  }
  
  return {
    title: `${post.title} - Ukraine Solutions`,
    description: post.excerpt || `Read about ${post.title} on Ukraine Solutions.`,
  };
}

export default async function AdvocacyPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getAdvocacyPost(slug);
  
  if (!post) {
    notFound();
  }

  const date = new Date(post.publishedAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Cohesive Background Blobs */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Back Button */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <Link
            href="/advocacy-for-ukraine"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Advocacy Posts
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                {post.title}
              </h1>
            </div>

            {/* Main Headline Image */}
            {post.mainImage && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl mb-8 sm:mb-10">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(675).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            )}

            {/* Headline Description */}
            {post.excerpt && (
              <div className="mb-8 sm:mb-10">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
              </div>
            )}

            {/* Image Gallery Carousel */}
            {post.gallery && post.gallery.length > 0 && (
              <div className="mb-8 sm:mb-10">
                <ImageGalleryCarousel images={post.gallery} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      {post.body && post.body.length > 0 && (
        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg sm:prose-xl max-w-none">
                <PortableText
                  value={post.body}
                  components={{
                    types: {
                      image: ({ value }) => {
                        if (!value?.asset) return null;
                        return (
                          <div className="my-8 sm:my-10">
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                              <Image
                                src={urlFor(value).width(1200).height(675).url()}
                                alt={value.alt || 'Post image'}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                              />
                            </div>
                            {value.alt && (
                              <p className="text-sm text-gray-500 mt-2 text-center italic">
                                {value.alt}
                              </p>
                            )}
                          </div>
                        );
                      },
                    },
                    block: {
                      h1: ({ children }) => <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 mt-8">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5 mt-7">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-6">{children}</h3>,
                      h4: ({ children }) => <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-5">{children}</h4>,
                      normal: ({ children }) => <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">{children}</p>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
                          {children}
                        </blockquote>
                      ),
                    },
                    marks: {
                      link: ({ children, value }) => {
                        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
                        return (
                          <a
                            href={value?.href}
                            target={target}
                            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            {children}
                          </a>
                        );
                      },
                    },
                  }}
                />
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Back to List Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/advocacy-for-ukraine"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to All Advocacy Posts</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

