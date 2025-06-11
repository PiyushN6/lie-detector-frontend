import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUpload } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Analyze() {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image && !audio && !text.trim()) {
      toast.error('Please provide at least one input.');
      return;
    }

    const formData = new FormData();
    if (image) formData.append('image', image);
    if (audio) formData.append('audio', audio);
    if (text) formData.append('text', text);

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('https://lie-detector-backend-2.onrender.com/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setResult(data);
      toast.success('Analysis completed!');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const pieChartData = result?.scores && {
    labels: Object.keys(result.scores),
    datasets: [
      {
        label: 'Score',
        data: Object.values(result.scores),
        backgroundColor: ['#60a5fa', '#f472b6', '#34d399'],
        borderWidth: 1,
      },
    ],
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    setAudio(file);
    if (file) {
      const audioURL = URL.createObjectURL(file);
      setAudioPreview(audioURL);
    } else {
      setAudioPreview(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 to-purple-100 p-6">
      <ToastContainer />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">AI Lie Detector</h2>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

          {/* Image Upload */}
          <div className="space-y-1">
            <label htmlFor="image" className="block font-medium text-gray-700">Upload Image</label>
            <div className="relative border-dashed border-2 p-4 rounded text-center hover:bg-blue-50 transition">
              <FaUpload className="mx-auto text-blue-500 text-2xl" />
              <p className="text-sm mt-2 text-gray-500">Drag & drop or select image</p>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            {image && <p className="text-green-600 text-sm mt-1">Selected: {image.name}</p>}
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mt-2 max-h-40 rounded shadow" />
            )}
          </div>

          {/* Audio Upload */}
          <div className="space-y-1">
            <label htmlFor="audio" className="block font-medium text-gray-700">Upload Audio</label>
            <div className="relative border-dashed border-2 p-4 rounded text-center hover:bg-purple-50 transition">
              <FaUpload className="mx-auto text-purple-500 text-2xl" />
              <p className="text-sm mt-2 text-gray-500">Drag & drop or select audio</p>
              <input
                id="audio"
                type="file"
                accept="audio/*"
                onChange={handleAudioChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            {audio && <p className="text-green-600 text-sm mt-1">Selected: {audio.name}</p>}
            {audioPreview && (
              <audio controls className="mt-2 w-full">
                <source src={audioPreview} />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>

          {/* Text Input */}
          <div className="space-y-1">
            <label htmlFor="text" className="block font-medium text-gray-700">Enter Text</label>
            <textarea
              id="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter a statement to analyze"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </form>

        {/* Result Section */}
        {result && (
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-2 text-gray-700">Analysis Result</h3>
            <div className="bg-gray-50 p-4 rounded shadow space-y-4">
              <p><strong>Decision:</strong> {result.decision}</p>
              <p><strong>Confidence:</strong> {result.confidence?.toFixed(2)}</p>
              <p><strong>Explanation:</strong> {result.explanation}</p>

              {pieChartData && (
                <div className="mt-4 max-w-xs mx-auto">
                  <Pie data={pieChartData} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
