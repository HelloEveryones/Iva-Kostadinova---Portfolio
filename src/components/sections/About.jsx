import { RevealOnScroll } from "../RevealOnScroll";


const diplomaVarna = `${import.meta.env.BASE_URL}ueVarna.jpg`;
const diplomaSoftUni = `${import.meta.env.BASE_URL}softuni.jpg`;

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            🎓 Education & 💼 Work Experience
          </h2>

          
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <h3 className="text-xl font-bold mb-4">🚀 From Freight Forwarder to Software Development</h3>
            <p className="text-gray-300">
              My background in logistics, international trade, and hospitality has shaped my structured approach to
              problem-solving, attention to detail, and adaptability.  
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>📦 Logistics & Freight Forwarding → <span className="text-blue-400">Analytical thinking, process optimization, and working with data.</span></li>
              <li>🤝 Customer Service & Hospitality → <span className="text-blue-400">Strong communication, teamwork, and efficiency under pressure.</span></li>
              <li>⚓ Maritime Industry → <span className="text-blue-400">Discipline, precision, and adaptability in fast-paced environments.</span></li>
            </ul>
            <p className="text-gray-300 mt-4">
              Now, as a web developer, <span className="text-blue-400">I apply these skills to write clean code, solve complex problems, and collaborate effectively in tech teams.</span>
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
           
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <strong className="text-blue-400">Statistics and Econometrics</strong> - University of Economics - Varna, Bulgaria 🎓 (2009 - 2013)
                </li>
                <li>
                  <strong className="text-blue-400">Front-End Developer with JavaScript</strong> - SoftUni (2023-2025)
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">📜 Diplomas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                 
                  <div className="text-center">
                    <a href={diplomaVarna} target="_blank" rel="noopener noreferrer">
                      <img
                        src={diplomaVarna}
                        alt="Diploma from University of Economics - Varna"
                        className="w-full h-48 object-contain rounded-xl border shadow-lg transition transform hover:scale-105"
                      />
                    </a>
                    <p className="text-sm text-gray-400 mt-2">Click to view diploma</p>
                  </div>

                  
                  <div className="text-center">
                    <a
                      href="https://softuni.bg/certificates/details/238022/029d7001"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={diplomaSoftUni}
                        alt="SoftUni Diploma"
                        className="w-full h-48 object-contain rounded-xl border shadow-lg transition transform hover:scale-105"
                      />
                    </a>
                    <p className="text-sm text-gray-400 mt-2">
                      <a
                        href="https://softuni.bg/certificates/details/238022/029d7001"
                        className="text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate ➡️
                      </a>
                    </p>
                  </div>

                </div>
              </div>
            </div>

           
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                
                
                <div>
                  <h4 className="font-semibold text-blue-400">Freight Forwarder | Ekofrut (2015-2023)</h4>
                  <p>
                    Optimized logistics workflows and managed international shipments.  
                    Developed problem-solving and data-driven decision-making skills.
                  </p>
                </div>

               
                <div>
                  <h4 className="font-semibold text-blue-400">Restaurant Staff | Dublin, Ireland (2013 - 2015)</h4>
                  <p>
                    Delivered high-quality customer service while ensuring smooth daily operations.  
                    Developed excellent communication and teamwork skills.
                  </p>
                </div>

                
                <div>
                  <h4 className="font-semibold text-blue-400">Crew Member | Mediterranean Shipping Company (MSC) (2009 - 2012)</h4>
                  <p>
                    Adapted to high-pressure situations while ensuring strict operational standards.  
                    Developed strong discipline, precision, and efficiency.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
