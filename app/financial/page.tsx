export const metadata = {
  title: 'Financials - Ukraine Solutions',
  description: 'Financials information and transparency for Ukraine Solutions.',
};

export default function Financials() {
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
                Financials
              </h1>
            </div>
            
            {/* Financials Transparency */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-gray-900 text-center">Financials Transparency</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 text-center">
              Ukraine Solutions is committed to financial transparency and accountability. As a 501(c)(3) non-profit organization, we ensure that donations are used effectively to support our mission.
            </p>
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-200 mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 text-gray-900">Tax Information</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">
                <strong className="font-bold">EIN:</strong> 92-0442966
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Ukraine Solutions is a registered 501(c)(3) organization. Donations are tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financials Documents Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-gray-900 text-center">Financials Documents</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center">
              View our annual tax forms and financial reports:
            </p>
            <div className="space-y-4 sm:space-y-6">
                <a
                  href="/financials/920442966_2023_202420739349200712_990EZ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-blue-400 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">2023 Form 990EZ</h3>
                      <p className="text-sm sm:text-base text-gray-600">Annual tax return for 2023</p>
                    </div>
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="/financials/920442966_2024_202540489349201109_990.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-blue-400 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">2024 Form 990</h3>
                      <p className="text-sm sm:text-base text-gray-600">Annual tax return for 2024</p>
                    </div>
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
