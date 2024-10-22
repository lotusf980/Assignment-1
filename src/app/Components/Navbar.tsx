// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-6">
        <li><Link href="/" className="text-white">Home</Link></li>
        <li><Link href="/About" className="text-white">About</Link></li>
        <li><Link href="/Services"className="text-white">Services</Link></li>
        <li><Link href="/Blog" className="text-white">Blog</Link></li>
        <li><Link href="/Contact" className="text-white">Contact</Link></li>
      </ul>
    </nav>
  );
}
