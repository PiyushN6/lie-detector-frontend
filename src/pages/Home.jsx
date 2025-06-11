import React from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaBrain, FaMicrophoneAlt } from 'react-icons/fa';
import aiImage from '../assets/ai-illustration.svg';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center px-6 py-16 overflow-hidden">
      
      {/* Animated SVG background circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-300 opacity-30 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-10 right-0 w-60 h-60 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400 opacity-20 rounded-full blur-2xl animate-bounce"></div>

      <div className="relative z-10 max-w-6xl bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">

        {/* Illustration */}
        <div className="md:w-1/2 text-center">
          <img
            src={aiImage}
            alt="AI Illustration"
            className="w-full max-w-xs mx-auto drop-shadow-md"
          />
        </div>

        {/* Text + Actions */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 animate-wiggle mb-4">
            Welcome to Lie Detector AI
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Upload text, audio, or images and let our AI analyze the truthfulness
            using cutting-edge neural networks trained on deception patterns.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/analyze"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-lg transition"
            >
              <FaBrain />
              Start Analyzing
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 bg-white border border-indigo-200 hover:border-indigo-400 hover:text-indigo-700 text-gray-800 px-5 py-3 rounded-lg shadow-md transition"
            >
              <FaRobot />
              Learn More
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="mt-8 flex justify-center md:justify-start gap-8 text-indigo-700">
            <div className="flex flex-col items-center">
              <FaBrain className="text-2xl mb-1" />
              <span className="text-sm font-semibold">Text</span>
            </div>
            <div className="flex flex-col items-center">
              <FaMicrophoneAlt className="text-2xl mb-1" />
              <span className="text-sm font-semibold">Audio</span>
            </div>
            <div className="flex flex-col items-center">
              <FaRobot className="text-2xl mb-1" />
              <span className="text-sm font-semibold">Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
