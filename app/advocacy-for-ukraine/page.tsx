export const metadata = {
  title: 'Advocacy for Ukraine - Ukraine Solutions',
  description: 'Learn about our advocacy efforts for Ukraine.',
};

export default function AdvocacyForUkraine() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Advocacy for Ukraine</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Advocacy Work</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ukraine Solutions is committed to advocating for Ukraine at the highest levels of government and international organizations. We work tirelessly to ensure that the needs of Ukraine and its people are heard and addressed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our advocacy efforts include meetings with members of Congress, participation in international forums, and collaboration with other organizations to amplify Ukraine&apos;s voice on the global stage.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Advocacy on Capitol Hill</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We regularly meet with lawmakers and policymakers to discuss Ukraine&apos;s urgent needs, including defense assistance, humanitarian aid, and long-term reconstruction support.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To learn more about how you can help as an American citizen and a constituent, please visit our partner&apos;s website:{' '}
              <a href="https://razomforukraine.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                razomforukraine.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

