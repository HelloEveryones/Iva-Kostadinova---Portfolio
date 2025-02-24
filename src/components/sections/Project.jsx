import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="w-full h-64 mb-4">
                <iframe 
                  src="https://moviesworldangular.netlify.app/home" 
                  title="Movies World"
                  className="w-full h-full rounded-xl border"
                  loading="lazy"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2">Movies World - Angular SPA</h3>
              <p className="text-gray-400 mb-4">
                A dynamic Single Page Application (SPA) built with Angular where users can browse, add, and interact with movies.
                It features user authentication, movie management, and comment functionality, integrating a REST API for real-time data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Angular", "TypeScript"," JWT (JSON Web Token)", "Angular Router", "HTML/CSS", "REST API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://moviesworldangular.netlify.app/home"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ➡️ Click to see the Project ⬅️
                </a>
              </div>
            </div>

            {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="w-full h-64 mb-4">
                <iframe 
                  src="https://moviesworldangular.netlify.app/home" 
                  title="React Project"
                  className="w-full h-full rounded-xl border"
                  loading="lazy"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2">🎬 Movie Mania - React SPA with Weather API Integration</h3>
              <p className="text-gray-400 mb-4">
              Movie Mania is a web application built with React, allowing users to explore, discover, and manage movies effortlessly.
              The project integrates an external movie database API to fetch and display movie details such as title, release year, genre, rating, and description.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React, React Router, React Hooks, Context API", "Node", "JavaScript", "External Movie Database API, Weather API", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://moviemaniareact.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ➡️ Click to see the Project ⬅️
                </a>
              </div>
            </div> */}

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
