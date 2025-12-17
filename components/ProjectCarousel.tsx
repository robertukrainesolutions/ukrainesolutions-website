'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

// All images from public/uploads/projects/ (root level .webp files)
const projectImages = [
  '/uploads/projects/0001-1395406323669531382.webp',
  '/uploads/projects/0001-219967131131055284.webp',
  '/uploads/projects/0001-3286918463294657945.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text-1.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text1.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text10.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text2.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text3.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text5.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text6.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text7.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text9.webp',
  '/uploads/projects/Add-a-subheading.webp',
  '/uploads/projects/Add-a-subheading1.webp',
  '/uploads/projects/Add-a-subheading2.webp',
  '/uploads/projects/Add-a-subheading3.webp',
  '/uploads/projects/ENERGY-FOR-THE-VICTORY.webp',
  '/uploads/projects/OUR-VOLONTEERS-IN-UKRAINE.webp',
  '/uploads/projects/POWER-BANKS.webp',
  '/uploads/projects/Practice-Drone.webp',
  '/uploads/projects/SOLDIERS-EYES.webp',
  '/uploads/projects/WEEL-CHAIRS-DELIVERED.webp',
  '/uploads/projects/Wheathe-proff-Sleeping-Bags.webp',
  '/uploads/projects/Winter-Camo-1.webp',
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectImages.length);
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
    setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projectImages.map((image, index) => (
            <div
              key={image}
              className="min-w-full flex items-center justify-center p-4 sm:p-6 md:p-8"
            >
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                width={1200}
                height={800}
                className="w-full max-w-4xl h-auto object-contain max-h-[70vh]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority={index === currentIndex}
                unoptimized
              />
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
        {projectImages.map((_, index) => (
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
  );
}

