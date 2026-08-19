import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { FloatingActions } from "@/components/FloatingActions/FloatingActions";
import { useLenis } from "@/lib/useLenis";
import Home from "@/pages/Home/Home";

const FleetPage = lazy(() => import("@/pages/Fleet/Fleet"));
const ServicesPage = lazy(() => import("@/pages/Services/Services"));
const ContactPage = lazy(() => import("@/pages/Contact/Contact"));

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  useLenis();

  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-dvh" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
