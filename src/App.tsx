import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Home, About, Contact, Login, Profile, ListProperty } from './pages';
import {
  SmartPackages,
  SmartFinance,
  BrandPromotion,
  Constructions,
  Designs,
} from './pages/services';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/listproperty" element={<ListProperty />} />
            <Route path="/services/smart-packages" element={<SmartPackages />} />
            <Route path="/services/smart-finance" element={<SmartFinance />} />
            <Route path="/services/brand-promotion" element={<BrandPromotion />} />
            <Route path="/services/constructions" element={<Constructions />} />
            <Route path="/services/designs" element={<Designs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;