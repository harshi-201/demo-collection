import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Instagramsection from "../components/instagram";
// TOPS
import top1 from "../assets/SHOPIMG/TOPS/top1.jpg";
import top2 from "../assets/SHOPIMG/TOPS/top2.jpg";
import top3 from "../assets/SHOPIMG/TOPS/top3.jpg";
import top4 from "../assets/SHOPIMG/TOPS/top4.jpg";
import top5 from "../assets/SHOPIMG/TOPS/top5.jpg";
import top6 from "../assets/SHOPIMG/TOPS/top6.jpg";

// SHIRTS
import shirts1 from "../assets/SHOPIMG/Shirts/shirts1.jpg";
import shirts2 from "../assets/SHOPIMG/Shirts/shirts2.jpg";
import shirts3 from "../assets/SHOPIMG/Shirts/shirts3.jpg";
import shirts4 from "../assets/SHOPIMG/Shirts/shirts4.jpg";
import shirts5 from "../assets/SHOPIMG/Shirts/shirts5.jpg";
import shirts6 from "../assets/SHOPIMG/Shirts/shirts6.jpg";

// SHORTS
import shorts1 from "../assets/SHOPIMG/Shorts/Shorts1.jpg";
import shorts2 from "../assets/SHOPIMG/Shorts/Shorts2.jpg";
import shorts3 from "../assets/SHOPIMG/Shorts/Shorts3.jpg";
import shorts4 from "../assets/SHOPIMG/Shorts/Shorts4.jpg";
import shorts5 from "../assets/SHOPIMG/Shorts/Shorts5.jpg";
import shorts6 from "../assets/SHOPIMG/Shorts/Shorts6.jpg";

// SKIRTS
import skirts2 from "../assets/SHOPIMG/Skirts/Skirts2.jpg";
import skirts3 from "../assets/SHOPIMG/Skirts/Skirts3.jpg";
import skirts4 from "../assets/SHOPIMG/Skirts/Skirts4.jpg";
import skirts5 from "../assets/SHOPIMG/Skirts/Skirts5.jpg";
import skirts6 from "../assets/SHOPIMG/Skirts/Skirts6.jpg";

// PANTS
import pants1 from "../assets/SHOPIMG/Pants/Pents1.jpg";
import pants2 from "../assets/SHOPIMG/Pants/Pents2.jpg";
import pants3 from "../assets/SHOPIMG/Pants/Pents3.jpg";
import pants4 from "../assets/SHOPIMG/Pants/Pents4.jpg";
import pants5 from "../assets/SHOPIMG/Pants/Pents5.jpg";
import pants6 from "../assets/SHOPIMG/Pants/Pents6.jpg";

// DRESSES
import dress1 from "../assets/SHOPIMG/Dresses/Dresses1.jpg";
import dress2 from "../assets/SHOPIMG/Dresses/Dresses2.jpg";
import dress3 from "../assets/SHOPIMG/Dresses/Dresses3.jpg";
import dress4 from "../assets/SHOPIMG/Dresses/Dresses4.jpg";
import dress5 from "../assets/SHOPIMG/Dresses/Dresses5.jpg";
import dress6 from "../assets/SHOPIMG/Dresses/Dresses6.jpg";

// BLAZERS
import blazer1 from "../assets/SHOPIMG/Blazers/Blazers1.jpg";
import blazer2 from "../assets/SHOPIMG/Blazers/Blazers2.jpg";
import blazer3 from "../assets/SHOPIMG/Blazers/Blazers3.jpg";
import blazer4 from "../assets/SHOPIMG/Blazers/Blazers4.jpg";
import blazer5 from "../assets/SHOPIMG/Blazers/Blazers5.jpg";
import blazer6 from "../assets/SHOPIMG/Blazers/Blazers6.jpg";

const productsData = {
  Tops: [{ name: "Floral Top", price: "₹1200", images: [top1, top2, top3, top4, top5, top6], description: "Soft cotton top", sizes: ["S", "M", "L", "XL"] }],
  Shirts: [{ name: "Formal Shirt", price: "₹1500", images: [shirts1, shirts2, shirts3, shirts4, shirts5, shirts6], description: "Office wear shirt", sizes: ["M", "L", "XL"] }],
  Shorts: [{ name: "Denim Shorts", price: "₹900", images: [shorts1, shorts2, shorts3, shorts4, shorts5, shorts6], description: "Comfortable shorts", sizes: ["S", "M", "L"] }],
  Skirts: [{ name: "Skirt", price: "₹900", images: [skirts2, skirts3, skirts4, skirts5, skirts6], description: "Comfortable Skirt", sizes: ["S", "M", "L"] }],
  Pants: [{ name: "Pants", price: "₹900", images: [pants1, pants2, pants3, pants4, pants5, pants6], description: "Comfortable Pants", sizes: ["S", "M", "L"] }],
  Dresses: [{ name: "Dress", price: "₹1200", images: [dress1, dress2, dress3, dress4, dress5, dress6], description: "Elegant dress", sizes: ["S", "M", "L"] }],
  Blazers: [{ name: "Blazer", price: "₹1500", images: [blazer1, blazer2, blazer3, blazer4, blazer5, blazer6], description: "Elegant blazer", sizes: ["S", "M", "L"] }]
};

function Collections() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category") || "Tops";

  const products = productsData[category] || [];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(products[0]);
      setSelectedImage(products[0].images[0]);
      setSelectedSize("");
    }
  }, [category]);

  // ✅ WHATSAPP FUNCTION
  const handleWhatsApp = () => {
    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    const message = `Hello, I want to order:

🛍 Product: ${selectedProduct.name}
💰 Price: ${selectedProduct.price}
📏 Size: ${selectedSize}
🖼 Image: ${selectedImage}`;

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="pt-24 w-full px-6 md:px-16 py-12 bg-gray-50 min-h-screen">

      {selectedProduct && (
        <div className="grid md:grid-cols-2 gap-12 bg-white p-6 rounded-3xl shadow-sm">

          {/* LEFT */}
          <div>
            <img
              src={selectedImage}
              className="w-full h-[500px] object-cover rounded-2xl"
            />

            <div className="flex gap-3 mt-4 overflow-x-auto">
              {selectedProduct.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`h-20 w-20 object-cover rounded-xl cursor-pointer border ${
                    selectedImage === img
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center">

            <h2 className="text-3xl font-semibold">
              {selectedProduct.name}
            </h2>

            <p className="text-xl mt-2 font-medium">
              {selectedProduct.price}
            </p>

            <p className="mt-5 text-gray-500">
              {selectedProduct.description}
            </p>

            {/* SIZE */}
            <div className="mt-8">
              <p className="text-sm mb-3">Select Size</p>
              <div className="flex gap-3 flex-wrap">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
              >
                Order on WhatsApp
              </button>
            </div>

            {/* INFO */}
            <div className="mt-8 text-sm text-gray-500 space-y-2">
              <p>🚚 Free delivery above ₹999</p>
              <p>🔁 Easy 7-day returns</p>
              <p>✔ Premium quality guaranteed</p>
            </div>

          </div>
        </div>
      )}

      <Instagramsection />
    </div>
  );
}

export default Collections;