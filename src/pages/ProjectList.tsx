import React from 'react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Send, X, ArrowBigLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Add this import

const projects = [
  {
    id: 1,
    title: 'Machine Learning',
    detail: 'Health Predictor: Smoking & Alcohol Use Detection with Ensembled ML Techniques',
    image: '/src/image/project/1.jpg',
  },
  {
    id: 2,
    title: 'Cybersecurity',
    detail: 'Ransomware Behavior Detection using Static and Dynamic Analysis',
    image: '/src/image/project/2.avif',
  },
  {
    id: 3,
    title: 'Deep Learning',
    detail: 'Multimodal Cancer Detection using advanced DL Techniques',
    image: 'src/image/project/3.png',
  },
  
{
    id: 4,
    title: 'Data Science',
    detail: 'Traffic Accident Severity Prediction using Historical and Real-Time Data',
    image: '/src/image/project/4.jpg',
  },
  {
    id: 5,
    title: 'Internet of Things (IoT)',
    detail: 'Smart Fire Intrusion Detection System using IOT',
    image: '/src/image/project/5.jpeg',
  },
  {
    id: 6,
    title: 'Artificial Intelligence (AI)',
    detail: 'Spot the Fake: Advanced Deep Learning for Video & Audio Integrity',
    image: '/src/image/project/6.jpg',
  },

];

const ProjectList = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="min-h-screen bg-black">
         
    <section className="py-20 bg-black min-h-screen">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 bg-gray-800 text-white rounded-full px-4 py-2 flex items-center gap-2 hover:bg-gray-700 transition z-10"
        >
          <ArrowBigLeft size={30} />
          Back to Home
        </button>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Project <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Listing</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our latest student projects and buy your favorite!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-0 max-w-6xl mx-auto">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{project.detail}</p>
              <a href="https://forms.gle/KZvRWGmdDTj2wV4e8" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 w-full">
                  Buy
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>



      <div className="flex justify-center">
  <div>
    <h3 className="p-10 text-4xl md:text-5xl font-bold text-white mb-6">
      For more <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">information</span>
    </h3>
    <a href='https://forms.gle/KZvRWGmdDTj2wV4e8' target="_blank" rel="noopener noreferrer">
    <button
      type="submit"
      className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 mx-auto"
    >
      Contact Us
      <Send className="ml-2" size={20} />
    </button>
    </a>
  </div>
</div>
    </section>
    </div>
  );
};

export default ProjectList;