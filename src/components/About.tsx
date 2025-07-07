
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're committed to delivering solutions that make a real impact on your business."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our diverse team of professionals brings years of experience and innovation."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients across industries."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and methodologies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Qriocity</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a forward-thinking digital agency passionate about creating innovative solutions 
              that transform businesses and elevate brands in the digital landscape.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              With years of experience and a team of dedicated professionals, we've helped hundreds 
              of companies achieve their digital goals through strategic planning, creative design, 
              and technical excellence.
            </p>
            
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
