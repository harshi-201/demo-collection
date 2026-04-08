import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import heroimg1 from "../assets/heroimg/herophoto1.jpg";
import heroimg2 from "../assets/heroimg/herophoto2.jpg";
import heroimg3 from "../assets/heroimg/herophoto3.jpg";
import heroimg4 from "../assets/heroimg/herophoto4.jpg";
import heroimg5 from "../assets/heroimg/herophoto5.jpg";
import heroimg6 from "../assets/heroimg/herophoto6.jpg";

const heroImages = [heroimg1, heroimg2, heroimg3, heroimg4, heroimg5, heroimg6];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-black">

      {/* Images */}
      {heroImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`hero-${idx}`}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }
          
          object-contain md:object-cover
          `}
        />
      ))}

      {/* Buttons */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4">
        <Link
          to="/collections"
          className="px-4 py-2 md:px-6 md:py-3 bg-white text-black text-sm md:text-base rounded-full font-semibold shadow-md"
        >
          Shop
        </Link>

        <Link
          to="/explore"
          className="px-4 py-2 md:px-6 md:py-3 bg-black text-white text-sm md:text-base rounded-full font-semibold shadow-md"
        >
          Explore
        </Link>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;