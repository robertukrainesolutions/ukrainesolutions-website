export const metadata = {
  title: 'Human Trafficking - Ukraine Solutions',
  description: 'Learn about our efforts to combat human trafficking.',
};

export default function HumanTrafficking() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Human Trafficking</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Combatting Human Trafficking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The war in Ukraine has created a humanitarian crisis that has made vulnerable populations, especially women and children, targets for human traffickers. Ukraine Solutions is committed to raising awareness about this critical issue and supporting efforts to prevent and combat human trafficking.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with partner organizations to provide resources, support, and education to help protect those most at risk. Our efforts include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Raising awareness about human trafficking risks</li>
              <li>Supporting safe passage and refugee assistance programs</li>
              <li>Providing resources and information to vulnerable populations</li>
              <li>Collaborating with international organizations focused on human trafficking prevention</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">How You Can Help</h2>
            <p className="text-gray-700 leading-relaxed">
              If you suspect human trafficking or need help, please contact local authorities or human trafficking hotlines immediately. Your support helps us continue this critical work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

