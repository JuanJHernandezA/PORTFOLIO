
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer
      className="w-full mt-20 border-t border-gray-300 dark:border-[#1e293b]
      bg-[#ffffff] dark:bg-[#0b0f19]/90 backdrop-blur-md
      shadow-inner dark:shadow-black/40 shadow-gray-300/30
      text-gray-800 dark:text-gray-300 transition-colors duration-500"
    >
     
      <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-10">
        
       
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
          <a
            href="#home"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Contact
          </a>
        </nav>

        <div className="flex gap-4">
          <SocialIcon
            url="https://linkedin.com/in/juanjhernandeza"
            fgColor="#ffffff"
            style={{ height: 34, width: 34 }}
            className="rounded-full bg-gradient-to-tr from-cyan-500/70 to-indigo-600/70 
            ring-1 ring-slate-700/50 hover:ring-cyan-400/50 
            hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
          />
          <SocialIcon
            url="https://github.com/JuanJHernandezA"
            fgColor="#ffffff"
            style={{ height: 34, width: 34 }}
            className="rounded-full bg-gradient-to-tr from-gray-700/70 to-gray-900/70 
            ring-1 ring-slate-700/50 hover:ring-cyan-400/50 
            hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
          />
        </div>
      </div>

      
      <div className="w-[90%] md:w-[80%] mx-auto border-t border-gray-300 dark:border-slate-800/60"></div>

     
      <div className="mt-6 pb-6 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-medium">
            Juan Hernández
          </span>{" "}
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
