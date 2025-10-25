
import { useState, useEffect, type ReactNode } from "react";
import { FaHome, FaUser, FaFileAlt, FaPhoneAlt } from "react-icons/fa";

type MenuItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

const menuItems: MenuItem[] = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  // { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
  { id: "resume", label: "Resume", icon: <FaFileAlt /> },
  { id: "contact", label: "Contact", icon: <FaPhoneAlt /> },
];

export default function SideMenu() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollY = window.scrollY;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop - 120;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActive(menuItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ---------- Desktop Sidebar ---------- */}
      <div
        className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 flex-col gap-6 
        bg-[#ffffff] dark:bg-[#0b0f19]/90 backdrop-blur-md 
        border border-gray-300 dark:border-[#1e293b]
        rounded-l-[40px] p-3 shadow-xl dark:shadow-black/50 shadow-gray-400/30 
        transition-colors duration-500 z-50"
      >
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "page" : undefined}
            onClick={() => setActive(item.id)}
            className={`group relative flex items-center justify-center w-12 h-12 text-2xl rounded-full transition-all duration-300 ease-in-out
              ${
                active === item.id
                  ? "bg-gradient-to-tr from-cyan-400 to-indigo-500 text-slate-950 scale-110 shadow-lg shadow-cyan-500/40"
                  : "bg-gray-200 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400 hover:text-cyan-200 hover:bg-slate-700/60"
              }`}
          >
            {/* Glow animado activo */}
            {active === item.id && (
              <span className="absolute inset-0 rounded-full bg-cyan-300/40 blur-md animate-pulse"></span>
            )}
            {item.icon}

            {/* Label flotante */}
            <span
              className="pointer-events-none absolute right-full mr-3 whitespace-nowrap text-sm font-medium 
              text-gray-800 dark:text-slate-100 bg-gray-200/80 dark:bg-slate-900/90 
              px-3 py-1 rounded-md opacity-0 translate-x-1 
              group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 
              shadow-lg shadow-black/40 ring-1 ring-cyan-400/20"
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* ---------- Mobile Bottom Bar ---------- */}
      <div
        className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center 
        bg-[#ffffff] dark:bg-[#0b0f19]/90 backdrop-blur-md
        border-t border-gray-300 dark:border-[#1e293b]
        py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] rounded-t-[40px] 
        transition-colors duration-500 z-50"
      >
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "page" : undefined}
            onClick={() => setActive(item.id)}
            className={`group relative flex items-center justify-center w-10 h-10 text-2xl rounded-full transition-all duration-300 ease-in-out
              ${
                active === item.id
                  ? "bg-gradient-to-tr from-cyan-400 to-indigo-500 text-slate-950 scale-110 shadow-md shadow-cyan-500/40"
                  : "text-slate-500 dark:text-slate-400 hover:text-cyan-200 bg-gray-200 dark:bg-slate-800/70"
              }`}
          >
            {active === item.id && (
              <span className="absolute inset-0 rounded-full bg-cyan-300/40 blur-md animate-pulse"></span>
            )}
            {item.icon}

            {/* Tooltip (mobile) */}
            <span
              className="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap text-sm font-medium 
              text-gray-800 dark:text-slate-100 bg-gray-200/80 dark:bg-slate-900/95 
              px-3 py-1 rounded-md opacity-0 translate-y-1 
              group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 
              shadow-lg shadow-black/40 ring-1 ring-cyan-400/20"
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
