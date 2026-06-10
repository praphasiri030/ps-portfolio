import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";

export default function Skill() {
  const techStack = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Draw.io", icon: <FaProjectDiagram /> },
  ];

  return (
    <div className="flex justify-center py-6">
      <div className="w-[calc(100%-2rem)] max-w-[1280px] flex flex-col md:flex-row items-center gap-4 md:gap-0">
        <div className="w-full md:w-[25%] flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 border-b-2 md:border-b-0 md:border-r-2 border-primary/20 pb-4 md:pb-0 md:pr-6 shrink-0 h-auto md:h-12">
          <span className="text-primary text-base uppercase whitespace-nowrap tracking-widest font-bold text-center md:text-left">
            TECH STACK
          </span>

          <hr className="hidden md:block flex-1 border-primary/20" />
        </div>

        <div className="w-full md:w-[75%] overflow-hidden relative flex items-center h-12 mask-gradient mt-2 md:mt-0">
          <div className="flex w-max gap-13 animate-infinite-scroll shrink-0 pl-13">
            {techStack.map((tech, index) => (
              <div
                key={`set1-${index}`}
                className="flex items-center gap-2 text-primary/70 hover:text-secondary transition-colors duration-300 select-none cursor-pointer"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}

            {techStack.map((tech, index) => (
              <div
                key={`set2-${index}`}
                aria-hidden="true"
                className="flex items-center gap-2 text-primary/70 hover:text-secondary transition-colors duration-300 select-none cursor-pointer"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
