'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Statistic {
  value: string;
  label: string;
  source: string;
}

// Statistics from UN HRMMU, Prosecutor General's Office, and Kyiv School of Economics
// Note: These should be updated regularly with the latest data
const statistics: Statistic[] = [
  { value: '23,640+', label: 'injured civilians', source: 'UN HRMMU' },
  { value: '146,994+', label: 'war crimes registered', source: 'Prosecutor General\'s Office' },
  { value: '11,520+', label: 'killed', source: 'UN HRMMU' },
  { value: '584+', label: 'children died', source: 'UN HRMMU' },
  { value: '35,160+', label: 'victims among Ukrainians', source: 'UN HRMMU' },
  { value: '167,200+', label: 'civilian buildings destroyed', source: 'Kyiv School of Economics' },
];

export default function UkraineStats() {
  const [daysSinceInvasion, setDaysSinceInvasion] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate days since full-scale invasion (February 24, 2022)
    const invasionDate = new Date('2022-02-24T00:00:00');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - invasionDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysSinceInvasion(diffDays);

    // Format current date for disclaimer
    const formattedDate = today.toLocaleDateString('en-US', { 
      month: '2-digit', 
      day: '2-digit',
      year: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  // Parse number from string like "23,640+" to 23640
  const parseNumber = (value: string): number => {
    return parseInt(value.replace(/,/g, '').replace('+', ''), 10);
  };

  // Intersection observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '100px',
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  // Animate numbers when visible
  useEffect(() => {
    if (!isVisible) return;

    const targetValues = statistics.map((stat) => parseNumber(stat.value));
    setAnimatedValues(new Array(statistics.length).fill(0));

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const newValues = targetValues.map((target) => {
        return Math.floor(target * easeOutQuart);
      });

      setAnimatedValues(newValues);

      if (currentStep >= steps) {
        clearInterval(interval);
        // Ensure final values are exact
        setAnimatedValues(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const getOrdinalSuffix = (n: number): string => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return (
    <div className="relative w-full">
      {/* Day Counter - Matching H2/H3 styling */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
          <span className="text-red-600">{daysSinceInvasion.toLocaleString()}</span>
          <span className="text-red-600">{getOrdinalSuffix(daysSinceInvasion)}</span>
          {' '}day of Ukraine&apos;s resistance against full-scale Russian aggression
        </h2>
      </div>

      {/* Statistics Grid */}
      <div ref={statsRef} className="relative rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-red-600/30 shadow-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/uploads/photos/51__Consequences-of-Russian-attacks-on-Bucha-the-city-near-Kyiv.-1-March-2022-By-Serhii-Nuzhnenko-1134x756.jpg"
            alt="War crimes background"
            fill
            className="object-cover"
            quality={90}
            sizes="100vw"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Title */}
        <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-red-600 mb-4 sm:mb-6">
            Russia&apos;s War Crimes
          </h3>
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-red-500/50"
            >
              <div className="mb-2 sm:mb-3">
                <div className="text-red-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-lg">
                  {isVisible && animatedValues[index] !== undefined
                    ? `${animatedValues[index].toLocaleString()}+`
                    : '0+'}
                </div>
              </div>
              <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2 drop-shadow-md">
                {stat.label}
              </div>
              <div className="text-white/80 text-xs sm:text-xs md:text-sm font-medium">
                {stat.source}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="relative z-10 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/30">
          <div className="text-center">
            <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2 font-bold">
              Status update as of {currentDate}
            </p>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
              Actual numbers might be considerably higher, as information from many locations with intense hostilities is not yet available or confirmed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

