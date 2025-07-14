
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 h-22 w-25 flex items-center justify-center">
            <a href="#">
              <img
                src="src\image\title Logo.png" // Replace with your logo path
                alt="Pit Tech Logo"
                className="h-20 w-20 object-contain"
              />
            </a>
            {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pit Tech
            </h1> */}
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-purple-400 transition-colors px-3 py-2">Home</a>
              <a href="#services" className="text-white hover:text-purple-400 transition-colors px-3 py-2">Services</a>
              {/* <a href="FormProject" className="text-white hover:text-purple-400 transition-colors px-3 py-2">Projects Form</a> */}
              <a href="ProjectList" className="text-white hover:text-purple-400 transition-colors px-3 py-2">Projects </a>
              <a href="#about" className="text-white hover:text-purple-400 transition-colors px-3 py-2">About</a>
              {/* <a href="#contact" className="text-white hover:text-purple-400 transition-colors px-3 py-2">Contact</a> */}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              <a href="#home" className="text-white hover:text-purple-400 block px-3 py-2">Home</a>
              <a href="#services" className="text-white hover:text-purple-400 block px-3 py-2">Services</a>
              {/* <a href="FormProject" className="text-white hover:text-purple-400 block px-3 py-2">Projects</a> */}
              <a href="ProjectList" className="text-white hover:text-purple-400 block px-3 py-2">Projects List</a>
              <a href="#about" className="text-white hover:text-purple-400 block px-3 py-2">About</a>
              {/* <a href="#contact" className="text-white hover:text-purple-400 block px-3 py-2">Contact</a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
