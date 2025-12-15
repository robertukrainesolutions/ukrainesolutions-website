export const metadata = {
  title: 'Our Partners and Sponsors - Ukraine Solutions',
  description: 'Learn about our partners and sponsors.',
};

export default function Partners() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Our Partners and Sponsors</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Working Together for Ukraine</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ukraine Solutions collaborates with a network of trusted partners and sponsors to maximize our impact and ensure that aid reaches those who need it most. Our partnerships are essential to our mission.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>International humanitarian organizations</li>
              <li>Ukrainian volunteer groups and NGOs</li>
              <li>Government agencies and officials</li>
              <li>Corporate sponsors and donors</li>
              <li>Individual volunteers and supporters</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Become a Partner</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your organization is interested in partnering with Ukraine Solutions, we would love to hear from you. Together, we can make a greater impact in supporting Ukraine.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please contact us at{' '}
              <a href="mailto:info@ukrainesolutions.org" className="text-blue-600 hover:text-blue-700 underline">
                info@ukrainesolutions.org
              </a>
              {' '}to discuss partnership opportunities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Partner Organizations</h2>
            <p className="text-gray-700 leading-relaxed">
              We are grateful for the support of all our partners who share our commitment to helping Ukraine. Your collaboration makes our work possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

