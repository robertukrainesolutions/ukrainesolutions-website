import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Defense Needs - Ukraine Solutions',
  description: 'Learn about Ukraine\'s urgent defense needs and how you can help.',
};

export default function DefenseNeeds() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Defense Needs</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Urgent Defense Priorities</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ukraine Solutions focuses on providing critical defense equipment and supplies to support Ukrainian forces on the front lines. Our top priorities include:
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Drones - Our Top Priority</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Drones are essential for reconnaissance, surveillance, and tactical operations. They provide Ukrainian forces with critical intelligence and capabilities on the battlefield.
              </p>
              <div className="flex justify-center mb-4">
                <Image
                  src="/uploads/2024/01/U24Drones.png"
                  alt="U24 Drones"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <Link
                href="#"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Donate to Support Drones
              </Link>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Communication Equipment</h3>
                <p className="text-gray-700">Secure communication devices are vital for coordinating operations and maintaining contact between units.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cybersecurity Tools</h3>
                <p className="text-gray-700">Protecting digital infrastructure and communications from cyber threats is essential for Ukraine&apos;s defense.</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Satellite Receivers</h3>
                <p className="text-gray-700">Reliable communication and navigation systems are critical for military operations.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">How We Help</h2>
            <p className="text-gray-700 leading-relaxed">
              We work directly with trusted partners on the ground in Ukraine to ensure that defense equipment reaches those who need it most. Every donation helps us provide critical support to Ukrainian forces defending their country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

