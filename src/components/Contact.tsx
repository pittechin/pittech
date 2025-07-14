
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Ready to start your next project? Let's discuss how we can help bring your vision to life.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
//                   <Mail className="text-white" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Email</p>
//                   <p className="text-gray-400">pittech@gmail.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center">
//                 <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
//                   <Phone className="text-white" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Phone</p>
//                   <p className="text-gray-400">+91 987 654 3210</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center">
//                 <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
//                   <MapPin className="text-white" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Location</p>
//                   <p className="text-gray-400">Chennai, TN</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={6}
//                   className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
//                   required
//                 />
//               </div>
              
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//               >
//                 Send Message
//                 <Send className="ml-2" size={20} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
