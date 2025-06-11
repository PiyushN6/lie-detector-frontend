import React from 'react';
import { FaCogs, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-100 to-white py-20 px-4">
      <div className="max-w-3xl bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-lg mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">About the Project</h1>
        <p className="mb-4">
          This multi-modal AI platform utilizes cutting-edge neural networks to detect deception using:
        </p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-center space-x-3">
            <FaCogs className="text-indigo-500" />
            <span><strong>Computer Vision:</strong> Facial micro-expression analysis</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaUsers className="text-green-500" />
            <span><strong>Audio Analysis:</strong> Vocal stress and tone detection</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaLightbulb className="text-orange-500" />
            <span><strong>Text Analysis:</strong> Language pattern recognition</span>
          </li>
        </ul>
        <p className="mb-6">
          Built with <em>FastAPI</em> (backend), <em>PyTorch</em> (AI), and <em>React + Tailwind CSS</em> (frontend),
          this tool is designed to be intuitive, insightful, and visually compelling.
        </p>

        {/* Credit */}
        <p className="text-sm text-right italic text-gray-600">
          Crafted with ❤️ by <span className="text-indigo-600 font-medium">Piyush Namdeo</span>
        </p>
      </div>
    </div>
  );
}
