import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FreelanceDev } from './components/FreelanceDev';
import { Projects } from './components/Projects';
import { Courses } from './components/Courses';
import { Skills } from './components/Skills';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollProgress />
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Services />
        <FreelanceDev />
        <Projects />
        <Courses />
        <Skills />
        <HowItWorks />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
