import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import AdminRoute from './components/auth/AdminRoute';
import AdminDashboard from './pages/admin/Dashboard';
import ManageProjects from './pages/admin/ManageProjects';
import { Home, About, Contact, Login, Profile, ListProperty, Projects } from './pages';
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
            <Route path="/list-property" element={<ListProperty />} />
            <Route path="/services/smart-packages" element={<SmartPackages />} />
            <Route path="/services/smart-finance" element={<SmartFinance />} />
            <Route path="/services/brand-promotion" element={<BrandPromotion />} />
            <Route path="/services/constructions" element={<Constructions />} />
            <Route path="/services/designs" element={<Designs />} />
            {/* Admin routes */}
            <Route path="/admin" element={<AdminRoute />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="projects" element={<ManageProjects />} />
              <Route path="constructions" element={<ManageProjects type="construction" />} />
              <Route path="designs" element={<ManageProjects type="design" />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

