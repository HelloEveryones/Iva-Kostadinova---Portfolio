import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again!"));
  };

  return (
    <section
      id="contact"
      className="min-h-[90vh] flex flex-col items-center justify-center py-10 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-lg px-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com..."
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send message
            </button>
          </form>

          
          <div className="mt-8 flex flex-col items-center space-y-4 text-white">
            <a
              href="https://www.linkedin.com/in/iva-kostadinova-4a43ab261/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/HelloEveryones"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-400 transition"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>

            <a
              href="tel:+359888888888"
              className="flex items-center space-x-2 hover:text-green-400 transition"
            >
              <FaPhone size={24} />
              <span>+359 899559756</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
