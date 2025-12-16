'use client';

import { useState } from 'react';

export default function SubstackEmbed() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className="w-full">
      {!iframeError ? (
        <div className="relative w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl" style={{ minHeight: '800px' }}>
          <iframe
            src="https://ukrainesolutions.substack.com"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              minHeight: '800px',
              width: '100%',
            }}
            onError={() => setIframeError(true)}
            onLoad={(e) => {
              // Check if iframe loaded successfully
              try {
                const iframe = e.target as HTMLIFrameElement;
                // If we can't access content, it might be blocked
                if (!iframe.contentWindow) {
                  setIframeError(true);
                }
              } catch (err) {
                // Cross-origin restrictions are expected, but iframe should still work
                console.log('Iframe loaded (cross-origin restrictions are normal)');
              }
            }}
            title="Ukraine Solutions Substack"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 shadow-xl text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            View Our Substack
          </h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Visit our Substack publication to see all posts and updates.
          </p>
          <a
            href="https://ukrainesolutions.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Open Substack
            <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
      
      {/* Fallback link always visible */}
      <div className="mt-6 text-center">
        <a
          href="https://ukrainesolutions.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base inline-flex items-center"
        >
          View full site on Substack
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

