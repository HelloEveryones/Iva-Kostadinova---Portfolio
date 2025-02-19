import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = ["React", "Angular", "typeScript", "Html", "Css"];

  const backendSkills = ["Node.js", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Motivated and adaptable professional transitioning to a career in
              accounting, leveraging my strong foundation in finance and
              economics. I aim to apply my analytical skills, attention to
              detail, and quick learning ability to contribute effectively to
              the financial success
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                        "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                        "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Statistic and iconometrics</strong>-UE
                  Varna(2015-2020)
                </li>
                <li>
                  <strong>
                    Relevant corsWork:JS Advanced, JS Application, Node.js,
                    React, Angular, Typescript, MongoDB
                  </strong>
                  -SoftUni(2023-2025)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Freight forworder at Ekofrut (2015-2023)
                  </h4>
                  <p>
                    {" "}
                    Coordinated international shipments and managed logistics
                    and customs documentation. Gained practical experience in
                    cost optimization and process improvement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Restaurant Staff | Dublin, Ireland | 01/2013 - 12/2015
                  </h4>
                  <p>
                    {" "}
                    Delivered high-quality customer service while ensuring
                    smooth daily operations. Developed excellent communication
                    and organizational skills.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Crew Member | Mediterranean Shipping Company (MSC),
                    International | 2009 - 10/2012
                  </h4>
                  <p>
                    {" "}
                    Provided exceptional service to guests onboard, adhering to
                    company safety and quality standards.
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
