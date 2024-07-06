// app/projects/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-primary truncate">{project.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}