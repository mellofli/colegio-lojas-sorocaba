/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Lodges from './pages/Lodges';

// Scroll to top on navigation component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/palestrantes" element={<Speakers />} />
            <Route path="/lojas" element={<Lodges />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
