import Image from 'next/image';

export const metadata = {
  title: 'About Us - Ukraine Solutions',
  description: 'Learn about Ukraine Solutions and our mission to provide humanitarian aid and support for Ukraine.',
};

export default function AboutUs() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ukraine Solutions is a 501(c)(3) non-profit organization dedicated to providing critical resources and humanitarian aid for Ukraine. Our mission is to support Ukrainian soldiers, citizens, refugees, and help rebuild the country.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since the beginning of the full-scale invasion, our founding team has worked tirelessly to deliver life-saving aid and critical supplies directly to those on the front lines. What began as a personal effort has become a collective movement with a clear goal: to protect lives, support displaced families, and help rebuild a stronger Ukraine.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">What We Do</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Deliver humanitarian aid and critical supplies to front-line areas</li>
                <li>Provide support for Ukrainian soldiers and their families</li>
                <li>Assist refugees and displaced persons</li>
                <li>Support defense needs including drones and communication equipment</li>
                <li>Advocate for Ukraine on Capitol Hill and internationally</li>
                <li>Combat human trafficking</li>
                <li>Work with partners to maximize impact</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to transparency, accountability, and making a real difference in the lives of those affected by the war in Ukraine. Every donation goes directly to supporting our mission, and we work closely with trusted partners on the ground to ensure aid reaches those who need it most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

