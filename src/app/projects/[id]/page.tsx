// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={project.image} alt={project.title} width={800} height={400} className="w-full h-64 object-cover" />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-primary">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.fullDescription}</p>
        <Link href="/projects" className="text-secondary hover:text-secondary-dark transition duration-300">
          &larr; Back to Projects
        </Link>
      </div>
    </div>
  );
}