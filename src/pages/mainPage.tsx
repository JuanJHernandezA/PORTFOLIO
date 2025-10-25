

import profileMain from "../assets/profile_main.png";
import { SocialIcon } from "react-social-icons";


export default function MainPage() {
  return (
    <section className="flex justify-center items-center min-h-screen px-2 md:px-20 lg:px-40 transition-colors duration-500">
      <div
        className="
        rounded-2xl p-9 gap-10 md:gap-4 m-1 md:mt-0 md:p-14 
        h-[700px] md:h-[600px] flex flex-col md:flex-row items-center md:gap-10 
        w-[95%] md:w-[90%] lg:w-[1024px] mx-auto 
        dark:bg-[#0b0f19]/90 bg-[#ffffff] 
        backdrop-blur-md 
        border dark:border-[#1e293b] border-[#d3d3d3] 
        shadow-xl dark:shadow-black/50 shadow-gray-400/40 
        text-gray-900 dark:text-gray-100
      "
      >
        {/* Imagen de perfil */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <div className="relative w-60 h-60 md:w-[90%] md:h-[400px] rounded-full border-2 dark:border-[#1e293b] border-[#cfd9e3] overflow-hidden shadow-lg dark:shadow-black/40 shadow-gray-400/30">
            <img src={profileMain} alt="Juan Hernandez" />
          </div>
        </div>

        {/* Texto y botones */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-light dark:text-gray-300 text-gray-600">
            Hey — I&apos;m
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 dark:text-white text-gray-900">
            Juan Hernández.
          </h1>
          <h3 className="text-2xl md:text-3xl font-bold mt-2 bg-gradient-to-tr from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Systems Engineer
          </h3>

          <p className="dark:text-gray-400 text-gray-700 mt-3 md:mt-4 max-w-md">
            I&apos;m a full stack developer based in Colombia, passionate about crafting modern, accessible, and user-friendly digital{" "}
            <span className="dark:text-cyan-300 text-cyan-600 font-medium">experiences.</span>
          </p>

          {/* Botones y redes */}
          <div className="flex gap-6 mt-6 md:mt-10">
            {/* Botón principal */}
            <a
              href="#contact"
              className="group relative mt-0 bg-gradient-to-tr from-cyan-400 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-indigo-400 transition shadow-lg shadow-cyan-500/20"
            >
              Let&apos;s Talk
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-white bg-gray-900/90 px-3 py-1 rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-lg shadow-black/40 ring-1 ring-cyan-400/20">
                Contact Me
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/juanjhernandeza"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <SocialIcon
                url="https://linkedin.com/in/juanjhernandeza"
                fgColor="#ffffff"
                style={{ height: 36, width: 36 }}
                className="mt-1 rounded-full transition hover:scale-110 dark:bg-[#1a1f2b]/70 bg-[#f1f5f9] ring-1 dark:ring-[#1e293b] ring-[#d3d3d3] hover:ring-cyan-400/40"
              />
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-white bg-gray-900/90 px-3 py-1 rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-lg shadow-black/40 ring-1 ring-cyan-400/20">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/JuanJHernandezA"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <SocialIcon
                url="https://github.com/JuanJHernandezA"
                fgColor="#ffffff"
                style={{ height: 36, width: 36 }}
                className="mt-1 rounded-full transition hover:scale-110 dark:bg-[#1a1f2b]/70 bg-[#f1f5f9] ring-1 dark:ring-[#1e293b] ring-[#d3d3d3] hover:ring-cyan-400/40"
              />
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-white bg-gray-900/90 px-3 py-1 rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-lg shadow-black/40 ring-1 ring-cyan-400/20">
                GitHub
              </span>
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
}

