export const metadata = {
  title: 'Contact Us - Ukraine Solutions',
  description: 'Get in touch with Ukraine Solutions. Contact us via email, social media, or mail.',
};

export default function ContactUs() {
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
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Email Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-700 hover:bg-gray-600 rounded-full mb-6 mx-auto transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 text-center">Email</h3>
                <a 
                  href="mailto:info@ukrainesolutions.org" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg text-center block break-words transition-colors"
                >
                  info@ukrainesolutions.org
                </a>
              </div>

              {/* Facebook Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-700 hover:bg-gray-600 rounded-full mb-6 mx-auto transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 text-center">Facebook</h3>
                <a 
                  href="https://www.facebook.com/Ukrainesolution" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg text-center block transition-colors"
                >
                  facebook.com/Ukrainesolution
                </a>
              </div>

              {/* Instagram Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-700 hover:bg-gray-600 rounded-full mb-6 mx-auto transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 text-center">Instagram</h3>
                <a 
                  href="https://instagram.com/ukrainesolutions?igshid=YmMyMTA2M2Y=" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg text-center block transition-colors"
                >
                  @ukrainesolutions
                </a>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 md:col-span-2 lg:col-span-3">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-700 hover:bg-gray-600 rounded-full mb-6 mx-auto transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 text-center">Mailing Address</h3>
                <div className="text-gray-700 text-base sm:text-lg text-center leading-relaxed">
                  <p className="font-semibold mb-2">Ukraine Solutions</p>
                  <p>PO Box 21</p>
                  <p>Rockville, VA 23146</p>
                  <p>USA</p>
                </div>
              </div>
            </div>

            {/* Organization Info */}
            <div className="mt-12 text-center">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4">Organization Information</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-2">
                Ukraine Solutions is a 501(c)(3) non-profit organization dedicated to providing aid and support for Ukraine.
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-semibold">
                EIN: 92-0442966
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

