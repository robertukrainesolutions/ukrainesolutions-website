'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Statistic {
  value: string;
  label: string;
  source: string;
}

// Statistics from UN HRMMU, Prosecutor General's Office, and Kyiv School of Economics
// Updated with latest verified data as of November 2025
// Sources: UN HRMMU (Nov 2025), Prosecutor General's Office (March 2025), Kyiv School of Economics, UN
const statistics: Statistic[] = [
  { value: '38,472+', label: 'injured civilians', source: 'United Nations HRMMU' },
  { value: '183,000+', label: 'war crimes registered', source: 'Prosecutor General\'s Office' },
  { value: '14,534+', label: 'killed', source: 'United Nations HRMMU' },
  { value: '726+', label: 'children died', source: 'United Nations HRMMU' },
  { value: '53,006+', label: 'total civilian casualties', source: 'United Nations HRMMU' },
  { value: '167,200+', label: 'civilian buildings destroyed', source: 'Kyiv School of Economics' },
  { value: '3.6M+', label: 'internally displaced persons', source: 'United Nations' },
  { value: '1,000+', label: 'educational institutions damaged/destroyed', source: 'United Nations' },
  { value: '60%+', label: 'loss of total energy capacity', source: 'United Nations/Reuters' },
];

export default function UkraineStats() {
  const [daysSinceInvasion, setDaysSinceInvasion] = useState(0);
  const [yearsSinceCrimeaOccupation, setYearsSinceCrimeaOccupation] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCounters = () => {
      // Calculate days since full-scale invasion (February 24, 2022)
      // Count inclusively: Feb 24 is day 1, Feb 25 is day 2, etc.
      const invasionDate = new Date('2022-02-24T00:00:00');
      const today = new Date();
      // Set both dates to midnight for accurate day calculation
      const invasionMidnight = new Date(invasionDate.getFullYear(), invasionDate.getMonth(), invasionDate.getDate());
      const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const diffTime = todayMidnight.getTime() - invasionMidnight.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 for inclusive counting
      setDaysSinceInvasion(diffDays);

      // Calculate years since Crimea occupation (February 27, 2014)
      const crimeaOccupationDate = new Date('2014-02-27T00:00:00');
      const crimeaMidnight = new Date(crimeaOccupationDate.getFullYear(), crimeaOccupationDate.getMonth(), crimeaOccupationDate.getDate());
      const crimeaDiffTime = todayMidnight.getTime() - crimeaMidnight.getTime();
      const crimeaDiffDays = Math.floor(crimeaDiffTime / (1000 * 60 * 60 * 24));
      const years = Math.floor(crimeaDiffDays / 365.25);
      setYearsSinceCrimeaOccupation(years);

      // Format current date for disclaimer
      const formattedDate = today.toLocaleDateString('en-US', { 
        month: '2-digit', 
        day: '2-digit',
        year: 'numeric'
      });
      setCurrentDate(formattedDate);
    };

    // Update immediately
    updateCounters();

    // Calculate milliseconds until next midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    // Update at midnight, then every hour
    const midnightTimeout = setTimeout(() => {
      updateCounters();
      const hourlyInterval = setInterval(updateCounters, 60 * 60 * 1000);
      return () => clearInterval(hourlyInterval);
    }, msUntilMidnight);

    // Also update every hour as a backup
    const hourlyInterval = setInterval(updateCounters, 60 * 60 * 1000);

    return () => {
      clearTimeout(midnightTimeout);
      clearInterval(hourlyInterval);
    };
  }, []);

  // Parse number from string like "23,640+" to 23640, "3.6M+" to 3600000, "60%+" to 60
  const parseNumber = (value: string): number => {
    let cleaned = value.replace(/,/g, '').replace('+', '').trim();
    
    // Handle percentage (e.g., "60%+" -> 60)
    if (cleaned.includes('%')) {
      return parseFloat(cleaned.replace('%', ''));
    }
    
    // Handle millions (e.g., "3.6M+" -> 3600000)
    if (cleaned.toUpperCase().includes('M')) {
      const num = parseFloat(cleaned.replace(/M/gi, ''));
      return Math.floor(num * 1000000);
    }
    
    // Handle thousands (e.g., "1.5K+" -> 1500)
    if (cleaned.toUpperCase().includes('K')) {
      const num = parseFloat(cleaned.replace(/K/gi, ''));
      return Math.floor(num * 1000);
    }
    
    // Default: parse as integer
    return parseInt(cleaned, 10);
  };

  // Format display value preserving original format (M, %, etc.)
  const formatDisplayValue = (value: string, animatedNum: number): string => {
    // Handle percentage
    if (value.includes('%')) {
      return `${animatedNum}%+`;
    }
    
    // Handle millions
    if (value.toUpperCase().includes('M')) {
      const num = (animatedNum / 1000000).toFixed(1);
      return `${num}M+`;
    }
    
    // Handle thousands
    if (value.toUpperCase().includes('K')) {
      const num = (animatedNum / 1000).toFixed(1);
      return `${num}K+`;
    }
    
    // Default: format as number with commas
    return `${animatedNum.toLocaleString()}+`;
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
    // Handle special cases: 11th, 12th, 13th (not 11st, 12nd, 13rd)
    const j = n % 10;
    const k = n % 100;
    if (j === 1 && k !== 11) {
      return 'st';
    }
    if (j === 2 && k !== 12) {
      return 'nd';
    }
    if (j === 3 && k !== 13) {
      return 'rd';
    }
    return 'th';
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
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-tight">
          <span className="text-red-500">{yearsSinceCrimeaOccupation}</span>-year-long Russian occupation of Crimea and parts of the Donetsk and Luhansk regions
        </p>
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
                    ? formatDisplayValue(stat.value, animatedValues[index])
                    : stat.value.includes('%') ? '0%+' : stat.value.toUpperCase().includes('M') ? '0M+' : stat.value.toUpperCase().includes('K') ? '0K+' : '0+'}
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

