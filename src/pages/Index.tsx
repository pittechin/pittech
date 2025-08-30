
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
// import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import ProjectL from '@/components/ProjectL';
const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <ProjectL/>
      <About />
      
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Index;
