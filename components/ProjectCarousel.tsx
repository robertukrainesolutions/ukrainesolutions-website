'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { projectData } from '@/lib/projects';

// Map project slugs to their featured images
const projectImages: Record<string, string> = {
  'volunteering-and-help-center': '/uploads/projects/0001-1395406323669531382.webp',
  'ukrainian-cultural-fundraiser-louisa-va': '/uploads/projects/0001-219967131131055284.webp',
  'charity-concert-ukraines-defenders': '/uploads/projects/0001-3286918463294657945.webp',
  '2024-work-in-pictures': '/uploads/projects/Add-a-little-bit-of-body-text-1.webp',
  'advocacy-capitol-hill-april-2024': '/uploads/projects/Add-a-little-bit-of-body-text.webp',
  'summit-september-2024': '/uploads/projects/Add-a-little-bit-of-body-text1.webp',
  'action-summit-spring-2025': '/uploads/projects/Add-a-little-bit-of-body-text2.webp',
  'support-ukraine-above-politics': '/uploads/projects/Add-a-little-bit-of-body-text3.webp',
  'tourniquets-save-lives': '/uploads/projects/Add-a-little-bit-of-body-text5.webp',
  'water-filters-frontline': '/uploads/projects/Add-a-little-bit-of-body-text6.webp',
  'project-spider-boots': '/uploads/projects/Add-a-little-bit-of-body-text7.webp',
  'standing-strong-ukraine': '/uploads/projects/Add-a-little-bit-of-body-text9.webp',
  'harnessing-innovation-adversity': '/uploads/projects/Add-a-little-bit-of-body-text10.webp',
  'empowering-our-heroes': '/uploads/projects/Add-a-subheading.webp',
  'virginians-fear-family': '/uploads/projects/Add-a-subheading1.webp',
  'ready-meals': '/uploads/projects/Add-a-subheading2.webp',
  'starlink': '/uploads/projects/Add-a-subheading3.webp',
  'project-army-drones': '/uploads/projects/ENERGY-FOR-THE-VICTORY.webp',
  'ukranian-days-dc': '/uploads/projects/OUR-VOLONTEERS-IN-UKRAINE.webp',
  'advocacy-september-2022': '/uploads/projects/POWER-BANKS.webp',
};

// Get featured projects (first 6 projects with URLs)
const featuredProjects = Object.values(projectData)
  .filter(project => project.url)
  .slice(0, 6)
  .map(project => ({
    ...project,
    image: projectImages[project.slug] || '/uploads/projects/0001-1395406323669531382.webp',
  }));

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-900 px-2">
              Our Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Explore our impactful initiatives supporting Ukraine
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.slug}
                    className="min-w-full relative"
                  >
                    <Link href={`/projects/${project.slug}`} className="block group">
                      <div className="relative aspect-[16/9] md:aspect-[21/9]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority={index === currentIndex}
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
                          <div className="text-xs sm:text-sm font-semibold text-yellow-400 mb-2 uppercase tracking-wider">
                            {project.category}
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-white font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform">
                            Learn More
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-10 group"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-10 group"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8 sm:w-10 h-3 sm:h-4'
                      : 'bg-gray-300 hover:bg-gray-400 w-3 sm:w-4 h-3 sm:h-4'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/projects"
              className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

