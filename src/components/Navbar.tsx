// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-dark text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">My Portfolio</Link>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-secondary transition duration-300">Home</Link></li>
            <li><Link href="/projects" className="hover:text-secondary transition duration-300">Projects</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition duration-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition duration-300">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;