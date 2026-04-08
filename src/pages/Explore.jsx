import { useState } from "react";

// IMAGES
import top1 from "../assets/SHOPIMG/TOPS/top1.jpg";
import top2 from "../assets/SHOPIMG/TOPS/top2.jpg";
import top3 from "../assets/SHOPIMG/TOPS/top3.jpg";
import top4 from "../assets/SHOPIMG/TOPS/top4.jpg";

export default function Explore() {
  const [category, setCategory] = useState("all");
  const [style, setStyle] = useState("all");
  const [age, setAge] = useState("all");
  const [price, setPrice] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 1, name: "Casual Shirt", price: 999, image: top1, category: "men", style: "casual", age: "adult" },
    { id: 2, name: "Summer Dress", price: 1299, image: top2, category: "women", style: "summer", age: "adult" },
    { id: 3, name: "Party Wear", price: 1999, image: top3, category: "teen", style: "party", age: "teen" },
    { id: 4, name: "Kids T-shirt", price: 699, image: top4, category: "kids", style: "casual", age: "kids" },
    { id: 5, name: "Formal Shirt", price: 1499, image: top1, category: "men", style: "formal", age: "adult" },
    { id: 6, name: "Cocktail Dress", price: 2499, image: top2, category: "women", style: "party", age: "adult" },
  ];

  const filtered = products.filter(p =>
    (category === "all" || p.category === category) &&
    (style === "all" || p.style === style) &&
    (age === "all" || p.age === age) &&
    (price === "all" ||
      (price === "low" && p.price < 1000) ||
      (price === "mid" && p.price <= 1500) ||
      (price === "high" && p.price > 1500))
  );

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleWhatsApp = (p) => {
    const phoneNumber = "91XXXXXXXXXX";
    const message = `🛍️ *New Order Request*\n\n📦 Product: ${p.name}\n💰 Price: ₹${p.price}\n\n👤 Name:\n📍 Address:\n\nPlease confirm 🙏`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-30 pb-12">

      {/* FILTERS */}
      <div className=" top-24 z-20 bg-white px-6 md:px-12 py-3 flex flex-wrap gap-5  shadow-sm justify-center">  
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border  px-4 py-2 text-sm shadow-sm hover:shadow-md transition">
          <option value="all">All Categories</option>
          {["men", "women", "kids", "teen"].map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select value={style} onChange={(e) => setStyle(e.target.value)} className="border px-4 py-2 text-sm shadow-sm hover:shadow-md transition">
          <option value="all">All Styles</option>
          {["casual", "party", "summer", "formal"].map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select value={age} onChange={(e) => setAge(e.target.value)} className="border px-4 py-2 text-sm shadow-sm hover:shadow-md transition">
          <option value="all">All Ages</option>
          {["kids", "teen", "adult"].map(a => <option key={a} value={a}>{a}</option>)}
        </select>

        <select value={price} onChange={(e) => setPrice(e.target.value)} className="border px-4 py-2 text-sm shadow-sm hover:shadow-md transition">
          <option value="all">All Prices</option>
          <option value="low">&lt;1000</option>
          <option value="mid">1000-1500</option>
          <option value="high">&gt;1500</option>
        </select>
      </div>

      {/* IMAGE GRID */}
      <div className="px-6 md:px-12 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map(p => (
          <div key={p.id} className="relative group overflow-hidden  shadow-2xl bg-white transform transition duration-300 hover:scale-105">
            <img src={p.image} alt={p.name} className="w-full h-96 object-cover " />

            {/* WISHLIST */}
            <button onClick={() => toggleWishlist(p.id)} className="absolute top-4 right-4 text-2xl drop-shadow-lg z-10">
              {wishlist.includes(p.id) ? "❤️" : "🤍"}
            </button>

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 text-white transition">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-lg">₹{p.price}</p>
              <div className="flex gap-3 mt-4">
                <button onClick={() => setSelectedProduct(p)} className="flex-1 bg-white text-black py-2 rounded-full text-sm hover:bg-gray-200 transition">
                  Quick View
                </button>
                <button onClick={() => handleWhatsApp(p)} className="flex-1 bg-yellow-500 text-white py-2 rounded-full text-sm hover:bg-yellow-600 transition">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-3xl w-full max-w-md shadow-2xl animate-modalShow">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-72 object-cover rounded-2xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-lg mb-6">₹{selectedProduct.price}</p>
            <button onClick={() => handleWhatsApp(selectedProduct)} className="bg-yellow-500 text-white w-full py-2 rounded-full mb-2 hover:bg-yellow-600 transition">
              Order on WhatsApp
            </button>
            <button onClick={() => setSelectedProduct(null)} className="w-full border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
              Close
            </button>
          </div>
          <style>
            {`
              @keyframes modalShow {
                0% { opacity: 0; transform: scale(0.95); }
                100% { opacity: 1; transform: scale(1); }
              }
              .animate-modalShow {
                animation: modalShow 0.3s ease-out forwards;
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}