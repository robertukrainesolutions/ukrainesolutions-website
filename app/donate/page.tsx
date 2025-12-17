import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Donate - Ukraine Solutions',
  description: 'Support Ukraine Solutions and help provide critical aid, defense equipment, and humanitarian support to Ukraine.',
};

export default function Donate() {
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
                Support Ukraine
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
                Your donation helps us provide critical aid, defense equipment, and humanitarian support to Ukraine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
                Make a Donation
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Every donation, no matter the size, helps us provide life-saving aid and critical supplies directly to those on the front lines.
              </p>
            </div>

            {/* Donation Card */}
            <div id="paypal" className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 border-2 border-gray-200 shadow-2xl mb-8 scroll-mt-20">
              <div className="text-center mb-8">
                <div className="inline-block bg-white rounded-lg p-4 sm:p-6 mb-6 shadow-lg border-2 border-gray-200">
                  <Image
                    src="https://www.paypalobjects.com/marketing/web/logos/paypal-mark-color.svg"
                    alt="PayPal"
                    width={160}
                    height={100}
                    className="w-32 sm:w-40 md:w-48 h-auto"
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  Donate via PayPal
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Secure, fast, and easy. Your donation goes directly to supporting our mission.
                </p>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=LA3BPH9RB8R7L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-lg sm:rounded-xl font-black text-lg sm:text-xl md:text-2xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span>Donate Now</span>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Organization Info */}
              <div className="border-t-2 border-gray-200 pt-8 mt-8">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">Organization Information</h4>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg md:text-xl text-gray-700">
                  <div className="bg-white/60 rounded-lg p-4 border border-gray-200">
                    <strong className="text-gray-900 block mb-1">Name:</strong> Ukraine Solutions
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-gray-200">
                    <strong className="text-gray-900 block mb-1">EIN:</strong> 92-0442966
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-gray-200">
                    <strong className="text-gray-900 block mb-1">Status:</strong> 501(c)(3) Non-Profit
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-gray-200">
                    <strong className="text-gray-900 block mb-1">Email:</strong>{' '}
                    <a href="mailto:info@ukrainesolutions.org" className="text-blue-600 hover:text-blue-700 underline">
                      info@ukrainesolutions.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
                Other Ways to Give
              </h2>
            </div>

            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {/* Bank Deposit, Wire, or ACH */}
              <div id="ach-wire" className="border-l-4 border-gray-400 pl-6 sm:pl-8 md:pl-10 scroll-mt-40">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
                  Bank Deposit, Wire, or ACH
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl">
                  For bank transfers, wire transfers, or ACH payments, please contact us at{' '}
                  <a href="mailto:info@ukrainesolutions.org" className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors">
                    info@ukrainesolutions.org
                  </a>
                  {' '}for banking information and instructions.
                </p>
                <a
                  href="mailto:info@ukrainesolutions.org"
                  className="group inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Us</span>
                </a>
              </div>

              {/* Corporate Matching */}
              <div className="border-l-4 border-blue-600 pl-6 sm:pl-8 md:pl-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
                  Corporate Matching
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl">
                  Double or triple your donation impact through your employer&apos;s matching gift program.
                </p>
                <Link
                  href="/corporate-matching"
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Mail a Check */}
              <div className="border-l-4 border-yellow-500 pl-6 sm:pl-8 md:pl-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
                  Mail a Check
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl">
                  Send a check payable to Ukraine Solutions to our mailing address:
                </p>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 sm:p-8 border-2 border-gray-200 shadow-md max-w-md">
                  <div className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold space-y-2">
                    <div className="text-blue-600 font-black text-lg sm:text-xl">Ukraine Solutions</div>
                    <div>PO Box 21</div>
                    <div>Rockville, VA 23146</div>
                    <div>USA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 px-2 text-white">
              Together We Make All The Difference
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 md:mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto px-2">
              Your support helps us deliver critical aid, support defense needs, and rebuild Ukraine. Every donation counts.
            </p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=LA3BPH9RB8R7L"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-lg sm:rounded-xl font-black text-lg sm:text-xl md:text-2xl transition-all shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-2"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span>Donate Now</span>
                <svg className="w-6 h-6 sm:w-7 sm:h-7 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
