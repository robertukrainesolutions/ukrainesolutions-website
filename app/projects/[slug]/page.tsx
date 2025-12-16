import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: 'Project Not Found - Ukraine Solutions',
    };
  }
  return {
    title: `${project.title} - Ukraine Solutions`,
    description: `Learn more about ${project.title} project by Ukraine Solutions.`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  // Fetch content and images from the source URL
  let content = '';
  let paragraphs: string[] = [];
  let projectImages: string[] = [];
  
  try {
    const response = await fetch(project.url, { next: { revalidate: 3600 } });
    const html = await response.text();
    
    // Extract images - look for wp-content/uploads URLs
    const imageMatches = html.match(/https:\/\/ukrainesolutions\.org\/wp-content\/uploads\/[^"'\s<>]+\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)/gi);
    if (imageMatches) {
      const uniqueImages = [...new Set(imageMatches)];
      // Filter out non-project images (logos, seals, etc.)
      projectImages = uniqueImages
        .filter(img => 
          !img.includes('candid-seal') && 
          !img.includes('Stripe_Logo') &&
          !img.includes('logo') &&
          !img.includes('favicon')
        )
        .map(img => img.replace('https://ukrainesolutions.org', ''))
        .slice(0, 20);
    }
    
    // Extract text content from various possible containers
    // Try elementor-text-editor first
    let textMatch = html.match(/<div[^>]*class="[^"]*elementor-text-editor[^"]*"[^>]*>(.*?)<\/div>/gis);
    if (!textMatch) {
      // Try elementor-widget-text-editor
      textMatch = html.match(/<div[^>]*class="[^"]*elementor-widget-text-editor[^"]*"[^>]*>(.*?)<\/div>/gis);
    }
    if (!textMatch) {
      // Try article content
      textMatch = html.match(/<article[^>]*>(.*?)<\/article>/gis);
    }
    if (!textMatch) {
      // Try main content area
      textMatch = html.match(/<main[^>]*>(.*?)<\/main>/gis);
    }
    
    if (textMatch) {
      // Extract paragraphs from matched content
      const allText = textMatch.join(' ');
      const pMatches = allText.match(/<p[^>]*>(.*?)<\/p>/gis);
      if (pMatches) {
        paragraphs = pMatches
          .map(p => p.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim())
          .filter(p => p.length > 50 && !p.match(/^(Skip to|Ukraine Solutions|Home page|About|Projects|Contact|More|Advocacy|Our Main Focus|Human Trafficking|Defense Needs|Partners|Financials|Donate|Popular Course)/i))
          .slice(0, 10);
      }
      
      // If no paragraphs found, extract all text
      if (paragraphs.length === 0) {
        const cleanText = allText
          .replace(/<script[^>]*>.*?<\/script>/gis, '')
          .replace(/<style[^>]*>.*?<\/style>/gis, '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        
        // Split into sentences and create paragraphs
        const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 20);
        for (let i = 0; i < sentences.length; i += 3) {
          const para = sentences.slice(i, i + 3).join('. ').trim();
          if (para.length > 50) {
            paragraphs.push(para + '.');
          }
        }
      }
      
      content = paragraphs.join('\n\n');
    }
  } catch (error) {
    console.error('Error fetching project content:', error);
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Cohesive Background Blobs - Span entire page */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
            </div>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="text-sm sm:text-base font-semibold text-blue-600 mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {content && paragraphs.length > 0 && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                {paragraphs.map((para, idx) => (
                  <p key={idx} className="text-base sm:text-lg md:text-xl mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {projectImages.length > 0 && (
              <div className="space-y-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {projectImages.map((imagePath, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={imagePath}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          unoptimized
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!content && projectImages.length === 0 && (
              <div className="text-center">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                  More information about this project is coming soon.
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  View Original Page
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

