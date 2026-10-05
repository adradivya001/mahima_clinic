import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyCallBar } from '@/components/layout/StickyCallBar';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { AppointmentModal } from '@/components/layout/AppointmentModal';
import { HomePage } from '@/pages/HomePage';
import { DoctorPage } from '@/pages/DoctorPage';
import { TreatmentDetailPage } from '@/pages/TreatmentDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('General Consultation');

  const handleOpenAppointment = (treatmentName = 'General Consultation') => {
    setSelectedTreatment(treatmentName);
    setAppointmentOpen(true);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SkipLink />
        
        {/* Navigation Bar */}
        <Navbar onOpenAppointment={handleOpenAppointment} />
        
        {/* Main Content View */}
        <main id="main-content" className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/doctor" element={<DoctorPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/treatments/:slug" element={<TreatmentDetailPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/about" element={<AboutPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Bar & Floating Quick CTAs */}
        <StickyCallBar onOpenAppointment={() => handleOpenAppointment('Mobile Quick Appointment')} />
        <FloatingActions onOpenAppointment={() => handleOpenAppointment('Floating Quick Appointment')} />

        {/* Global Appointment Booking Modal */}
        <AppointmentModal
          isOpen={appointmentOpen}
          onClose={() => setAppointmentOpen(false)}
          initialTreatment={selectedTreatment}
        />
      </BrowserRouter>
    </HelmetProvider>
  );
}
