import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-950 py-12 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Pit Tech
          </h3> */}
          <img
                src="src\image\title Logo.png" // Replace with your logo path
                alt="Pit Tech Logo"
                className="h-15 w-20 mx-auto mb-4" // Adjust height and width as needed
              />
          
          <p className="text-gray-400 mb-6">
            Transforming digital visions into reality
          </p>
          
          <div className="flex items-center justify-center text-gray-400">
            {/* <span>Made with</span> */}
            {/* <Heart className="mx-2 text-red-500" size={16} /> */}
            <Brain className="mx-2 text-blue-500" size={20} />
            <span>PitTech</span>
            <Brain className="mx-2 text-blue-500" size={20} />
          </div>
          
          <div className="mt-8 pt-8 border-t border-purple-500/20">
            <p className="text-gray-500 text-sm">
              © 2025 Pit Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
