export const metadata = {
  title: 'Financial - Ukraine Solutions',
  description: 'Financial information and transparency for Ukraine Solutions.',
};

export default function Financial() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Financial</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Financial Transparency</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ukraine Solutions is committed to financial transparency and accountability. As a 501(c)(3) non-profit organization, we ensure that donations are used effectively to support our mission.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Tax Information</h3>
              <p className="text-gray-700">
                <strong>EIN:</strong> 92-0442966
              </p>
              <p className="text-gray-700 mt-2">
                Ukraine Solutions is a registered 501(c)(3) organization. Donations are tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">How Your Donations Are Used</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your generous donations directly support:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Humanitarian aid and supplies for Ukrainian citizens and refugees</li>
              <li>Defense equipment including drones and communication devices</li>
              <li>Support for Ukrainian soldiers and their families</li>
              <li>Advocacy efforts and awareness campaigns</li>
              <li>Operational costs to ensure efficient delivery of aid</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We work to minimize administrative costs and maximize the impact of every dollar donated.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Donate Now</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your support makes our work possible. Every donation, no matter the size, helps us provide critical aid to Ukraine.
            </p>
            <a
              href="#"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Make a Donation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

