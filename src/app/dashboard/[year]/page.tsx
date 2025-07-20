import Link from 'next/link';
import { courses } from '../../lib/data'; // Import our new course data

export default function YearPage({ params }: { params: { year: string } }) {
  // Find the courses that match the current year's slug
  const yearCourses = courses.filter(
    (course) => course.yearSlug === params.year
  );

  // Capitalize the year slug for the title
  const yearName = params.year
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-16 bg-gray-900 text-white">
      <div className="w-full max-w-6xl">
        <Link
          href="/dashboard"
          className="text-blue-400 hover:text-blue-300 transition-colors mb-8 block"
        >
          &larr; Back to Dashboard
        </Link>

        <h1 className="text-5xl font-bold text-center mb-12">
          {yearName} Resources
        </h1>

        {/* Grid to display the courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yearCourses.length > 0 ? (
            yearCourses.map((course) => (
              <Link
                key={course.id}
                href={`/dashboard/${course.yearSlug}/${course.id}`}
                className="block bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-colors"
              >
                <h2 className="text-2xl font-bold text-white">{course.title}</h2>
                <p className="mt-2 text-gray-300">{course.description}</p>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No courses found for this year.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}