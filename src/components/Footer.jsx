import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600 mt-10">
      <div className="mb-2 flex justify-center gap-4 text-xl">
        <a href="https://github.com/PiyushN6/lie-detector-frontend" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/piyush-namdeo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin />
        </a>
      </div>
      <p>
        Crafted with <FaHeart className="inline text-red-500 animate-pulse" /> by <span className="font-semibold text-indigo-700">Piyush Namdeo</span>
      </p>
    </footer>
  );
}
