import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import FeaturedVideos from './components/FeaturedVideos';
import Analytics from './components/Analytics';
import Archive from './components/Archive';
import Experiments from './components/Experiments';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <FeaturedVideos />
        <Analytics />
        <Archive />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
