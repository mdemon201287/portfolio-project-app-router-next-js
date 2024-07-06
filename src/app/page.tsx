import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <h1 className="text-5xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl mb-8 max-w-2xl text-gray-700">
        I&apos;m a passionate web developer creating modern, responsive web applications.
        Explore my projects and get in touch!
      </p>
      <div className="space-x-4">
        <Link href="/projects" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          View My Projects
        </Link>
        <Link href="/contact" className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
