import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 🔥 IMAGES (same as yours)
import shirt1 from "../assets/mens/shirts1.jpg";
import shirt2 from "../assets/mens/shirts2.jpg";
import shirt3 from "../assets/mens/shirts3.jpg";
import shirt4 from "../assets/mens/shirts4.jpg";
import shirt5 from "../assets/mens/shirts5.jpg";
import shirt6 from "../assets/mens/shirts6.jpg";

import jeans1 from "../assets/mens/jeans1.jpg";
import jeans2 from "../assets/mens/jeans2.jpg";
import jeans3 from "../assets/mens/jeans3.jpg";
import jeans4 from "../assets/mens/jeans4.jpg";
import jeans5 from "../assets/mens/jeans5.jpg";
import jeans6 from "../assets/mens/jeans6.jpg";

import blazer1 from "../assets/mens/Blazer1.jpg";
import blazer2 from "../assets/mens/Blazer2.jpg";
import blazer3 from "../assets/mens/Blazer3.jpg";
import blazer4 from "../assets/mens/Blazer4.jpg";
import blazer5 from "../assets/mens/Blazer5.jpg";
import blazer6 from "../assets/mens/Blazer6.webp";

import tshirt1 from "../assets/mens/t-Shirt1.jpg";
import tshirt2 from "../assets/mens/t-Shirt2.webp";
import tshirt3 from "../assets/mens/t-Shirt3.webp";
import tshirt4 from "../assets/mens/t-Shirt4.webp";
import tshirt5 from "../assets/mens/t-Shirt5.jpg";

import jacket1 from "../assets/mens/stylish-jacket1.jpg";
import jacket2 from "../assets/mens/stylish-jacket2.jpg";
import jacket3 from "../assets/mens/stylish-jacket3.jpg";
import jacket4 from "../assets/mens/stylish-jacket4.jpg";
import jacket5 from "../assets/mens/stylish-jacket5.jpg";
import jacket6 from "../assets/mens/stylish-jacket6.jpg";

import pant1 from "../assets/mens/Pant1.jpg";
import pant2 from "../assets/mens/Pant2.jpg";
import pant3 from "../assets/mens/Pant3.jpg";
import pant4 from "../assets/mens/Pant4.jpg";
import pant5 from "../assets/mens/Pant5.jpg";
import pant6 from "../assets/mens/Pant6.webp";

import kurta1 from "../assets/mens/kurta1.jpg";
import kurta2 from "../assets/mens/kurta2.jpg";
import kurta3 from "../assets/mens/kurta3.jpg";
import kurta4 from "../assets/mens/kurta4.jpg";
import kurta5 from "../assets/mens/kurta5.jpg";
import kurta6 from "../assets/mens/kurta6.jpg";

// 🔥 PRODUCTS
const products = [
  { id: 1, name: "Shirt 1", price: "₹999", category: "Shirt", img: shirt1 },
  { id: 2, name: "Shirt 2", price: "₹999", category: "Shirt", img: shirt2 },
  { id: 3, name: "Shirt 3", price: "₹999", category: "Shirt", img: shirt3 },
  { id: 4, name: "Shirt 4", price: "₹999", category: "Shirt", img: shirt4 },
  { id: 5, name: "Shirt 5", price: "₹999", category: "Shirt", img: shirt5 },
  { id: 6, name: "Shirt 6", price: "₹999", category: "Shirt", img: shirt6 },

  { id: 7, name: "Jeans 1", price: "₹1499", category: "Jeans", img: jeans1 },
  { id: 8, name: "Jeans 2", price: "₹1499", category: "Jeans", img: jeans2 },
  { id: 9, name: "Jeans 3", price: "₹1499", category: "Jeans", img: jeans3 },
  { id: 10, name: "Jeans 4", price: "₹1499", category: "Jeans", img: jeans4 },
  { id: 11, name: "Jeans 5", price: "₹1499", category: "Jeans", img: jeans5 },
  { id: 12, name: "Jeans 6", price: "₹1499", category: "Jeans", img: jeans6 },

  { id: 13, name: "Blazer 1", price: "₹2499", category: "Blazer", img: blazer1 },
  { id: 14, name: "Blazer 2", price: "₹2499", category: "Blazer", img: blazer2 },
  { id: 15, name: "Blazer 3", price: "₹2499", category: "Blazer", img: blazer3 },
  { id: 16, name: "Blazer 4", price: "₹2499", category: "Blazer", img: blazer4 },
  { id: 17, name: "Blazer 5", price: "₹2499", category: "Blazer", img: blazer5 },
  { id: 18, name: "Blazer 6", price: "₹2499", category: "Blazer", img: blazer6 },

  { id: 19, name: "T-Shirt 1", price: "₹699", category: "T-Shirt", img: tshirt1 },
  { id: 20, name: "T-Shirt 2", price: "₹699", category: "T-Shirt", img: tshirt2 },
  { id: 21, name: "T-Shirt 3", price: "₹699", category: "T-Shirt", img: tshirt3 },
  { id: 22, name: "T-Shirt 4", price: "₹699", category: "T-Shirt", img: tshirt4 },
  { id: 23, name: "T-Shirt 5", price: "₹699", category: "T-Shirt", img: tshirt5 },


  { id: 24, name: "Jacket 1", price: "₹1999", category: "Jacket", img: jacket1 },
  { id: 25, name: "Jacket 2", price: "₹1999", category: "Jacket", img: jacket2 },
  { id: 26, name: "Jacket 3", price: "₹1999", category: "Jacket", img: jacket3 },
  { id: 27, name: "Jacket 4", price: "₹1999", category: "Jacket", img: jacket4 },
  { id: 28, name: "Jacket 5", price: "₹1999", category: "Jacket", img: jacket5 },
  { id: 29, name: "Jacket 6", price: "₹1999", category: "Jacket", img: jacket6 },

  { id: 30, name: "Pant 1", price: "₹1199", category: "Pant", img: pant1 },
  { id: 31, name: "Pant 2", price: "₹1199", category: "Pant", img: pant2 },
  { id: 32, name: "Pant 3", price: "₹1199", category: "Pant", img: pant3 },
  { id: 33, name: "Pant 4", price: "₹1199", category: "Pant", img: pant4 },
  { id: 34, name: "Pant 5", price: "₹1199", category: "Pant", img: pant5 },
  { id: 35, name: "Pant 6", price: "₹1199", category: "Pant", img: pant6 },

  { id: 36, name: "Kurta 1", price: "₹1299", category: "Kurta", img: kurta1 },
  { id: 37, name: "Kurta 2", price: "₹1299", category: "Kurta", img: kurta2 },
  { id: 38, name: "Kurta 3", price: "₹1299", category: "Kurta", img: kurta3 },
  { id: 39, name: "Kurta 4", price: "₹1299", category: "Kurta", img: kurta4 },
  { id: 40, name: "Kurta 5", price: "₹1299", category: "Kurta", img: kurta5 },
  { id: 41, name: "Kurta 6", price: "₹1299", category: "Kurta", img: kurta6 },
];

// 🔥 CATEGORY
const categories = ["All", ...new Set(products.map(p => p.category))];

export default function MensStyle() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const urlCategory = query.get("category");

  const [selectedCategory, setSelectedCategory] = useState(urlCategory || "All");
  const [selectedItem, setSelectedItem] = useState(null);

  
  // 🔥 SYNC URL + STATE
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  // 🔥 FILTER
  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // 🔥 CATEGORY CLICK
  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    navigate(`/mensstyle${cat !== "All" ? `?category=${cat}` : ""}`);
  };

  // 🔥 WhatsApp
  const handleWhatsApp = (item) => {
    const phone = "91XXXXXXXXXX";
    const message = `Hi, I want to buy:\n${item.name} - ${item.price}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="bg-white min-h-screen pt-24">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Men Collection {selectedCategory !== "All" && `- ${selectedCategory}`}
      </h1>

      {/* FILTER */}
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">

        {filtered.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative overflow-hidden rounded-xl">

              {/* 🔥 FULL IMAGE STYLE CHANGE */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover transition duration-700
                           group-hover:scale-110
                           group-hover:blur-[2px]
                           group-hover:brightness-75"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition"></div>

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 w-full p-3 
                              translate-y-full group-hover:translate-y-0 
                              transition text-white">

                <p>{item.name}</p>
                <p className="text-xs">{item.category}</p>
                <p className="font-semibold">{item.price}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] md:w-[400px] rounded-xl p-4">

            <img src={selectedItem.img} className="w-full h-64 object-contain" />

            <h2 className="mt-2 font-bold">{selectedItem.name}</h2>
            <p>{selectedItem.price}</p>

            <button
              onClick={() => handleWhatsApp(selectedItem)}
              className="w-full mt-3 bg-green-500 text-white py-2 rounded"
            >
              WhatsApp Order
            </button>

            <button
              onClick={() => setSelectedItem(null)}
              className="w-full mt-2 border py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
}