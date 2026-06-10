export default function TabButton({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-2.5 text-xs font-bold tracking-widest cursor-pointer transition-all duration-500 min-w-[140px] border-2 border-primary/20 overflow-visible group
        ${isActive ? "text-secondary" : "text-primary"}`}
    >
      <div className="relative h-4 overflow-hidden flex flex-col justify-center items-center">
        <span
          className={`block transform transition-all duration-500 group-hover:-translate-y-5 group-hover:opacity-0
          ${isActive ? "-translate-y-5 opacity-0" : ""}`}
        >
          {children}
        </span>

        <span
          className={`absolute block transform transition-all duration-500 text-secondary
          ${
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          }`}
        >
          {children}
        </span>
      </div>

      {/* มุมบนซ้าย */}
      <div className="absolute top-0 left-0 w-2 h-2 -translate-x-px -translate-y-px border-t-2 border-l-2 border-primary"></div>
      {/* มุมบนขวา */}
      <div className="absolute top-0 right-0 w-2 h-2 translate-x-px -translate-y-px border-t-2 border-r-2 border-primary"></div>
      {/* มุมล่างซ้าย */}
      <div className="absolute bottom-0 left-0 w-2 h-2 -translate-x-px translate-y-px border-b-2 border-l-2 border-primary"></div>
      {/* มุมล่างขวา */}
      <div className="absolute bottom-0 right-0 w-2 h-2 translate-x-px translate-y-px border-b-2 border-r-2 border-primary"></div>
    </button>
  );
}
