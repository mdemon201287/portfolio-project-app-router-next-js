// components/ProjectCard.tsx
import Link from 'next/link';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description }) => {
  return (
    <Link href={`/projects/${id}`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </Link>
  );
};

export default ProjectCard;