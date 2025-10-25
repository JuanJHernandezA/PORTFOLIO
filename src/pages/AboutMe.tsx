
import { DiCode, DiFirebase } from "react-icons/di";
import { FaDownload, FaMobile, FaUserCheck } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineWeb } from "react-icons/md";
import profileImg from "../assets/profile.jpg";

export default function AboutMe() {
  return (
    <section className="flex justify-center items-center min-h-screen px-2 md:px-20 lg:px-40 transition-colors duration-500">
      <div className="rounded-2xl p-4 gap-4 m-0 md:mt-0 md:p-6 md:gap-10 w-[95%] md:w-[90%] lg:w-[1024px] h-[700px] md:h-[600px] 
        dark:bg-[#0b0f19]/90 bg-[#ffffff] backdrop-blur-md 
        border dark:border-[#1e293b] border-[#d3d3d3] 
        shadow-xl dark:shadow-black/50 shadow-gray-400/40 
        text-gray-900 dark:text-gray-100 overflow-y-scroll 
        scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">

        {/* Encabezado ABOUT */}
        <div className="mb-8 text-center w-full relative pb-6 pt-5">
          <h2 className="absolute inset-x-0 top-3 text-[60px] md:text-[90px] leading-none font-extrabold dark:text-white text-black opacity-10 tracking-widest select-none">
            ABOUT
          </h2>

          <div className="relative flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white text-gray-900">
              ABOUT ME
            </h1>
            <div className="w-40 h-1 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-tr from-cyan-400 to-indigo-500"
                style={{
                  width: "10%",
                  animation: "aboutLine 2s ease-in-out infinite alternate",
                }}
              />
            </div>
          </div>

          <style>{`
            @keyframes aboutLine {
              from { width: 10%; }
              to { width: 100%; }
            }
          `}</style>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
          {/* Imagen */}
          <div className="flex-shrink-0">
            <img
              src={profileImg}
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 dark:border-[#1e293b] border-[#cfd9e3] shadow-lg dark:shadow-black/40 shadow-gray-400/30"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col items-start text-start">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Hi, there! I'm{" "}
              <span className="text-cyan-400 dark:text-cyan-400">
                Juan Hernández
              </span>
            </h2>
            <p className="text-sm md:text-base mb-6 max-w-lg text-gray-700 dark:text-gray-300">
              Hello, I'm Juan José Hernández Arenas, a passionate System Engineering student at the Universidad del Valle. I specialize in web development, creating dynamic and responsive websites using technologies like React, Next.js, and Tailwind CSS. I'm enthusiastic about learning new technologies and continuously improving my skills to deliver high-quality solutions.
            </p>

            {/* Datos personales */}
            <div className="mb-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                <div><strong>Name:</strong> Juan José Hernández Arenas</div>
                <div><strong>Age:</strong> 19</div>
                <div><strong>Location:</strong> Zarzal, Colombia</div>
                <div><strong>Experience:</strong> 6 months</div>
                <div>
                  <strong>Languages:</strong> Spanish (Native), English (Intermediate), Portuguese (Intermediate)
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:juanjosehernandezarenas4@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    juanjosehernandezarenas4@gmail.com
                  </a>
                </div>
                <div>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+573126770253"
                    className="text-cyan-400 hover:underline"
                  >
                    +57 312 677 0253
                  </a>
                </div>
                <div><strong>Freelance:</strong> Available</div>
              </div>
            </div>

            {/* Botón CV */}
            <div className="flex items-center justify-start">
              <a
                href="/Juan_Jose_Hernandez_Arenas_CV.pdf"
                download
                className="inline-flex items-center px-4 py-2 text-gray-700 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-500 text-md hover:bg-gradient-to-tr hover:from-cyan-400 hover:to-indigo-500 hover:text-white"
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="mb-8 text-center w-full relative p-10">
          <h2 className="absolute inset-x-0 top-6 text-[60px] md:text-[90px] leading-none font-extrabold dark:text-white text-black opacity-10 select-none">
            SERVICES
          </h2>

          <div className="relative flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white text-gray-900">
              MY SERVICES
            </h1>
            <div className="w-40 h-1 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-tr from-cyan-400 to-indigo-500"
                style={{
                  width: "10%",
                  animation: "aboutLine 2s ease-in-out infinite alternate",
                }}
              />
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: <DiCode className="text-5xl text-cyan-400" />,
              title: "Web Development",
              desc: "Building responsive and dynamic websites using React, Next.js, and Tailwind CSS to create engaging user experiences."
            },
            {
              icon: <FaUserCheck className="text-4xl mb-3 text-cyan-400" />,
              title: "UI/UX Design",
              desc: "Designing user-friendly interfaces with a focus on accessibility and modern design principles to enhance user satisfaction."
            },
            {
              icon: <MdOutlineWeb className="text-5xl text-cyan-400" />,
              title: "Web Design",
              desc: "Crafting visually appealing web designs that align with brand identity and provide seamless navigation for users."
            },
            {
              icon: <DiFirebase className="text-5xl text-cyan-400" />,
              title: "Database Management",
              desc: "Implementing and managing databases to ensure efficient data storage, retrieval, and security for web applications."
            },
            {
              icon: <MdOutlineSecurity className="text-4xl mb-3 text-cyan-400" />,
              title: "Cybersecurity",
              desc: "Applying best practices in cybersecurity to protect web applications from vulnerabilities and ensure data integrity."
            },
            {
              icon: <FaMobile className="text-3xl mb-4 text-cyan-400" />,
              title: "Mobile Apps",
              desc: "Developing mobile applications that provide seamless user experiences across various devices and platforms."
            },
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 
              dark:bg-[#1a1f2b]/70 bg-[#f1f5f9]"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-gray-900">
                {service.title}
              </h3>
              <p className="dark:text-gray-300 text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
