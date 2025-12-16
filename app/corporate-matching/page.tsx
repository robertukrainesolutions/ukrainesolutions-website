import Link from 'next/link';

export const metadata = {
  title: 'Corporate Matching - Ukraine Solutions',
  description: 'Learn about corporate matching programs and how your company can double your donation impact.',
};

export default function CorporateMatching() {
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
                Corporate Matching
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
                Double or triple your donation impact through your employer&apos;s matching gift program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Double Your Impact Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
                Double Your Impact
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              <p className="text-center">
                Many companies offer corporate matching programs that can <strong className="text-blue-600">double or even triple</strong> your donation to Ukraine Solutions. If your employer participates in a matching gift program, your contribution can have an even greater impact on our mission to provide aid and support for Ukraine.
              </p>
              <p className="text-center">
                Corporate matching is a simple way to maximize your generosity and help us reach more people in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
                How It Works
              </h2>
            </div>
            
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {/* Step 1 */}
              <div className="border-l-4 border-blue-600 pl-6 sm:pl-8 md:pl-10">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-black flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Make a Donation</h3>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl">
                  Make a donation to Ukraine Solutions through our PayPal donation page or by check.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-yellow-500 pl-6 sm:pl-8 md:pl-10">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="bg-yellow-500 text-gray-900 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-black flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Check with Employer</h3>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl">
                  Check with your employer to see if they offer a corporate matching program. Many companies match employee donations to 501(c)(3) organizations.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-blue-600 pl-6 sm:pl-8 md:pl-10">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-black flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Submit Request</h3>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl">
                  Submit a matching request through your company&apos;s employee giving portal or HR department.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-yellow-500 pl-6 sm:pl-8 md:pl-10">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="bg-yellow-500 text-gray-900 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-black flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Provide Information</h3>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 max-w-4xl">
                  Use our organization details:
                </p>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 sm:p-8 border-2 border-gray-200 shadow-md max-w-2xl">
                  <div className="space-y-3 text-base sm:text-lg md:text-xl text-gray-800">
                    <div><strong className="text-gray-900">Name:</strong> Ukraine Solutions</div>
                    <div><strong className="text-gray-900">EIN:</strong> 92-0442966</div>
                    <div><strong className="text-gray-900">Address:</strong> PO Box 21, Rockville, VA 23146, USA</div>
                    <div><strong className="text-gray-900">Email:</strong> <a href="mailto:info@ukrainesolutions.org" className="text-blue-600 hover:text-blue-700 underline">info@ukrainesolutions.org</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
                Why Corporate Matching Matters
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              <p>
                Corporate matching programs allow us to:
              </p>
              <ul className="space-y-4 ml-6 list-disc max-w-4xl">
                <li>Provide more humanitarian aid and critical supplies</li>
                <li>Support more Ukrainian soldiers and their families</li>
                <li>Assist more refugees and displaced persons</li>
                <li>Deliver more defense equipment including drones and communication devices</li>
                <li>Expand our advocacy efforts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="border-l-4 border-yellow-500 pl-6 sm:pl-8 md:pl-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Need Help?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 max-w-4xl">
                If you need assistance with corporate matching or have questions about the process, please contact us at{' '}
                <a href="mailto:info@ukrainesolutions.org" className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors">
                  info@ukrainesolutions.org
                </a>
                . We&apos;re here to help make the matching process as smooth as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                <Link
                  href="/donate"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-8 py-4 rounded-lg sm:rounded-xl font-black text-base sm:text-lg md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Make a Donation</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Contact Us</span>
                  <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
