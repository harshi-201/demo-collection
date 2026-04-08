import Hero from "../components/Hero";
import InstagramSection from "../components/instagram";

// IMAGES
import heroimg1 from "../assets/heroimg/herobg2.jpg";
import heroimg3 from "../assets/heroimg/herobg3.jpg";
import herobg4 from "../assets/heroimg/herobg.jpg";
import Casual from "../assets/bestsaller-img/Casual-Shirt.avif";

import celebrity1 from "../assets/celebratyimg/celebraty1.jpg";
import celebrity2 from "../assets/celebratyimg/celebraty2.jpg";
import fammally from "../assets/heroimg/famally.jpg";
import Dresses from "../assets/SHOPIMG/Dresses/Dresses4.jpg";
import kidsimg from "../assets/heroimg/kidsimg.jpg";
import shirt from "../assets/SHOPIMG/Shirts/shirts3.jpg";
const whatsappNumber = "919999999999";

const outfits = [
  { name: "Summer Fit", img: Casual, price: 1499, desc: "Lightweight breathable summer wear" },
  { name: "Casual Drop", img: Dresses, price: 1299, desc: "Everyday stylish comfort" },
  { name: "Urban Sneaker", img: heroimg1, price: 1999, desc: "Street-ready bold look" },
  { name: "Luxury Watch", img: heroimg3, price: 3499, desc: "Premium classy finish" },
  { name: "Winter Layer", img: kidsimg, price: 3499, desc: "Warm & stylish layering" },
];

const celebrities = [
  { name: "Street Icon", img: celebrity1 },
  { name: "Fashion Star", img: celebrity2 },
];

function Home() {

  const sendToWhatsApp = (product) => {
    const msg = `Hi 👋\nI want to order:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nDetails: ${product.desc}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`);

    
  };

  return (
    <div className="font-sans bg-white text-black">

      <Hero />

      {/* BIG VISUAL GRID */}
      <section className="grid md:grid-cols-3 gap-4 p-4">
        {[Dresses, kidsimg, shirt].map((img, i) => (
          <div key={i} className="relative overflow-hidden h-[420px] group">
            <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
          </div>
        ))}
      </section>

      {/* PRODUCT GRID WITH DETAILS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-16 text-center">Shop Collection</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {outfits.map((item, idx) => (
            <div key={idx} className="group">
              <div className="overflow-hidden">
                <img src={item.img} className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-500" />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-medium">₹{item.price}</span>
                </div>

                <button
                  onClick={() => sendToWhatsApp(item)}
                  className="mt-4 w-full py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                >
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL IMAGE BANNER */}
      <section>
        <img src={fammally} className="w-full h-[600px] object-cover" />
      </section>

      {/* CELEBRITY */}
      <section className="py-28 px-6">
        <h2 className="text-4xl font-semibold text-center mb-16">Celebrity Style</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {celebrities.map((c, i) => (
            <div key={i} className="relative overflow-hidden group">
              <img src={c.img} className="w-full h-[520px] object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-semibold">{c.name}</h3>
                <button className="mt-3 px-6 py-2 bg-white text-black rounded-full">
                  Explore Style
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRONG TESTIMONIAL */}
      <section className="py-28 bg-gray-200 text-black text-center">
        <h2 className="text-3xl mb-12">Customer Love</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-300 p-6 rounded-xl">
              <p className="italic text-black-300">
                "Best purchase ever! Quality is amazing and WhatsApp ordering was super easy."
              </p>
              <h4 className="mt-4 font-semibold">Happy Customer</h4>
            </div>
          ))}
        </div>
      </section>
      <InstagramSection />

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-light">Ready to Upgrade Your Style?</h2>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="inline-block mt-8 px-10 py-3 bg-black text-white rounded-full"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default Home;
