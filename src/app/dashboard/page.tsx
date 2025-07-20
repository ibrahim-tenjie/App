import Link from 'next/link';

const academicYears = [
  { name: 'Year 1', slug: 'year-1', description: 'First year courses and resources.' },
  { name: 'Year 2', slug: 'year-2', description: 'Second year courses and resources.' },
  { name: 'Year 3', slug: 'year-3', description: 'Third year courses and resources.' },
  { name: 'Year 4', slug: 'year-4', description: 'Final year courses and resources.' },
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-16 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <p className="mt-4 text-lg text-gray-400">
          Select an academic year to find your resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {academicYears.map((year) => (
          <Link
            key={year.slug}
            href={`/dashboard/${year.slug}`}
            className="block p-8 bg-gray-800 rounded-xl shadow-lg hover:bg-blue-600 hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-white">{year.name}</h2>
            <p className="mt-2 text-gray-300">{year.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}