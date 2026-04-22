
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { AboutUs } from './pages/AboutUs';
import { ServicesSolutions } from './pages/ServicesSolutions';
import { Insights } from './pages/Insights';
import { ContactUs } from './pages/ContactUs';
import { Register } from './pages/Register';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services-solutions" element={<ServicesSolutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
