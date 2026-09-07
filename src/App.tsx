import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Inventions from './components/Inventions';
import Achievements from './components/Achievements';
import IntellectualProperty from './components/IntellectualProperty';
import Recognition from './components/Recognition';
import VisionForAustralia from './components/VisionForAustralia';
import Documents from './components/Documents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Inventions />
        <Achievements />
        <IntellectualProperty />
        <Recognition />
        <VisionForAustralia />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
