// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerbg from "../assets/footerbg.jpg"; // footer background image

function Footer() {
  return (
    <footer
      className="relative text-gray-800"
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Semi-transparent overlay to keep design visible */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative container mx-auto px-4 py-16 grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">STYLE.</h2>
          <p>
            Discover premium collections and services. Your style, your way.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-gray-900"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-900"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-900"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-900"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
            <li><Link to="/explore" className="hover:text-gray-900">Explore</Link></li>
            <li><Link to="/collections" className="hover:text-gray-900">Collections</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link to="/membership" className="hover:text-gray-900">Membership</Link></li>
            <li><Link to="/custom-orders" className="hover:text-gray-900">Custom Orders</Link></li>
            <li><Link to="/gift-cards" className="hover:text-gray-900">Gift Cards</Link></li>
            <li><Link to="/support" className="hover:text-gray-900">Support</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: support@bimfrox.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Ahmedabad, India</p>
        </div>
      </div>

      <div className="relative mt-10 border-t border-gray-600 pt-4 text-center text-gray-600 text-sm">
        © 2026Aksharcollection. All rights reserved<br></br>Made by <span className="font-bold"> Bimfrox.</span>
      </div>
    </footer>
  );
}

export default Footer;