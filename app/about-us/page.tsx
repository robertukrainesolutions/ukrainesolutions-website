import Image from 'next/image';

export const metadata = {
  title: 'About Us - Ukraine Solutions',
  description: 'Learn about Ukraine Solutions and our mission to provide humanitarian aid and support for Ukraine.',
};

export default function AboutUs() {
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
                About Us
              </h1>
            </div>
            
            {/* Introduction */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed text-center mb-4 sm:mb-6 font-medium">
              Our initiative to help Ukraine is personal on many levels. Our founding members were instrumental in sourcing over $3 million in assets to the Ukrainian front lines since the start of the war. As co-founders and founding board members of Lift Up Ukraine, we have expanded our team in order to maximize results for Ukraine. Join us today in an all out effort to provide resources for rebuilding, refugee relocation and resources for survival.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center mb-8 sm:mb-12">
              We are committed to continue providing satellite receivers, communication devices, drone technology, cybersecurity and humanitarian aid.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 sm:space-y-12 mb-12">
              {/* Alexandra Blagova */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-200 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-gray-900">Alexandra Blagova</h2>
                <p className="text-lg sm:text-xl font-semibold text-blue-600 mb-6">Co-Founder, Chief Executive Officer</p>
                <div className="relative">
                  <div className="float-left mr-4 sm:mr-6 mb-4">
                    <Image
                      src="/uploads/about-us/alexandra-blagova.jpg"
                      alt="Alexandra Blagova"
                      width={200}
                      height={280}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Alexandra Blagova, originally from Lviv, Ukraine, now resides in Richmond, VA. She is a former cyclist who was part of the Ukrainian national team and studied at the Bobersky Lviv State University of Physical Culture and Lviv College of Sports.
                    </p>
                    <p>
                      Alexandra&apos;s extensive experience in fundraising and logistics, particularly in delivering humanitarian and medical aid to the front lines of Ukraine&apos;s defense against Russian aggression, is evident. Her leadership in navigating the U.S. Department of Commerce&apos;s regulations ensured the smooth transportation of critical resources into Ukraine.
                    </p>
                    <p>
                      Recognized by her peers across the United States and Europe for her exceptional achievements, Alexandra was a founding member of the Non-Profit Board of Directors of Lift Up Ukraine. Driven by a deep commitment to her homeland, she co-founded Ukraine Solutions to further support displaced citizens and refugees and contribute to Ukraine&apos;s reconstruction. She continues to support children, Ukrainian citizens, soldiers, and medical needs. Ms. Blagova has also engaged with policymakers at the Ukraine Action Summit in Washington, D.C., advocating for enhanced policies and resources to aid Ukraine.
                    </p>
                  </div>
                  <div className="clear-both"></div>
                </div>
              </div>

              {/* Vadym Triukhan */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-200 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-gray-900">Vadym Triukhan</h2>
                <p className="text-lg sm:text-xl font-semibold text-blue-600 mb-6">Board of Directors</p>
                <div className="relative">
                  <div className="float-left mr-4 sm:mr-6 mb-4">
                    <Image
                      src="/uploads/about-us/vadym-triukhan.jpg"
                      alt="Vadym Triukhan"
                      width={200}
                      height={280}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Mr. Vadym Triukhan is a Deputy Commander of the Company in the Battalion of Territorial Defense in the Ukrainian Army. In 1997 graduated from the Institute of Oriental Studies and International Relations &quot;Kharkiv Collegium,&quot; and in 2001, from the Ukrainian Academy of Public Administration under the President of Ukraine.
                    </p>
                    <p>
                      During 1997–2007, he was on diplomatic service on various positions at the Law and Treaties Department, Consular Directorate General and EU Directorate General of the Ministry of Foreign Affairs of Ukraine, Administration of the President of Ukraine, the OSCE Mission in Croatia, and in 2002, the Council of Europe Mission in Kosovo.
                    </p>
                    <p>
                      In 2008, Mr. Triukhan established the Coordinating Bureau for European and Euro-Atlantic Integration within the Secretariat of the Cabinet of Ministers of Ukraine, and was the bureau&apos;s director till 2010.
                    </p>
                    <p>
                      He participated in a number of negotiations on adjustment of certain legal problems in Ukraine&apos;s relations with other countries, and was a member of the Ukrainian delegation on the talks with the EU on conclusion of the Association Agreement.
                    </p>
                    <p>
                      In 2010 and 2011, Mr. Triukhan served as Ambassador-at-large in the Ministry of Foreign Affairs of Ukraine, during 2011–2013, – partner of IMG Partners attorneys at law company, and from September to December 2013, – head of the Foreign Economic Department in the Ministry of Agrarian Policy and Food of Ukraine.
                    </p>
                    <p>
                      <strong>Awards:</strong> Certificate of Honor from the Ministry of Foreign Affairs of Ukraine (2007) and Certificate of Honor from the Cabinet of Ministers of Ukraine (2009).
                    </p>
                    <p>
                      Vadym Triukhan is author of over 100 publications on international law, eurointegration and politics.
                    </p>
                  </div>
                  <div className="clear-both"></div>
                </div>
              </div>

              {/* Levin White */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-200 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-gray-900">Levin White</h2>
                <p className="text-lg sm:text-xl font-semibold text-blue-600 mb-6">Co-Founder / Senior Advisor</p>
                <div className="relative">
                  <div className="float-left mr-4 sm:mr-6 mb-4">
                    <Image
                      src="/uploads/about-us/levin-white.jpg"
                      alt="Levin White"
                      width={200}
                      height={280}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Levin White has more than 33 years in law enforcement. His experience is well versed and supported by state and federal awards commending his efforts, sacrifice and commitment to public service investigating homicides, violent crimes, sex trafficking, contract fraud, kickbacks and public corruption. His commitment to helping others is a community standard. He has experience serving as the Grants and Compliance Manager for a cold case homicide nonprofit organization, Co-founder of Lift Up Ukraine and continues to help in the community on many levels.
                    </p>
                    <p>
                      Since the start of the Russian invasion of Ukraine, Mr. White brought law enforcement agencies together in Virginia and Arkansas where he was able to collect over 3000 sets of body armor, kevlar helmets, protective gear, medical aid, technology and satellite communication devices to assist Ukraine. He secured compliance with the State Departments requirement in ITAR registration and The Department of Commerce. With expert help by his Lift Up Ukraine team and logistics provided by Ms. Blagova, the short term goals of more than $3million in assets were delivered to Ukraine. Mr. White is committed to a long term investment in helping Ukraine.
                    </p>
                    <p>
                      He is a graduate of Ferrum College with a degree in International Relations and language emphasis on Russian and a degree in business administration. He is currently completing his graduate studies at The L. Douglas Wilder School of Government and Public Affairs at Virginia Commonwealth University (VCU).
                    </p>
                  </div>
                  <div className="clear-both"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-900 px-2">
                Our Volunteers
              </h2>
            </div>
            
            <div className="space-y-8 sm:space-y-12">
              {/* Viktor Yushchenko */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-200 shadow-2xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 text-gray-900">Viktor Andriyovych Yushchenko</h3>
                <p className="text-base sm:text-lg font-semibold text-blue-600 mb-4">Student of Forestry College of NLTU</p>
                <div className="relative">
                  <div className="float-left mr-4 mb-4">
                    <Image
                      src="/uploads/about-us/viktor-yushchenko.jpg"
                      alt="Viktor Andriyovych Yushchenko"
                      width={150}
                      height={200}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Viktor Andriyovych Yushchenko. I am studying at the Forestry College of NLTU. I became a volunteer back in 2015 the year when my father joined the Ukrainian Armed Forces. My goal is to help our country to win the war against Russian aggression. Glory to Ukraine! Glory to heroes! 💙💛🇺🇦
                  </p>
                  <div className="clear-both"></div>
                </div>
              </div>

              {/* Maria Danilova */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-200 shadow-2xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 text-gray-900">Danilova Maria Anatolyivna</h3>
                <p className="text-base sm:text-lg font-semibold text-blue-600 mb-4">Designer</p>
                <div className="relative">
                  <div className="float-left mr-4 mb-4">
                    <Image
                      src="/uploads/about-us/maria-danilova.jpg"
                      alt="Danilova Maria Anatolyivna"
                      width={150}
                      height={200}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Danilova Maria Anatolyivna, born and raised in Ukraine. Athlete, designer and I play a very active role in my busy life. I try to improve myself and improve the world around me. Since the beginning of the full-scale invasion, I have been unstoppable with helping displaced people, animals, volunteers, and soldiers of the Armed Forces of Ukraine. I will not stop until VICTORY.
                  </p>
                  <div className="clear-both"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

