'use client';

import { useEffect } from 'react';

export default function Posts() {
  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== 'undefined' && !(window as any).FB) {
      // Create fb-root div if it doesn't exist
      if (!document.getElementById('fb-root')) {
        const fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.appendChild(fbRoot);
      }

      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        // Parse XFBML after SDK loads
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);

      return () => {
        // Cleanup
        const existingScript = document.querySelector('script[src*="sdk.js"]');
        if (existingScript) {
          existingScript.remove();
        }
        const fbRoot = document.getElementById('fb-root');
        if (fbRoot) {
          fbRoot.remove();
        }
      };
    } else if (typeof window !== 'undefined' && (window as any).FB) {
      // SDK already loaded, parse XFBML
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Cohesive Background Blobs - Span entire page */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-2 sm:mb-3 px-2">
                Posts
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
                Stay updated with our latest news and updates from Facebook
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Posts Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="relative z-10">
          {/* Facebook Page Plugin Embed - Using FB SDK */}
          <div className="flex items-center justify-center w-full px-4">
            <div 
              className="fb-page" 
              data-href="https://www.facebook.com/Ukrainesolution"
              data-tabs="timeline"
              data-width="500"
              data-height="1200"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
          </div>
          
          <div className="container mx-auto px-3 sm:px-4 mt-12">
            {/* Additional Info */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Follow us on Facebook to see all our latest posts, updates, and news.
              </p>
              <a
                href="https://www.facebook.com/Ukrainesolution"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Visit Our Facebook Page</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
