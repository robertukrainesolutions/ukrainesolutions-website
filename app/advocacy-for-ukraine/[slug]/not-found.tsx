import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-6">
          Advocacy Post Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The advocacy post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/advocacy-for-ukraine"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Advocacy Posts</span>
        </Link>
      </div>
    </div>
  );
}

