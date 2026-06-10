import { HiXMark } from "react-icons/hi2";

export default function Lightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <button
        className="fixed top-6 right-6 text-accent/60 hover:text-accent transition-all duration-200 p-2 z-[1000] focus:outline-none bg-white/5 hover:bg-white/10 rounded-full"
        onClick={onClose}
        title="Close preview"
      >
        <HiXMark className="w-7 h-7" />
      </button>

      {/* กล่องแสดงรูปภาพ */}
      <div
        className="relative max-w-7xl max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt="Lightbox Preview"
          className="w-full h-full max-h-[85vh] object-contain cursor-zoom-out"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
