import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Inventions from './components/Inventions';
import Achievements from './components/Achievements';
import IntellectualProperty from './components/IntellectualProperty';
import Recognition from './components/Recognition';
import MediaEndorsements from './components/MediaEndorsements';
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
        <MediaEndorsements />
      </main>
      <Footer />
    </>
  );
}

export default App;
