import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          University Resource Hub
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Your central place for notes, past questions, and timetables.
        </p>
        
        <Link href="/dashboard" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
          Enter Hub
        </Link>

      </div>
    </main>
  );
}