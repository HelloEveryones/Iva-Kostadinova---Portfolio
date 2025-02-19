import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

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
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again!"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-10 sm:py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-md md:max-w-lg mx-auto px-4 sm:px-6">
          {/* Заглавие с адаптивен размер */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>

          {/* Форма */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Поле за име */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-base transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-500/10"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Поле за имейл */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-base transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-500/10"
                placeholder="example@gmail.com..."
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Поле за съобщение */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-base transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-500/10 resize-none min-h-[120px] sm:min-h-[150px] text-base leading-relaxed"
                placeholder="Your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Бутон за изпращане */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 text-base rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
