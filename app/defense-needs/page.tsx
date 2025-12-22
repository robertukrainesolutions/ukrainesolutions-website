import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Defense Needs - Ukraine Solutions',
  description: 'Needs: Body Armor - Drones - Satellite Communications - Portable/foldable Solar Panels - Cold Weather Gear - Computer Tablets',
};

export default function DefenseNeeds() {
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
                Defense Needs
              </h1>
            </div>
            
            {/* Needs List */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center mb-8 sm:mb-12">
              <strong>Needs:</strong> Body Armor - Drones - Satellite Communications - Portable/foldable Solar Panels - Cold Weather Gear - Computer Tablets
            </p>
          </div>
        </div>
      </section>

      {/* Drones Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-gray-900 text-center">
              <strong>Drones: Saving Lives of Our Soldiers in Ukraine! Our Top Priority at Ukraine Solutions!</strong>
            </h2>
            
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative w-full max-w-2xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <Image
                  src="/uploads/defense-needs/11.webp"
                  alt="Drones saving lives in Ukraine"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              <p>
                In the midst of challenges and conflicts, the safety and well-being of our brave soldiers serving on the frontlines are of paramount importance. At Ukraine Solutions, we stand dedicated to providing them with every possible advantage to protect and preserve their lives.
              </p>
              <p>
                Today, we proudly highlight the remarkable impact of <strong>DRONES</strong> in our mission to safeguard the lives of our soldiers. These unmanned aerial guardians are proving to be a crucial lifeline on the battlefield, enhancing situational awareness and empowering our troops with invaluable support.
              </p>
              <p>
                With precision and speed, drones are helping our forces gain critical intelligence, scout enemy positions, and monitor potential threats from afar. Their real-time data transmission ensures that our soldiers can make informed decisions, minimizing risks and maximizing their effectiveness.
              </p>
              <p>
                Moreover, these advanced technologies enable us to deliver vital supplies and medical aid directly to our troops, even in the most challenging and remote terrains. From emergency medical kits to essential equipment, drones are the key to ensuring our soldiers receive the help they need when they need it the most.
              </p>
              <p>
                Ukraine Solutions is deeply committed to harnessing the potential of drones for the greater good of our nation and our courageous soldiers. By integrating innovation into our relief efforts, we strengthen the collective resolve to protect those who protect us.
              </p>
              <p>
                Join us in supporting this noble cause and making a difference in the lives of our soldiers. Together, we can stand as a beacon of hope and gratitude for their bravery and sacrifice.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="https://www.paypal.com/donate/?hosted_button_id=LA3BPH9RB8R7L"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg"
              >
                Donate
              </Link>
              <Link
                href="/advocacy-for-ukraine"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Advocacy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
