import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "91XXXXXXXXXX";

    const text = `📩 *New Contact Message*

👤 Name: ${form.name}
📧 Email: ${form.email}

📝 Message:
${form.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen pt-24 px-6 md:px-12">

      {/* 🔥 TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-600">We are always here for you 💬</p>
      </div>

      {/* 💎 CONTACT CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">

        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <h3 className="text-xl font-semibold mb-2">📞 Call</h3>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
          <p>your@email.com</p>
        </div>

        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
          <p>Ahmedabad, Gujarat</p>
        </div>

      </div>

      {/* 🔥 FORM + MAP */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-3xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-full hover:bg-gray-800 transition"
          >
            Send via WhatsApp
          </button>
        </form>

        {/* MAP */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Ahmedabad&output=embed"
            className="w-full h-full min-h-[400px] border-0"
          ></iframe>
        </div>

      </div>

    </div>
  );
}