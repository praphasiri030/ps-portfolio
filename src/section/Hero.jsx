import Card from "../components/ui/Card";
import imgMe from "../assets/me.png";

export default function Hero() {
  return (
    <div id="home">
      <Card className="h-auto">
        <div className="border-b-2 border-primary/20 px-4 md:px-5 py-2 flex flex-col md:flex-row md:justify-between md:items-end">
          <div className="text-accent font-black text-[40px] md:text-[64px] mt-5 flex flex-col gap-0">
            <span>PRAPHASIRI</span>
            <span className="md:ml-30 -mt-3 md:-mt-5">SUKRAKSA</span>
          </div>
          <span className="text-primary text-xs md:text-sm">
            Open for opportunities
          </span>
        </div>

        <div className="grid md:grid-cols-3 md:flex-1 md:items-stretch">
          <div className="border-r border-primary/20"></div>
          <div className="md:border-r border-primary/20 overflow-hidden bg-[#1E1E1E]">
            <img
              src={imgMe}
              alt="praphasiri"
              className="w-full h-[480px] object-cover object-center grayscale-70 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="text-accent/80 text-sm leading-relaxed max-w-md p-4 md:pl-10 md:pr-5">
              Computer Science graduate with a passion for web development and
              system analysis. Experienced in building full-stack projects and
              eager to grow through continuous learning, problem-solving, and
              real-world experience.
            </p>
            <div className="flex md:justify-end p-2">
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full md:w-fit bg-secondary text-custom-bg font-bold uppercase text-xs px-6 py-3 cursor-pointer hover:bg-secondary/90 transition-colors active:scale-95"
              >
                CONTACT ME
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 px-5 py-4 text-primary flex justify-end md:justify-start text-xs md:text-sm">
          Open for opportunities
        </div>
      </Card>
    </div>
  );
}
