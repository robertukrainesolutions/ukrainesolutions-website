import Image from 'next/image';

export const metadata = {
  title: 'Our Partners and Sponsors - Ukraine Solutions',
  description: 'Learn about our partners and sponsors who help us support Ukraine.',
};

export default function Partners() {
  const partners = [
    {
      name: 'Ukrainian Orthodox Cathedral of St. Volodymyr',
      description: 'Ukrainian church in New York',
      website: 'https://stvuoc.org',
      websiteDisplay: 'stvuoc.org',
      image: null,
    },
    {
      name: 'Charitable Fund to support volunteers and their families',
      description: 'A non-profit registered in Ukraine supports volunteers and their families.',
      website: 'https://svf.org.ua',
      websiteDisplay: 'svf.org.ua',
      image: null,
    },
    {
      name: 'Ukrainian Spring Center',
      description: '',
      website: 'https://ressori.com.ua',
      websiteDisplay: 'ressori.com.ua',
      image: null,
    },
    {
      name: 'Dream Ukraine',
      description: '',
      website: 'https://www.dreamua.win/',
      websiteDisplay: 'dreamua.win',
      image: '/uploads/partners/dream-ukraine.jpg',
    },
    {
      name: 'Charitable Foundation "Trust, Vyshneve"',
      description: '',
      website: 'https://www.instagram.com/bf_dovira/',
      websiteDisplay: 'instagram.com/bf_dovira',
      image: '/uploads/partners/trust-vyshneve.jpg',
    },
    {
      name: 'AXDIGITAL',
      description: '',
      website: 'https://www.axdigital.us/',
      websiteDisplay: 'axdigital.us',
      image: '/uploads/partners/axdigital.png',
    },
    {
      name: 'Shield of Freedom',
      description: '',
      website: 'https://shieldoffreedom.org/',
      websiteDisplay: 'shieldoffreedom.org',
      image: '/uploads/partners/shield-of-freedom.jpg',
    },
    {
      name: 'RichTile',
      description: '',
      website: 'https://www.richtileinstall.com/',
      websiteDisplay: 'richtileinstall.com',
      image: '/uploads/partners/richtile.png',
    },
    {
      name: 'Blue/Yellow USA',
      description: '',
      website: 'https://foblueyellowukraineusa.org/',
      websiteDisplay: 'foblueyellowukraineusa.org',
      image: '/uploads/partners/blue-yellow-usa.jpg',
    },
    {
      name: 'Clinic Aurum',
      description: '',
      website: 'https://www.clinic-aurum.com/',
      websiteDisplay: 'clinic-aurum.com',
      image: '/uploads/partners/clinic-aurum.jpg',
    },
    {
      name: 'Auto Maidan Volunteers',
      description: '',
      website: 'https://www.facebook.com/groups/AutoMaidanKyiv/',
      websiteDisplay: 'facebook.com/groups/AutoMaidanKyiv',
      image: '/uploads/partners/auto-maidan.jpg',
    },
  ];

  // Separate partners with and without images
  const partnersWithImages = partners.filter(p => p.image);
  const partnersWithoutImages = partners.filter(p => !p.image);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Cohesive Background Blobs - Span entire page */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
                Our Partners and Sponsors
              </h1>
            </div>
            
            {/* Introduction */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center">
              Ukraine Solutions provides for people in Ukraine and organizations who are building a strong and democratic Ukraine. We realized from the day one of our organization that we would like to collaborate with individuals and organizations in order to achieve great results in the timely manner. We are very strong when we are united.
            </p>
          </div>
        </div>
      </section>

      {/* Partners with Images - Logo Grid */}
      {partnersWithImages.length > 0 && (
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 text-gray-900 text-center">
                Our Partners
              </h2>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                  {partnersWithImages.map((partner, index) => (
                    <a
                      key={index}
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
                    >
                      <div className="relative w-full h-[180px] sm:h-[220px] mb-4 sm:mb-6">
                        <Image
                          src={partner.image!}
                          alt={partner.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h3>
                      {partner.description && (
                        <p className="text-sm sm:text-base text-gray-600 mb-3">
                          {partner.description}
                        </p>
                      )}
                      <span className="text-blue-600 group-hover:text-blue-700 font-semibold text-sm sm:text-base inline-flex items-center mt-auto">
                        Visit Website
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partners without Images */}
      {partnersWithoutImages.length > 0 && (
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 text-gray-900 text-center">
                Additional Partners
              </h2>
              <div className="space-y-4 sm:space-y-6">
                  {partnersWithoutImages.map((partner, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-gray-200 hover:border-blue-400 transition-all shadow-md hover:shadow-lg"
                    >
                      <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-gray-900">
                        {partner.name}
                      </h3>
                      {partner.description && (
                        <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                          {partner.description}
                        </p>
                      )}
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base inline-flex items-center transition-colors"
                        >
                          {partner.websiteDisplay}
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
