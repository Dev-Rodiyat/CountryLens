import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors pb-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/countries" element={<Home />} />
        <Route path="/country/:name" element={<CountryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="fixed bottom-0 w-full backdrop-blur-md bg-white/90 dark:bg-zinc-900/90 shadow-xl transition-colors duration-300 border-t border-zinc-200 dark:border-zinc-800 z-50">
        <Footer />
      </footer>
    </div>
  );
}
