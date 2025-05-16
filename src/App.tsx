import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import PricingPage from './pages/PricingPage';
import HoursPage from './pages/HoursPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ImprintPage from './pages/ImprintPage';
import FitnessPage from './pages/FitnessPage';
import EventsPage from './pages/EventsPage';
import TeamsPage from './pages/TeamsPage';
import VirtualTourPage from './pages/VirtualTourPage';
import ShopPage from './pages/ShopPage';

// Initialize i18n
import './i18n';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="hours" element={<HoursPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="imprint" element={<ImprintPage />} />
            <Route path="fitness" element={<FitnessPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="virtual-tour" element={<VirtualTourPage />} />
            <Route path="shop" element={<ShopPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;