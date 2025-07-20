import Link from 'next/link';
import { courses } from '../../../lib/data';
import ReactMarkdown from 'react-markdown'; // Import the new library

export default function CourseDetailPage({
  params,
}: {
  params: { year: string; courseId: string };
}) {
  const course = courses.find(
    (c) => c.yearSlug === params.year && c.id === params.courseId
  );

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-white">
        <h1 className="text-4xl">Course Not Found</h1>
        <Link
          href={`/dashboard/${params.year}`}
          className="mt-4 text-blue-400 hover:text-blue-300"
        >
          &larr; Back to ${params.year.replace('-', ' ')}
        </Link>
      </div>
    );
  }

  const yearName = params.year
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-16 bg-gray-900 text-white">
      <div className="w-full max-w-4xl">
        <Link
          href={`/dashboard/${params.year}`}
          className="text-blue-400 hover:text-blue-300 transition-colors mb-8 block"
        >
          &larr; Back to {yearName}
        </Link>

        <div className="bg-gray-800 p-8 sm:p-12 rounded-xl shadow-lg">
          <h1 className="text-5xl font-bold">{course.title}</h1>
          <p className="text-lg mt-4 text-gray-400">Course ID: {course.id}</p>
          <hr className="my-8 border-gray-700" />
          
          {/* Use the ReactMarkdown component to render the content */}
          <article className="prose prose-invert max-w-none">
            <ReactMarkdown>{course.content}</ReactMarkdown>
          </article>

        </div>
      </div>
    </main>
  );
}