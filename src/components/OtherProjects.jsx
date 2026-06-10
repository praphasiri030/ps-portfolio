import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import eCommerce from "../assets/ecommShop.png";
import pixelPortfolio from "../assets/pixelPort.png";

export default function OtherProjects() {
  const projects = [
    {
      id: "project01",
      title: "E-Commerce Website (Workshop)",
      desc: "Built for desktop view. It includes an advanced product filter (keywords, categories, price slider) and an interactive cart that saves data on refresh. Secured with role-based route guards for Users and Admins.",
      tech: "React.js, Tailwind CSS, Node.js, Express.js, Prisma, Cloudinary",
      image: eCommerce,
      livedemo: "https://ecommerce-web-mocha-psi.vercel.app/",
      github: "https://github.com/praphasiri030/ecommerce-web",
    },
    {
      id: "project02",
      title: "Pixel Portfolio",
      desc: "A pixel art-styled personal portfolio website, featuring a fully responsive layout optimized for a seamless experience across all devices, from mobiles to desktops.",
      tech: "React.js, JavaScript, Tailwind CSS",
      image: pixelPortfolio,
      livedemo: "https://praphasiri-portfolio.vercel.app/",
      github: "https://github.com/praphasiri030/pixel-portfolio",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="text-base md:text-2xl text-accent font-extrabold p-4 border-t-2 border-b-2 border-primary/20">
        <h3>Other Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col border border-primary/20 overflow-hidden hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-full aspect-[16/9] relative bg-[#121212] overflow-hidden border-b border-primary/10">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-accent/30 text-sm">
                  No Image Available
                </div>
              )}
            </div>

            <div className="p-3 md:p-6 flex flex-col flex-grow justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-secondary tracking-wide uppercase">
                  {project.tech}
                </span>

                <h4 className="text-balance md:text-xl font-bold text-accent tracking-wide">
                  {project.title}
                </h4>

                <p className="text-sm text-primary leading-relaxed mt-1">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.livedemo && (
                  <a
                    href={project.livedemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-custom-bg text-xs font-bold hover:bg-primary/90 transition-all shadow-lg"
                  >
                    Live Demo
                    <FiArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
