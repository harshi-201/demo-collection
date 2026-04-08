import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 🔥 IMAGES (same as yours)
import dress1 from "../assets/women/Dresses1.jpg";
import dress2 from "../assets/women/Dresses2.jpg";
import dress3 from "../assets/women/Dresses3.jpg";
import dress4 from "../assets/women/Dresses4.jpg";
import dress5 from "../assets/women/Dresses5.jpg";
import dress6 from "../assets/women/Dresses6.jpg";

import top1 from "../assets/women/top1.jpg";
import top2 from "../assets/women/top2.jpg";
import top3 from "../assets/women/top3.jpg";
import top4 from "../assets/women/top4.jpg";
import top5 from "../assets/women/top5.jpg";
import top6 from "../assets/women/top6.jpg"; 

import saree1 from "../assets/women/saree1.jpg";
import saree2 from "../assets/women/saree2.jpg";
import saree3 from "../assets/women/saree3.jpg";
import saree4 from "../assets/women/saree4.jpg";
import saree5 from "../assets/women/saree5.jpg";
import saree6 from "../assets/women/saree6.jpg";

import pents1 from "../assets/women/pents1.jpg";
import pents2 from "../assets/women/pents2.jpg";
import pents3 from "../assets/women/pents3.jpg";
import pents4 from "../assets/women/pents4.jpg";
import pents5 from "../assets/women/pents5.jpg";
import pents6 from "../assets/women/pents6.jpg";  

import Blazers1 from "../assets/women/Blazers1.jpg";
import Blazers2 from "../assets/women/Blazers2.jpg";
import Blazers3 from "../assets/women/Blazers3.jpg";
import Blazers4 from "../assets/women/Blazers4.jpg";
import Blazers5 from "../assets/women/Blazers5.jpg";
import Blazers6 from "../assets/women/Blazers6.jpg";

import Skirts1 from "../assets/women/Skirts.jpg";
import Skirts2 from "../assets/women/Skirts2.jpg";
import Skirts3 from "../assets/women/Skirts3.jpg";
import Skirts4 from "../assets/women/Skirts4.jpg";
import Skirts5 from "../assets/women/Skirts5.jpg";
import Skirts6 from "../assets/women/Skirts6.jpg";

import Shorts1 from "../assets/women/shorts1.jpg";
import Shorts2 from "../assets/women/Shorts2.jpg";
import Shorts3 from "../assets/women/Shorts3.jpg";
import Shorts4 from "../assets/women/Shorts4.jpg";
import Shorts5 from "../assets/women/Shorts5.jpg";
import Shorts6 from "../assets/women/Shorts6.jpg";

import tshirts1 from "../assets/women/t-shirt1.jpg";
import tshirts2 from "../assets/women/t-shirt2.jpg";  
import tshirts3 from "../assets/women/t-shirt3.jpg";
import tshirts4 from "../assets/women/t-shirt4.jpg";
import tshirts5 from "../assets/women/t-shirt5.jpg";
import tshirts6 from "../assets/women/t-shirt6.jpg";

// 🔥 PRODUCTS (same)
const products = [
  { id: 1, name: "Dress 1", price: "₹1499", category: "Dress", img: dress1 },
  { id: 2, name: "Dress 2", price: "₹1499", category: "Dress", img: dress2 },
  { id: 3, name: "Dress 3", price: "₹1499", category: "Dress", img: dress3 },
  { id: 4, name: "Dress 4", price: "₹1499", category: "Dress", img: dress4 },
  { id: 5, name: "Dress 5", price: "₹1499", category: "Dress", img: dress5 },
  { id: 6, name: "Dress 6", price: "₹1499", category: "Dress", img: dress6 },

  { id: 7, name: "Top 1", price: "₹799", category: "Top", img: top1 },
  { id: 8, name: "Top 2", price: "₹799", category: "Top", img: top2 },
  { id: 9, name: "Top 3", price: "₹799", category: "Top", img: top3 },
  { id: 10, name: "Top 4", price: "₹799", category: "Top", img: top4 },
  { id: 11, name: "Top 5", price: "₹799", category: "Top", img: top5 },
  { id: 12, name: "Top 6", price: "₹799", category: "Top", img: top6 },

  { id: 13, name: "Saree 1", price: "₹1999", category: "Saree", img: saree1 },
  { id: 14, name: "Saree 2", price: "₹1999", category: "Saree", img: saree2 },
  { id: 15, name: "Saree 3", price: "₹1999", category: "Saree", img: saree3 },
  { id: 16, name: "Saree 4", price: "₹1999", category: "Saree", img: saree4 },
  { id: 17, name: "Saree 5", price: "₹1999", category: "Saree", img: saree5 },
  { id: 18, name: "Saree 6", price: "₹1999", category: "Saree", img: saree6 },

  { id: 19, name: "Pants 1", price: "₹1299", category: "Pants", img: pents1 },
  { id: 20, name: "Pants 2", price: "₹1299", category: "Pants", img: pents2 },
  { id: 21, name: "Pants 3", price: "₹1299", category: "Pants", img: pents3 },
  { id: 22, name: "Pants 4", price: "₹1299", category: "Pants", img: pents4 },
  { id: 23, name: "Pants 5", price: "₹1299", category: "Pants", img: pents5 },
  { id: 24, name: "Pants 6", price: "₹1299", category: "Pants", img: pents6 },

  { id: 25, name: "Blazer 1", price: "₹2499", category: "Blazer", img: Blazers1 },
  { id: 26, name: "Blazer 2", price: "₹2499", category: "Blazer", img: Blazers2 },
  { id: 27, name: "Blazer 3", price: "₹2499", category: "Blazer", img: Blazers3 },
  { id: 28, name: "Blazer 4", price: "₹2499", category: "Blazer", img: Blazers4 },
  { id: 29, name: "Blazer 5", price: "₹2499", category: "Blazer", img: Blazers5 },
  { id: 30, name: "Blazer 6", price: "₹2499", category: "Blazer", img: Blazers6 },

  { id: 31, name: "Skirt 1", price: "₹999", category: "Skirt", img: Skirts1 },
  { id: 32, name: "Skirt 2", price: "₹999", category: "Skirt", img: Skirts2 },
  { id: 33, name: "Skirt 3", price: "₹999", category: "Skirt", img: Skirts3 },
  { id: 34, name: "Skirt 4", price: "₹999", category: "Skirt", img: Skirts4 },
  { id: 35, name: "Skirt 5", price: "₹999", category: "Skirt", img: Skirts5 },
  { id: 36, name: "Skirt 6", price: "₹999", category: "Skirt", img: Skirts6 },

  { id: 37, name: "Shorts 1", price: "₹699", category: "Shorts", img: Shorts1 },
  { id: 38, name: "Shorts 2", price: "₹699", category: "Shorts", img: Shorts2 },
  { id: 39, name: "Shorts 3", price: "₹699", category: "Shorts", img: Shorts3 },
  { id: 40, name: "Shorts 4", price: "₹699", category: "Shorts", img: Shorts4 },
  { id: 41, name: "Shorts 5", price: "₹699", category: "Shorts", img: Shorts5 },
  { id: 42, name: "Shorts 6", price: "₹699", category: "Shorts", img: Shorts6 },

  { id: 43, name: "T-Shirt 1", price: "₹499", category: "T-Shirt", img: tshirts1 },
  { id: 44, name: "T-Shirt 2", price: "₹499", category: "T-Shirt", img: tshirts2 },
  { id: 45, name: "T-Shirt 3", price: "₹499", category: "T-Shirt", img: tshirts3 },
  { id: 46, name: "T-Shirt 4", price: "₹499", category: "T-Shirt", img: tshirts4 },
  { id: 47, name: "T-Shirt 5", price: "₹499", category: "T-Shirt", img: tshirts5 },
  { id: 48, name: "T-Shirt 6", price: "₹499", category: "T-Shirt", img: tshirts6 },

];
const categories = ["All", ...new Set(products.map(p => p.category))];

export default function WomenStyle() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const urlCategory = query.get("category");

  const [selectedCategory, setSelectedCategory] = useState(urlCategory || "All");
  const [selectedItem, setSelectedItem] = useState(null);

  // ✅ SYNC URL
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  // ✅ FILTER
  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // ✅ CATEGORY CLICK
  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    navigate(`/womensstyle${cat !== "All" ? `?category=${cat}` : ""}`);
  };

  // ✅ WhatsApp
  const handleWhatsApp = (item) => {
    const phone = "91XXXXXXXXXX";
    const message = `Hi, I want to buy:\n${item.name} - ${item.price}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="bg-white min-h-screen pt-24">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Women Collection {selectedCategory !== "All" && `- ${selectedCategory}`}
      </h1>

      {/* 🔥 FILTER BUTTONS */}
      <div className="flex justify-center gap-3 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 rounded-full border text-sm transition ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">

        {filtered.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative overflow-hidden rounded-xl">

              {/* 🔥 FULL STYLE EFFECT */}
              <img
                src={item.img}
                alt=""
                className="w-full h-80 object-cover transition duration-700
                           group-hover:scale-110
                           group-hover:blur-[2px]
                           group-hover:brightness-75"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 
                              group-hover:bg-black/50 
                              transition"></div>

              {/* TEXT */}
              <div className="absolute bottom-0 p-4 text-white
                              translate-y-full group-hover:translate-y-0
                              transition">

                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">{item.price}</p>

                <button className="mt-2 bg-white text-black px-3 py-1 text-xs rounded">
                  View
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* POPUP */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50">

          <div className="bg-white p-5 rounded-xl w-[90%] md:w-[450px] relative">

            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

            <img
              src={selectedItem.img}
              className="w-full h-72 object-contain"
            />

            <h2 className="mt-3 font-bold text-lg">
              {selectedItem.name}
            </h2>
            <p>{selectedItem.price}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleWhatsApp(selectedItem)}
                className="flex-1 bg-green-500 text-white py-2 rounded"
              >
                WhatsApp Order
              </button>

              <button
                onClick={() => setSelectedItem(null)}
                className="flex-1 border py-2 rounded"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}