// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-6 text-primary">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8 max-w-2xl">
        I'm a passionate web developer creating modern, responsive web applications.
        Explore my projects and get in touch!
      </p>
      <div className="space-x-4">
        <Link href="/projects" className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded transition duration-300">
          View My Projects
        </Link>
        <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded transition duration-300">
          Contact Me
        </Link>
      </div>
    </div>
  );
}