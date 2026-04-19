import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Results } from './components/Results';
import { Amenities } from './components/Amenities';
import { Units } from './components/Units';
import { Footer, WhatsAppFloat } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        <Hero />
        <About />
        <Results />
        <Amenities />
        <Units />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;