import img1 from "../assets/owner.jpg";
import img2 from "../assets/instagram/post1.jpg";
import img3 from "../assets/instagram/post2.jpg";
import InstagramSection from "../components/instagram";

function OurStory() {
  return (
    <div className="font-body bg-[#fdecec] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24 px-6 bg-[#fdecec] overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
        <div className="absolute top-1/4 right-1/3 w-56 h-56 bg-gradient-to-tr from-pink-400 to-pink-100 rounded-full filter blur-xl opacity-30"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">

          {/* LEFT TEXT */}
          <div className="space-y-6">
            <p className="text-pink-500 font-medium tracking-wide animate-fadeIn">OUR JOURNEY</p>
            <h1 className="text-5xl md:text-6xl font-heading text-pink-700 leading-tight animate-fadeIn delay-100">
              Crafting Style <br /> With Passion
            </h1>
            <p className="text-gray-600 font-body animate-fadeIn delay-200">
              Akshar Collection started with a vision to redefine everyday fashion by combining elegance, comfort, and affordability.
            </p>
            <p className="text-gray-600 font-body animate-fadeIn delay-300">
              From a small idea to a growing fashion brand, our journey is driven by creativity, trust, and a love for modern trends.
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-700 animate-fadeIn delay-400">
              <p>✨ Premium Quality</p>
              <p>✨ Latest Trends</p>
              <p>✨ Affordable Fashion</p>
              <p>✨ Trusted Brand</p>
            </div>
            <div className="flex gap-4 animate-fadeIn delay-500">
              <button className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition">
                Explore Collection
              </button>
              <button className="px-6 py-3 border border-pink-500 text-pink-600 rounded-full hover:bg-pink-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* Floating Sparkles */}
            <div className="absolute -top-12 -left-10 w-16 h-16 bg-white rounded-full opacity-30 animate-bounceSlow"></div>
            <div className="absolute -bottom-10 -right-12 w-12 h-12 bg-white rounded-full opacity-20 animate-bounceSlow delay-200"></div>

            {/* Main Owner Image */}
            <img
              src={img1}
              className="w-[320px] h-[320px] md:w-[360px] md:h-[360px] object-cover rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10 transform transition-transform duration-500 hover:scale-105 hover:-rotate-3"
            />

            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-heading text-pink-700 mb-6">Our Mission & Vision</h2>
          <p className="text-gray-700 font-body mb-4">
            Our mission is to make stylish fashion accessible for everyone. We envision a world where clothing expresses individuality, creativity, and confidence.
          </p>
          <p className="text-gray-700 font-body">
            We constantly innovate to blend comfort, affordability, and elegance in every collection.
          </p>
        </div>
      </section>

   {/* ================= TEAM ================= */}
<section className="py-24 px-6 bg-[#fdecec] relative overflow-hidden">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-5xl font-heading text-pink-700 font-bold">Meet Our Team</h2>
    <p className="text-gray-600 font-body mt-2 text-lg">The people behind our success</p>
  </div>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start gap-12">

    {/* TEAM MEMBER LEFT */}
    <div className="flex flex-col items-center gap-4">
      <img src={img1} className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-4 border-pink-200 transform -rotate-6 transition-transform hover:scale-105" />
      <h3 className="text-2xl font-heading font-bold text-pink-700 mt-2">Alice</h3>
      <p className="text-gray-700 font-body text-lg">Lead Designer</p>
    </div>

    {/* TEAM MEMBER CENTER */}
    <div className="flex flex-col items-center gap-4 -translate-y-6 md:-translate-y-0">
      <img src={img2} className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-4 border-pink-200 transform rotate-3 transition-transform hover:scale-105" />
      <h3 className="text-2xl font-heading font-bold text-pink-700 mt-2">Rahul</h3>
      <p className="text-gray-700 font-body text-lg">Marketing Head</p>
    </div>

    {/* TEAM MEMBER RIGHT */}
    <div className="flex flex-col items-center gap-4">
      <img src={img3} className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-4 border-pink-200 transform -rotate-3 transition-transform hover:scale-105" />
      <h3 className="text-2xl font-heading font-bold text-pink-700 mt-2">Priya</h3>
      <p className="text-gray-700 font-body text-lg">Product Manager</p>
    </div>

  </div>

  {/* BACKGROUND DECOR */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
</section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-heading text-pink-700">What Our Customers Say</h2>
          <p className="text-gray-600 font-body mt-2">Real feedback from our happy clients</p>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alice", review: "Amazing quality and fast delivery!" },
            { name: "Rahul", review: "Stylish outfits, very affordable." },
            { name: "Priya", review: "Love the modern collection and colors." }
          ].map((cust, idx) => (
            <div key={idx} className="bg-pink-50 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
              <h3 className="font-bold font-heading text-pink-700 mb-2">{cust.name}</h3>
              <p className="text-gray-700 font-body">{cust.review}</p>
            </div>
          ))}
        </div>
      </section>
      
{/* ================= INSTAGRAM GALLERY ================= */}
      <InstagramSection />
      
    </div>
  );
}

export default OurStory;