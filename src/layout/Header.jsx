import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Project", id: "project" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full bg-custom-bg/90 backdrop-blur-md sticky top-0 z-50">
      <div className="flex md:hidden items-center justify-between px-6 py-6">
        <a
          href="#home"
          className="text-xl font-black text-white tracking-wider uppercase select-none"
        >
          PRAPHA.S
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer group gap-1.5"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-primary group-hover:bg-secondary transition-all duration-300 transform ease-in-out
            ${isOpen ? "rotate-45 translate-y-2 bg-secondary" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-primary group-hover:bg-secondary transition-all duration-300
            ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-primary group-hover:bg-secondary transition-all duration-300 transform ease-in-out
            ${isOpen ? "-rotate-45 -translate-y-2 bg-secondary" : ""}`}
          />
        </button>
      </div>

      <div className="hidden md:flex py-10 justify-center gap-15">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="cursor-pointer font-medium text-primary hover:text-secondary transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div
        className={`md:hidden absolute w-full left-0 bg-[#111113]/95 backdrop-blur-lg border-b border-primary/10 transition-all duration-500 ease-in-out overflow-hidden z-40
        ${isOpen ? "max-h-[300px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}
      >
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="font-medium text-primary hover:text-secondary transition-colors duration-300 text-base uppercase tracking-widest block w-full text-center py-2"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
