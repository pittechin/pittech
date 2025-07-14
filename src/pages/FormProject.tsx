// import { useState } from 'react';
// import { Send, X } from 'lucide-react';
// import Index from './Index';


// const FormProject = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     number: '',
//     collegeName: '',
//     department: '',
//     email: '',
//     currentYear: '',
//     message: '',
//   });

//   const [status, setStatus] = useState('');
//   const [isClosed, setIsClosed] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('Submitting...');
//     console.log('Form Data:', JSON.stringify(formData)); // Log all form details

//     try {
//       // Use CORS proxy for development
//       const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//       const targetUrl = 'https://script.google.com/macros/s/AKfycbw0DRkwazo-Mi7CazkqQzvM5IZC4Xl_KuYLhGLccH8adSrFPJfCK4LxzeJ-NTQlstW0/exec';
//       const response = await fetch(proxyUrl + targetUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus(`✅ Submitted successfully! Your ID: ${result.id}`);
//         setFormData({
//           name: '',
//           number: '',
//           collegeName: '',
//           department: '',
//           email: '',
//           currentYear: '',
//           message: '',
//         });
//       } else {
//         setStatus('❌ Submission failed. Try again.');
//       }
//     } catch (err) {
//       console.error(err);
//       console.log('Error occurred while submitting the form');
//       setStatus('❌ Error occurred. Please try again.');
//     }
//   };

//   if (isClosed) return <Index />;

//   return (
//     <section id="contact" className="py-20 bg-black relative">
//       <button
//         onClick={() => setIsClosed(true)}
//         className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition"
//         aria-label="Close"
//       >
//         <X size={24} />
//       </button>

//       <div className="min-h-screen bg-black">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Student <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Registration</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Fill out the form below to register for the event or project.
//           </p>
//         </div>

//         <div className="flex justify-center min-h-screen mx-auto px-4 sm:px-0">
//           <div className="w-full max-w-xl mx-auto">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
//               />

//               <div className="flex items-center w-full relative">
//                 <select
//                   name="countryCode"
//                   disabled
//                   className="bg-gray-900 border border-purple-500/20 rounded-l-lg text-white px-4 py-4"
//                   defaultValue="+91"
//                 >
//                   <option value="+91">+91</option>
//                 </select>
//                 <input
//                   type="text"
//                   name="number"
//                   placeholder="Your Phone Number"
//                   value={formData.number}
//                   onChange={handleChange}
//                   required
//                   pattern='[0-9]{10}'
//                   maxLength={10}
//                   className="w-full px-6 py-4 bg-gray-900 border-t border-b border-r border-purple-500/20 rounded-r-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
//                 />
//               </div>

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
//               />

//               <input
//                 type="text"
//                 name="collegeName"
//                 placeholder="College Name"
//                 value={formData.collegeName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
//               />

//               <input
//                 type="text"
//                 name="department"
//                 placeholder="Department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
//               />

//               <select
//                 name="currentYear"
//                 value={formData.currentYear}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
//               >
//                 <option value="" disabled>
//                   Current Year of Studying
//                 </option>
//                 <option value="I year">I year</option>
//                 <option value="II year">II year</option>
//                 <option value="III year">III year</option>
//                 <option value="IV year">IV year</option>
//                 <option value="Graduated">Graduated</option>
//               </select>
//                <input
//                 type="text"
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-6 py-4 bg-gray-900 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//               >
//                 Submit <Send className="ml-2" size={20} />
//               </button>

//               {status && (
//                 <p className="text-white text-center mt-4">{status}</p>
                
//               )
//               }
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FormProject;
