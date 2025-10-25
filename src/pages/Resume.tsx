
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaGit,
  FaGithub,
  FaDocker,
  FaAws,
  FaFigma,
  FaGitlab,
  FaLinux,
  FaNpm,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFastapi,
  SiNginx,
  SiPostman,
  SiVite,
  SiPrisma,
  SiJest,
  SiNotion,
  SiTrello,
  SiJirasoftware,
  SiIntellijidea,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function Resume() {
  const education = [
    {
      title: "Software Programming Technician",
      institute: "Servicio Nacional de Aprendizaje",
      date: "2020-2021",
      desc: "Trained in software development fundamentals, including OOP, web technologies, and database management. Skilled in building practical applications and working in agile environments.",
    },
    {
      title: "Administrative Assistant",
      institute: "I.E Nuestra Señora De Chiquinquirá",
      date: "2021",
      desc: "Experienced in managing office tasks, organizing documents, and supporting daily operations efficiently.",
    },
    {
      title: "Systems Engineer",
      institute: "Universidad del Valle",
      date: "2022-2026",
      desc: "Focused on designing, implementing, and maintaining scalable software and IT solutions, with strong skills in full-stack development and system architecture.",
    },
  ];

  const experience = [
    {
      title: "FullStack Developer",
      company: "GOLD GROUP CM S.A.S.",
      date: "07/2025 - 12/2025",
      desc: "Contributed to the development of a scalable e-commerce platform, documenting requirements, endpoints, and internal processes. Assisted frontend team with layout and UI components and developed CRUD modules for products, categories, and users.",
    },
  ];

  const frontendSkills = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Figma", icon: FaFigma, color: "#A259FF" },
  ];

  const backendSkills = [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ];

  const toolsSkills = [
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "GitLab", icon: FaGitlab, color: "#FC6D26" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Linux", icon: FaLinux, color: "#FCC624" },
    { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#000000" },
    { name: "Visual Studio", icon: BiLogoVisualStudio, color: "#007ACC" },
    { name: "Trello", icon: SiTrello, color: "#0079BF" },
    { name: "Jira", icon: SiJirasoftware, color: "#0052CC" },
    { name: "Notion", icon: SiNotion, color: "#000000" },
    { name: "Npm", icon: FaNpm, color: "#CB3837" },
  ];

  const renderIcons = (skills: any[]) =>
    skills.map((skill, i) => {
      const Icon = skill.icon;
      return (
        <div
          key={i}
          className="group relative text-5xl hover:scale-110 transition-transform duration-300"
          style={{ color: skill.color }}
        >
          <Icon />
          <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-slate-100 bg-slate-900/90 px-3 py-1 rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-lg shadow-black/40 ring-1 ring-cyan-400/20">
            {skill.name}
          </span>
        </div>
      );
    });

  return (
    <section className="flex justify-center items-center min-h-screen px-2 md:px-20 lg:px-40 transition-colors duration-500">
      <div className="rounded-2xl p-4 gap-4 md:p-6 md:gap-10 w-[95%] md:w-[90%] lg:w-[1024px] h-[700px] md:h-[600px] 
        dark:bg-[#0b0f19]/90 bg-[#ffffff] backdrop-blur-md 
        border dark:border-[#1e293b] border-[#d3d3d3] 
        shadow-xl dark:shadow-black/50 shadow-gray-400/40 
        text-gray-900 dark:text-gray-100 overflow-y-scroll 
        scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">

        {/* Encabezado RESUME */}
        <div className="mb-8 text-center w-full relative pb-6 pt-5">
          <h2 className="absolute inset-x-0 top-3 text-[60px] md:text-[90px] leading-none font-extrabold dark:text-white text-black opacity-10 tracking-widest select-none">
            RESUME
          </h2>

          <div className="relative flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">MY RESUME</h1>
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

        {/* EDUCATION / EXPERIENCE */}
        <div className="flex flex-col md:flex-row p-5 gap-10 mb-10">
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-cyan-400 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-1 top-0 bottom-0 w-[1px] dark:bg-gray-700 bg-gray-300"></div>
              {education.map((item, i) => (
                <div key={i} className="relative mb-8">
                  <span className="absolute left-[-24px] top-3 w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.institute}</p>
                  <p className="text-cyan-400 text-sm mt-1">{item.date}</p>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-cyan-400 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-1 top-0 bottom-0 w-[1px] dark:bg-gray-700 bg-gray-300"></div>
              {experience.map((item, i) => (
                <div key={i} className="relative mb-8">
                  <span className="absolute left-[-24px] top-3 w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.company}</p>
                  <p className="text-cyan-400 text-sm mt-1">{item.date}</p>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mb-8 text-center w-full relative pb-6 pt-5">
          <h2 className="absolute inset-x-0 top-3 text-[60px] md:text-[90px] leading-none font-extrabold dark:text-white text-black opacity-10 tracking-widest select-none">
            SKILLS
          </h2>
          <div className="relative flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">MY SKILLS</h1>
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

        <div className="space-y-14 mb-10">
          <div>
            <div className="flex justify-center items-center gap-2 mb-6">
              <FaLaptopCode className="text-cyan-400 text-xl" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="grid md:grid-cols-9 grid-cols-3 gap-8 justify-items-center">
              {renderIcons(frontendSkills)}
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center gap-2 mb-6">
              <FaServer className="text-cyan-400 text-xl" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="grid md:grid-cols-9 grid-cols-3 gap-8 justify-items-center">
              {renderIcons(backendSkills)}
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center gap-2 mb-6">
              <FaTools className="text-cyan-400 text-xl" />
              <h3 className="text-xl font-semibold">Tools & DevOps</h3>
            </div>
            <div className="grid md:grid-cols-9 grid-cols-3 gap-8 justify-items-center">
              {renderIcons(toolsSkills)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
