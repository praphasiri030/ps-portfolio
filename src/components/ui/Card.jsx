export default function Card({ children, className = "" }) {
  return (
    <div className="flex justify-center">
      <div
        className={`w-[calc(100%-2rem)] max-w-[1280px] text-accent border-2 border-primary/20 relative ${className}`}
      >
        {/* มุมบนซ้าย */}
        <div className="absolute top-0 left-0 w-8 h-8 -translate-x-px -translate-y-px">
          <div className="absolute top-0 left-0 h-px w-full bg-primary"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-primary"></div>
        </div>
        {/* มุมบนขวา */}
        <div className="absolute top-0 right-0 w-8 h-8 translate-x-px -translate-y-px">
          <div className="absolute top-0 right-0 h-px w-full bg-primary"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-primary"></div>
        </div>
        {/* มุมล่างซ้าย */}
        <div className="absolute bottom-0 left-0 w-8 h-8 -translate-x-px translate-y-px">
          <div className="absolute bottom-0 left-0 h-px w-full bg-primary"></div>
          <div className="absolute bottom-0 left-0 w-px h-full bg-primary"></div>
        </div>
        {/* มุมล่างขวา */}
        <div className="absolute bottom-0 right-0 w-8 h-8 translate-x-px translate-y-px">
          <div className="absolute bottom-0 right-0 h-px w-full bg-primary"></div>
          <div className="absolute bottom-0 right-0 w-px h-full bg-primary"></div>
        </div>

        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
