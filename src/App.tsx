import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { FlightBooking } from "./pages/FlightBooking";
import { VisaServices } from "./pages/VisaServices";
import { TourPackages } from "./pages/TourPackages";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { FAQ } from "./pages/FAQ";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { OtherServices } from "./pages/OtherServices";
import BlogPost from "./pages/blogpost";
import Gallery from "./pages/gallery";
import ServiceDetails from "./pages/service";

function App() {
  return (
    <Router basename="/nppm">
      <div className="min-h-screen flex flex-col bg-background">
        {/* ✅ Mobile Optimized Navbar */}
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* ✅ Home Page */}
            <Route path="/" element={<><Hero /><TrustSection /></>} />

            {/* ✅ Redirect /nppm to Home */}
            <Route path="/nppm" element={<Navigate to="/" replace />} />

            {/* ✅ Main Pages */}
            <Route path="/flights" element={<FlightBooking />} />
            <Route path="/visas" element={<VisaServices />} />
            <Route path="/packages" element={<TourPackages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/other-services" element={<OtherServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/service/:title" element={<ServiceDetails />} />

            {/* ✅ Catch-all 404 Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* ✅ Mobile Optimized Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
