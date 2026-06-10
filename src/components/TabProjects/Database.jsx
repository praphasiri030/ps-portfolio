import { useState } from "react";
import erDiagram from "../../assets/er-diagram/ER.drawio.png";

import Lightbox from "../ui/Lightbox";

export default function Database() {
  const [activePreviewImg, setActivePreviewImg] = useState(null);

  return (
    <div className="w-full py-4 relative">
      <h3 className="text-xl md:text-2xl text-center font-black text-accent tracking-wide mb-6">
        ER Diagram (ERD)
      </h3>

      <div className="w-full overflow-hidden border border-primary/10 ">
        <div className="w-full aspect-[16/10] relative bg-[#121212]">
          <img
            src={erDiagram}
            alt="Database ER Diagram"
            onClick={() => setActivePreviewImg(erDiagram)}
            className="absolute inset-0 w-full h-full object-contain p-4 select-none cursor-zoom-in hover:opacity-90 transition-opacity"
          />
        </div>
      </div>

      <Lightbox
        src={activePreviewImg}
        onClose={() => setActivePreviewImg(null)}
      />
    </div>
  );
}
