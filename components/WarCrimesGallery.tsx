'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface WarCrimesGalleryProps {
  images: string[];
}

export default function WarCrimesGallery({ images }: WarCrimesGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    // Observer for when section enters view - triggers heading immediately
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Show heading immediately
            setHeadingVisible(true);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '200px',
      }
    );

    // Observer for grid area - triggers images based on scroll position with delay
    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !imagesVisible) {
            // Wait delay before showing images
            setTimeout(() => {
              setImagesVisible(true);
            }, 400);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (gridRef.current) {
      gridObserver.observe(gridRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      if (gridRef.current) {
        gridObserver.unobserve(gridRef.current);
      }
    };
  }, [isVisible, imagesVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden border-t border-gray-200"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 px-2">
            <span className={`text-red-600 ${headingVisible ? 'heading-reveal' : 'heading-hidden'}`}>
              War Crimes by Russia&apos;s Forces
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
            Documented evidence of atrocities committed against the Ukrainian people
          </p>
        </div>

        {/* Grid container - images populate one by one */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-0">
          {images.map((src, index) => {
            const delay = index * 20; // 20ms stagger between images
            
            return (
              <div
                key={index}
                className={`relative overflow-hidden war-crime-image aspect-square ${
                  imagesVisible ? 'grid-image-reveal' : 'grid-image-hidden'
                }`}
                style={{
                  animationDelay: imagesVisible ? `${delay}ms` : '0ms',
                }}
              >
                <Image
                  src={src}
                  alt={`War crime evidence ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

