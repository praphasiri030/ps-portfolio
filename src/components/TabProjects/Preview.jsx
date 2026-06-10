import { FiArrowUpRight } from "react-icons/fi";
import figmaCatHotel from "../../assets/preview/catHotel.figma.png";
import githubCatHotel from "../../assets/preview/catHotel.github.png";

export default function Preview() {
  return (
    <div className="w-full py-4 relative">
      <div className="flex flex-col gap-10 md:gap-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 w-full overflow-hidden border border-primary/20">
            <div className="w-full aspect-[16/10] relative bg-[#121212]">
              <img
                src={figmaCatHotel}
                alt="Figma UI/UX Design"
                className="absolute inset-0 w-full h-full object-contain p-4 hover:opacity-90 transition-opacity"
              />
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-3 w-full">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase transition-all duration-300">
              Design Prototype
            </span>
            <a
              href="https://www.figma.com/design/raSH5zhZ42xwM22IkNiiOE/cat-hotel?node-id=0-1&m=dev&t=sDnGHpQJDQSBaGDj-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xl md:text-2xl font-black text-accent tracking-wide leading-tight hover:text-primary transition-colors group w-fit"
            >
              Figma Design
              <FiArrowUpRight className="w-8 h-8 text-accent/60 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm md:text-base text-accent leading-relaxed mt-2 min-h-[120px] transition-all duration-300">
              Browse the Figma prototype to explore the project's user
              interface, user flows, and design concepts created for the Cat
              Hotel Reservation Management System.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex flex-col gap-3 w-full md:order-1 order-2 md:text-right">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase transition-all duration-300">
              Repository
            </span>
            <a
              href="https://github.com/praphasiri030/Saba-Cat-Hotel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xl md:text-2xl font-black text-accent tracking-wide leading-tight hover:text-primary transition-colors group w-fit md:ml-auto"
            >
              GitHub
              <FiArrowUpRight className="w-8 h-8 text-white/60 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm md:text-base text-accent/70 leading-relaxed mt-2 min-h-[120px] transition-all duration-300">
              Browse the GitHub repository to explore parts of the source code,
              project structure, and technologies used in developing the Cat
              Hotel Reservation Management System.
            </p>
          </div>

          <div className="md:col-span-7 w-full overflow-hidden border border-primary/20 md:order-2 order-1">
            <div className="w-full aspect-[16/10] relative bg-[#121212]">
              <img
                src={githubCatHotel}
                alt="GitHub Repository"
                className="absolute inset-0 w-full h-full object-contain p-4 hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
