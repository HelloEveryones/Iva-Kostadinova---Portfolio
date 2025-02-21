import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24"
    >
      <RevealOnScroll>
        
        <img
          src={`${import.meta.env.BASE_URL}cv.jpg`}  
          alt="Iva Kostadinova"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-lg object-cover mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          🖥️ Hi, I'm Iva Kostadinova! <br /> Welcome to my portfolio—where bugs are just unexpected features! 🐞🚀
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am a Junior JavaScript Developer, passionate and results-driven,
          with hands-on experience in React, Angular, Node.js, Express.js, and MongoDB.
          Skilled in both frontend and backend development, with a strong
          foundation in building dynamic and scalable web applications. Eager
          to leverage my technical expertise and problem-solving skills in a
          forward-thinking tech company.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
           hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)]"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
           hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.2)] hover:bg-blue-500/10"
          >
            Contact me
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
