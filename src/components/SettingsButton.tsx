import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function SettingsButton() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Lee el tema inicial desde localStorage o por defecto dark
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  // Aplica el tema global al cargar o cambiar
  useEffect(() => {
    if (darkMode) {
     
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      className="fixed md:bottom-6 bottom-3/4  z-[9999]
                 flex items-center justify-center 
                 w-12 h-12 rounded-r-[5px]
                 bg-gradient-to-tr from-cyan-400 to-indigo-500
                 shadow-lg shadow-cyan-500/30 text-white
                 hover:scale-110 transition-all duration-300"
      aria-label="Cambiar tema"
    >
      {darkMode ? (
        <FaMoon className="text-2xl transition-transform duration-500" />
      ) : (
        <FaSun className="text-2xl  animate-spin-slow" />
      )}
    </button>
  );
}
