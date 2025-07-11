import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const FormProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    collegeName: '',
    department: '',
    email: '',
    currentYear: '',
    year: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
{/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="min-h-screen bg-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Student <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Registration</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fill out the form below to register for the event or project.
          </p>
        </div>
        
        <div className="flex justify-center items-center min-h-screen">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Your Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="collegeName"
                  placeholder="College Name"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
                <input
                  type="text"
                  name="currentYear"
                  placeholder="Current Year of Studying"
                  value={formData.currentYear}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Submit
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormProject;