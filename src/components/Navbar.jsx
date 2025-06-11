import { Link, NavLink } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-indigo-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2">
          <FaRobot className="text-yellow-300 animate-pulse" />
          <span className="animate-wiggle">Lie Detector AI</span>
        </Link>
        <div className="space-x-6 text-white font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "underline text-yellow-300" : "hover:text-yellow-300"}>Home</NavLink>
          <NavLink to="/analyze" className={({ isActive }) => isActive ? "underline text-yellow-300" : "hover:text-yellow-300"}>Analyze</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "underline text-yellow-300" : "hover:text-yellow-300"}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}
