import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-6">
          Project Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

