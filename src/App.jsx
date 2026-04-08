import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Collections from "./pages/Collections";
import MensStyle from "./pages/MensStyle";
import WomensStyle from "./pages/WomensStyle";
import KidsStyle from "./pages/KidsStyle";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>

      {/* 🔝 NAVBAR */}
      <Navbar />

      {/* 🔄 PAGE CONTENT */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/mensstyle" element={<MensStyle />} />
          <Route path="/womensstyle" element={<WomensStyle />} />
          <Route path="/kidsstyle" element={<KidsStyle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* 💬 FLOATING WHATSAPP */}
      <WhatsAppButton />

      {/* 🔻 FOOTER */}
      <Footer />

    </Router>
  );
}

export default App;