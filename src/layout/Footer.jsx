import Card from "../components/ui/Card";

export default function Footer() {

  const marqueeText = Array(8).fill("Get In Touch");

  return (
    <div id="contact"className="py-5 md:py-10">
      <Card>

        <div className="relative w-full py-6 border-b-2 border-primary/20 bg-[#0f0f11] overflow-hidden select-none">

          <div className="flex w-max gap-8 animate-marquee whitespace-nowrap">
            {marqueeText.map((text, index) => (
              <div key={index} className="flex items-center gap-8 text-[40px] md:text-[56px] font-black text-white uppercase">
                <span>{text}</span>
                <span className="w-3 h-3 rounded-full bg-secondary inline-block shrink-0"></span>
              </div>
            ))}

            {marqueeText.map((text, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-8 text-[40px] md:text-[56px] font-black text-white uppercase">
                <span>{text}</span>
                <span className="w-3 h-3 rounded-full bg-secondary inline-block shrink-0"></span>
              </div>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[250px]">
          
          <div className="p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary/20 col-span-2">
            <h1 className="text-[40px] md:text-[64px] font-black text-white uppercase leading-none tracking-tight">
              Praphasiri
            </h1>
            <h1 className="text-[40px] md:text-[64px] font-black text-white uppercase leading-none tracking-tight md:ml-30">
              Sukraksa
            </h1>
            <a 
              href="https://github.com/praphasiri030" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary/60 text-sm mt-6 hover:text-secondary transition-colors duration-300 w-fit"
            >
              github.com/praphasiri030
            </a>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-end items-end text-right gap-1 bg-[#131316]/30">
            <span className="text-xs font-bold text-white tracking-widest uppercase mb-2">CONTACT</span>
            <a href="tel:+66998835443" className="text-base text-accent/80 hover:text-secondary transition-colors">
              +66 99-883-5443
            </a>
            <a href="mailto:praphasiri.s28@gmail.com" className="text-base text-accent/80 hover:text-secondary transition-colors">
              praphasiri.s28@gmail.com
            </a>
          </div>

        </div>
      </Card>
    </div>
  );
}