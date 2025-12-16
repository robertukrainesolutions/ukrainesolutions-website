import Image from 'next/image';
import Link from 'next/link';
import WarCrimesGallery from '@/components/WarCrimesGallery';
import UkraineStats from '@/components/UkraineStats';
import ProjectCarousel from '@/components/ProjectCarousel';

const warCrimesImages = [
  '/uploads/photos/03_libkos_Odesa.jpg',
  '/uploads/photos/0_автор-Alex-Lourie-10.jpg',
  '/uploads/photos/1-1.jpeg',
  '/uploads/photos/116__A-couple-of-Ukrainian-defenders-are-holding-hands-in-Kyiv-17-March-2022-By-Sergei-Supinsky-1134x907.jpg',
  '/uploads/photos/1311369_342-1134x638.jpg',
  '/uploads/photos/136__Mariupol-nowadays-March-2022-By-Maximilian-Clarke.jpg',
  '/uploads/photos/15__автор-Павел-Петров_17-1134x758.jpg',
  '/uploads/photos/1665053753-9824.jpeg',
  '/uploads/photos/19__автор-Emilio-Morenatti-для-АР-1.jpg',
  '/uploads/photos/2023-02-13-14.01.52-1134x757.jpg',
  '/uploads/photos/2023-03-02-12.57.22-1134x851.jpg',
  '/uploads/photos/2023-04-06-12.24.07.jpg',
  '/uploads/photos/2023-05-16-16.12.31-1134x740.jpg',
  '/uploads/photos/2023-07-05-16.59.39-1134x755.jpg',
  '/uploads/photos/2023-09-08-12.11.43-1134x851.jpg',
  '/uploads/photos/2023-10-06-11.39.34-1134x638.jpg',
  '/uploads/photos/2023-11-02-10.59.35-1134x638.jpg',
  '/uploads/photos/2023-11-02-10.59.48.jpg',
  '/uploads/photos/2023-11-02-10.59.51-1134x757.jpg',
  '/uploads/photos/2023-12-22-11.57.29.jpg',
  '/uploads/photos/2024-03-15-18.03.08.jpg',
  '/uploads/photos/2024-03-15-18.03.14-1134x756.jpg',
  '/uploads/photos/2024-04-12-19.03.01.jpg',
  '/uploads/photos/2024-04-12-19.03.14.jpg',
  '/uploads/photos/302521952_601995721452608_5452467053489227162_n-1134x756.jpg',
  '/uploads/photos/316286246_676774190641427_5447646625983583005_n-1134x754.jpg',
  '/uploads/photos/318460292_688968589421987_8429362458915408205_n-1134x756.jpg',
  '/uploads/photos/318615884_688968599421986_2561388891541134734_n-1134x756.jpg',
  '/uploads/photos/323842537_161363066814533_6933197412608939945_n.jpg',
  '/uploads/photos/341475249_232272176006712_7668993376862957401_n-1134x851.jpg',
  '/uploads/photos/343170376_3124707984495769_6411069790350818900_n.jpg',
  '/uploads/photos/343376556_3070590409909499_1283804226037614481_n.jpg',
  '/uploads/photos/34__автор-Vadim-Ghirda-APNews-26_Київ-26.02.jpg',
  '/uploads/photos/35__Дим-після-обстрілів.-Авторство-Aris-Messinis-для-агентства-AFP.jpg',
  '/uploads/photos/3__26.02.2022-Теракт-Росії-в-Києві-ракетний-удар-по-житловому-будинку.-Авторство-Сергій-Міхальчук-1134x756.jpg',
  '/uploads/photos/40__Обстріляний-російськими-військами-будинок.-Авторство-Umit-Bektas-для-агентства-Reuters-1134x637.jpg',
  '/uploads/photos/427968759_701176645502347_5255068620587575022_n-1134x690.jpg',
  '/uploads/photos/45850c6547f8c183.jpg',
  '/uploads/photos/4_aris.messinis-1134x758.jpg',
  '/uploads/photos/50_Russian-burnt-out-military-vehicles-destroyed-by-Ukrainians-in-Kyiv.-February-2022-Author-is-unknown-1134x756.jpeg',
  '/uploads/photos/51__Consequences-of-Russian-attacks-on-Bucha-the-city-near-Kyiv.-1-March-2022-By-Serhii-Nuzhnenko-1134x756.jpg',
  '/uploads/photos/54__Second-Russian-rocket-hitted-the-building-of-the-Kharkiv-Regional-State-Administration.-1-March-2022.-1-March-2022-By-Kirill-Gonchar-1134x638.jpg',
  '/uploads/photos/5GJLWZI525LCPJ5MVX6HCLHCUA.jpg',
  '/uploads/photos/64_Cluster-munition-after-attack-on-Kharkiv-3-March-2022.-By-Andriy-Marienko-for-UNIAN-1134x753.jpg',
  '/uploads/photos/69__A-Ukrainian-soldier-carries-a-baby-across-a-destroyed-bridge-on-the-outskirts-of-Kyiv-Ukraine-on-Thursday-3-March-2022-By-Timothy-Fadek_Redux-for-CNN-1134x756.jpg',
  '/uploads/photos/6_serhiikorovayny-1-1134x756.jpg',
  '/uploads/photos/6d21024b-9478-4268-9e4e-a6c8efae8c28-1134x650.jpeg',
  '/uploads/photos/6e55db72db6cf6a1.jpg',
  '/uploads/photos/76__Ukrainians-crowd-under-a-destroyed-bridge-as-they-try-to-flee-crossing-the-Irpin-river-in-the-outskirts-of-Kyiv-5-March-2022-By-Emilio-Morenatti-для-АР.jpg',
  '/uploads/photos/86__автор-Aris-Messinis-76_ІрпіньБучаСтоянка_05.03.jpg',
  '/uploads/photos/IMG_4384-1134x810.jpg',
  '/uploads/photos/IMG_4396-1134x756.jpg',
  '/uploads/photos/IMG_4813.jpg',
  '/uploads/photos/IMG_9320-1134x756.jpg',
  '/uploads/photos/Snapinsta.app_452484790_1526958764902341_1355677307637107146_n_1080.jpg',
  '/uploads/photos/Snapinsta.app_452508556_7855989397814414_1285532103254499927_n_1080.jpg',
  '/uploads/photos/Snapinsta.app_452642496_493684950017657_636924218819030547_n_1080.jpg',
  '/uploads/photos/Snapinsta.app_461849411_412151471903609_1402938634227590064_n_1080.jpg',
  '/uploads/photos/Snapinsta.app_461850786_561543062999546_4751851682253067187_n_1080.jpg',
  '/uploads/photos/WhatsApp-Image-2024-05-10-at-10.11.13.jpeg',
  '/uploads/photos/WhatsApp-Image-2024-05-10-at-10.11.36.jpeg',
  '/uploads/photos/WhatsApp-Image-2024-08-09-at-18.19.15.jpeg',
  '/uploads/photos/WhatsApp-Image-2024-08-16-at-18.42.25-1134x750.jpeg',
  '/uploads/photos/WhatsApp-Image-2024-10-02-at-14.55.43.jpeg',
  '/uploads/photos/Yzobrazhenye-WhatsApp-2024-05-22-v-16.13.10_9bca2c66-1134x851.jpg',
  '/uploads/photos/photo1704204579-1134x786.jpeg',
  '/uploads/photos/photo1720429775-1134x851.jpeg',
  '/uploads/photos/photo1720440363-1134x756.jpeg',
  '/uploads/photos/photo1720441081.jpeg',
  '/uploads/photos/photo_2022-04-17_14-01-10.jpg',
  '/uploads/photos/photo_2022-04-19_02-54-04-1134x756.jpg',
  '/uploads/photos/photo_2022-05-21_15-55-45.jpg',
  '/uploads/photos/photo_2022-05-25_15-54-35-1134x756.jpg',
  '/uploads/photos/photo_2022-08-17_16-23-22-1134x756.jpg',
  '/uploads/photos/photo_2023-01-14_16-34-52-1134x851.jpg',
  '/uploads/photos/photo_2023-04-04_15-52-57-1134x756.jpg',
  '/uploads/photos/photo_2023-04-19_18-41-05.jpg',
  '/uploads/photos/photo_2023-05-08_11-45-10-1134x756.jpg',
  '/uploads/photos/photo_2023-05-12_13-35-48.jpg',
  '/uploads/photos/photo_2023-05-12_13-35-49.jpg',
  '/uploads/photos/photo_2023-05-29_17-18-43-1134x756.jpg',
  '/uploads/photos/photo_2023-06-14_07-59-45-1134x851.jpg',
  '/uploads/photos/photo_2023-06-27_18-26-01.jpg',
  '/uploads/photos/photo_2023-06-27_18-29-16-1134x757.jpg',
  '/uploads/photos/photo_2023-06-27_18-29-17-1134x757.jpg',
  '/uploads/photos/photo_2023-07-04_14-57-31.jpg',
  '/uploads/photos/photo_2023-07-10_08-32-01-1134x851.jpg',
  '/uploads/photos/photo_2023-07-20_13-38-54.jpg',
  '/uploads/photos/photo_2023-09-11_18-32-34-1134x803.jpg',
  '/uploads/photos/photo_2023-09-11_18-32-54-1134x752.jpg',
  '/uploads/photos/photo_2023-09-12_12-45-00-1134x755.jpg',
  '/uploads/photos/photo_2023-09-25_10-06-06.jpg',
  '/uploads/photos/photo_2023-09-26_16-26-45.jpg',
  '/uploads/photos/photo_2023-10-25_14-32-14-1134x755.jpg',
  '/uploads/photos/photo_2023-11-21_17-00-46-1134x755.jpg',
  '/uploads/photos/photo_2023-11-29_17-11-08-1134x760.jpg',
  '/uploads/photos/photo_2023-12-05_16-53-11.jpg',
  '/uploads/photos/photo_2023-12-13_16-28-08-1134x719.jpg',
  '/uploads/photos/photo_2023-12-13_16-37-40-2-1134x756.jpg',
  '/uploads/photos/photo_2023-12-13_16-37-40.jpg',
  '/uploads/photos/photo_2023-12-29_09-57-48-1134x851.jpg',
  '/uploads/photos/photo_2023-12-29_14-19-28-1134x639.jpg',
  '/uploads/photos/photo_2024-01-17_09-49-21.jpg',
  '/uploads/photos/photo_2024-01-24_11-57-24-1134x755.jpg',
  '/uploads/photos/photo_2024-02-02_17-19-59.jpg',
  '/uploads/photos/photo_2024-03-02_10-46-09-2.jpg',
  '/uploads/photos/photo_2024-03-21_08-12-00-2.jpg',
  '/uploads/photos/photo_2024-03-25_11-40-46-1134x713.jpg',
  '/uploads/photos/photo_2024-04-18_14-17-37-1134x755.jpg',
  '/uploads/photos/photo_2024-04-23_08-46-40-1134x756.jpg',
  '/uploads/photos/photo_2024-04-29_21-45-07.jpg',
  '/uploads/photos/photo_2024-05-02_12-00-39-2-1134x1134.jpg',
];

const projectImages = [
  '/uploads/projects/0001-1395406323669531382.webp',
  '/uploads/projects/0001-219967131131055284.webp',
  '/uploads/projects/0001-3286918463294657945.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text-1.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text1.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text10.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text2.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text3.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text5.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text6.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text7.webp',
  '/uploads/projects/Add-a-little-bit-of-body-text9.webp',
  '/uploads/projects/Add-a-subheading.webp',
  '/uploads/projects/Add-a-subheading1.webp',
  '/uploads/projects/Add-a-subheading2.webp',
  '/uploads/projects/Add-a-subheading3.webp',
  '/uploads/projects/ENERGY-FOR-THE-VICTORY.webp',
  '/uploads/projects/OUR-VOLONTEERS-IN-UKRAINE.webp',
  '/uploads/projects/POWER-BANKS.webp',
  '/uploads/projects/Practice-Drone.webp',
  '/uploads/projects/SOLDIERS-EYES.webp',
  '/uploads/projects/WEEL-CHAIRS-DELIVERED.webp',
  '/uploads/projects/Wheathe-proff-Sleeping-Bags.webp',
  '/uploads/projects/Winter-Camo-1.webp',
];

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Cohesive Background Blobs - Span entire page */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      {/* Hero Section - With Background Image */}
      <section className="relative min-h-[100vh] sm:min-h-[90vh] flex items-end justify-center overflow-hidden w-full -mt-[120px]">
        {/* Background Image - Positioned to show bottom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{ 
              clipPath: 'inset(50px 0 0 0)',
              WebkitClipPath: 'inset(50px 0 0 0)'
            }}
          >
            <Image
              src="/uploads/photo_2.jpg"
              alt="Ukraine Support"
              fill
              className="object-cover object-top"
              priority
              quality={90}
              sizes="100vw"
            />
          </div>
          {/* Multi-layer Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-yellow-600/30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(234, 179, 8, 0.2) 0%, transparent 50%)'
          }}></div>
        </div>

        {/* Animated Background Elements - Responsive sizes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content - Positioned lower */}
        <div className="container mx-auto px-3 sm:px-4 pb-8 sm:pb-10 md:pb-12 relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading with Animation - Responsive */}
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-8 sm:mb-8 md:mb-10 lg:mb-12 leading-[1.2] text-white drop-shadow-2xl px-2">
              <span className="block text-white break-words">
                Solutions for
              </span>
              <span className="block mt-2 sm:mt-2 md:mt-3 relative inline-block">
                <span className="relative inline-block">
                  {/* Blue top portion */}
                  <span 
                    className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent break-words"
                    style={{ 
                      clipPath: 'polygon(0 0, 100% 0, 100% 58%, 0 58%)',
                      WebkitClipPath: 'polygon(0 0, 100% 0, 100% 58%, 0 58%)'
                    }}
                  >
                    Ukraine
                  </span>
                  {/* Yellow bottom portion */}
                  <span 
                    className="absolute inset-0 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent break-words"
                    style={{ 
                      clipPath: 'polygon(0 58%, 100% 58%, 100% 100%, 0 100%)',
                      WebkitClipPath: 'polygon(0 58%, 100% 58%, 100% 100%, 0 100%)'
                    }}
                  >
                    Ukraine
                  </span>
                </span>
              </span>
            </h1>

            {/* Subheading - Responsive */}
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 font-light text-white/95 leading-relaxed max-w-4xl mx-auto drop-shadow-lg px-2">
              An Experienced Team Committed to Provide Resources and Humanitarian Aid for Ukraine Soldiers, Citizens, Refugees and Help Rebuild Country.
            </p>

            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 md:mt-16 px-2">
              <Link
                href="https://www.paypal.com/donate/?hosted_button_id=LA3BPH9RB8R7L"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-8 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-4 md:py-5 lg:py-6 rounded-lg sm:rounded-xl font-black text-base sm:text-base md:text-lg lg:text-xl transition-all shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Donate Now</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/advocacy-for-ukraine"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 px-8 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-4 md:py-5 lg:py-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-base md:text-lg lg:text-xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-8 sm:mt-12 md:mt-16 animate-bounce">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Ukraine Statistics Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative -mt-1 border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4">
          <UkraineStats />
        </div>
      </section>

      {/* War Crimes Gallery - Enhanced with Cascade-to-Grid Animation */}
      <WarCrimesGallery images={warCrimesImages} />

      {/* Mission Statement - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6">
                Our Mission
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed text-center mb-4 sm:mb-6 font-medium">
              Our commitment to Ukraine is driven by purpose and urgency. Since the beginning of the full-scale invasion, our founding team has helped deliver life-saving aid and critical supplies directly to those on the front lines.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center">
              What began as a personal effort has become a collective movement with a clear goal: to protect lives, support displaced families, and help rebuild a stronger Ukraine.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 px-2">
              Our Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
              Current and past projects making a real difference in Ukraine
            </p>
          </div>
          <ProjectCarousel />
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden border-t border-gray-200">
        {/* Animated Background - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 px-2 text-white">
              Together We Make
              <br />
              All The Difference
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 md:mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto px-2">
              Your support helps us deliver critical aid, support defense needs, and rebuild Ukraine. Every donation counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
              <Link
                href="https://www.paypal.com/donate/?hosted_button_id=LA3BPH9RB8R7L"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-lg sm:rounded-xl font-black text-sm sm:text-base md:text-lg lg:text-xl transition-all shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>Donate Now</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/advocacy-for-ukraine"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/40 hover:border-white/60 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>Advocacy for Ukraine</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
