import { useState } from "react";
import post1 from "../assets/instagram/post1.jpg";
import post2 from "../assets/instagram/post2.jpg";
import post3 from "../assets/instagram/post3.jpg";
import post4 from "../assets/instagram/post4.jpg";
import post5 from "../assets/instagram/post5.jpg";
import post6 from "../assets/instagram/post6.jpg";
import post8 from "../assets/instagram/post8.jpg";
import post9 from "../assets/instagram/post9.jpg";


function InstagramSection() {
  const [instaModal, setInstaModal] = useState(null);

  const instaGallery = [
    { id: 1, img: post1, user: "@fashionista", link: "https://instagram.com" },
    { id: 2, img: post2, user: "@trendy", link: "https://instagram.com" },
    { id: 3, img: post3, user: "@stylehub", link: "https://instagram.com" },
    { id: 4, img: post4, user: "@ootd", link: "https://instagram.com" },
    { id: 5, img: post5, user: "@fashiongram", link: "https://instagram.com" },
    { id: 6, img: post6, user: "@streetstyle", link: "https://instagram.com" },
    { id: 8, img: post8, user: "@vogue", link: "https://instagram.com" },
    { id: 9, img: post9, user: "@fashionblogger", link: "https://instagram.com" },
    
  ];

  return (
    <div>
      {/* ================= INSTAGRAM DISCOVER ================= */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-5 tracking-wide">
          Discover on Instagram
        </h2>
        <h3 className="text-xl text-center text-gray-600 mb-8">
          @Aksharcollection 
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {instaGallery.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer rounded-3xl overflow-hidden group shadow-xl"
              onClick={() => setInstaModal(item)}
            >
              <img
                src={item.img}
                alt={item.user}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <div className="text-white">
                  <p className="font-semibold">{item.user}</p>

                  <div className="flex gap-4 text-sm mt-1">
                    <span>❤️ 1.2k</span>
                    <span>👁 3.4k</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INSTAGRAM MODAL ================= */}
      {instaModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden shadow-2xl animate-fadeIn relative">

            {/* Close Button */}
            <button
              onClick={() => setInstaModal(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={instaModal.img}
              alt={instaModal.user}
              className="md:w-1/2 h-80 md:h-auto object-cover"
            />

            {/* Content */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center">

              <h3 className="text-3xl font-bold mb-3">
                {instaModal.user}
              </h3>

              <p className="text-gray-600 mb-6">
                Discover this stunning fashion look ✨ and stay updated with the latest trends.
              </p>

              {/* Stats */}
              <div className="flex gap-6 mb-6 text-gray-700">
                <span>❤️ 1,245 Likes</span>
                <span>💬 120 Comments</span>
              </div>

              <a
                href={instaModal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full text-center hover:scale-105 transition"
              >
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstagramSection;