import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";



import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";

import TrainingPage from "./pages/TrainingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  // Course-offer banner at the very top. Closing it hides it until the page
  // is reloaded (it stays closed while navigating between pages).
  const [offerOpen, setOfferOpen] = useState(true);

  return (
    <>
      
      
      
      <Header offerOpen={offerOpen} onCloseOffer={() => setOfferOpen(false)} />
      {/* Padding matches the banner height so content slides up smoothly when it closes. */}
      <motion.main
        initial={false}
        animate={{ paddingTop: offerOpen ? 40 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
            <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/training" element={<PageTransition><TrainingPage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><PrivacyPage /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><TermsPage /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </motion.main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
