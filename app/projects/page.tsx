'use client';

import BlogPosts from '@/components/BlogPosts';

export default function Projects() {

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
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
                Our Projects
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
                Current and past projects making a real difference in Ukraine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 border-2 border-blue-500 shadow-xl text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">$100K+</div>
                <div className="text-sm sm:text-base md:text-lg text-blue-100 font-semibold">Donated</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 sm:p-8 border-2 border-yellow-300 shadow-xl text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2">30K+</div>
                <div className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold">Help People</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 border-2 border-blue-500 shadow-xl text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">199+</div>
                <div className="text-sm sm:text-base md:text-lg text-blue-100 font-semibold">Events attended</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 sm:p-8 border-2 border-yellow-300 shadow-xl text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2">11+</div>
                <div className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <BlogPosts />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-900 px-2">
                FAQ
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 shadow-xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  How to Join as a Volunteer?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Send a short e-mail headed &quot;Volunteer&quot; to{' '}
                  <a href="mailto:info@ukrainesolutions.org" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                    info@ukrainesolutions.org
                  </a>{' '}
                  telling us ① who you are, ② what skills you&apos;d like to share, and ③ where you are based.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 shadow-xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Volunteer Roles We Need Right Now
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                  Our priority is getting <strong>drones, communications gear, medical supplies and humanitarian aid</strong> to the front line and displaced families. That means we need:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-gray-700 ml-4">
                  <li><strong>Tech-savvy buyers</strong> who can source drones, radios and power banks worldwide</li>
                  <li><strong>Fund-raisers &amp; grant writers</strong> to keep supplies moving</li>
                  <li><strong>Designers, translators &amp; social-media storytellers</strong> to amplify Ukraine&apos;s voice</li>
                </ul>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 shadow-xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Can I Help If I&apos;m Not in the U.S. or Ukraine?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Absolutely. More than half of our team works fully online. From home you can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-gray-700 ml-4 mt-4">
                  <li>Translate urgent documents and soldiers&apos; requests</li>
                  <li>Run micro-fund-raisers or peer-to-peer events in your city</li>
                  <li>Edit video or create graphics that keep the world focused on Ukrainian resilience</li>
                </ul>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
                  All you need is a stable internet connection and the will to help. We supply the templates, briefings and a mentor so you&apos;re never working alone—every hour you donate pushes critical aid one step closer to the front.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
