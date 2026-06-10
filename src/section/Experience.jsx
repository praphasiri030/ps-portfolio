import { useEffect, useState, useRef } from "react";
import Card from "../components/ui/Card";

export default function Experience() {
  const timelineData = [
    {
      id: "edu",
      type: "EDUCATION",
      title: "Bachelor of Science in Computer Science",
      subtitle: "Kasetsart University",
      detail: "Graduated in 2025",
      side: "left",
      topPercent: 15,
    },
    {
      id: "exp1",
      type: "EXPERIENCE",
      title: "WordPress Developer (Internship → Full-time)",
      subtitle: "Keng Web (Keng Web Partnership Limited)",
      detail: (
        <ul className="list-disc pl-4 space-y-1 text-accent/60">
          <li>
            Developed and customized websites using WordPress based on client
            requirements, utilizing Elementor Pro, ACF, and WPCode.
          </li>
          <li>
            Analyzed requirements from task descriptions and client feedback via
            Trello to plan and implement website development.
          </li>
          <li>
            Collaborated and revised work based on review cycles to ensure
            delivery within the defined scope.
          </li>
          <li>
            Created user manuals and documentation for website handover to
            clients.
          </li>
          <li>
            Performed On-Page SEO optimization using Yoast SEO and learned
            website structure principles to support search engine performance.
          </li>
        </ul>
      ),
      date: "Jun 2025 – Jan 2026",
      side: "right",
      topPercent: 37,
    },
  ];

  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // ใช้จุดกึ่งกลางหน้าจอเป็นตัวตัดเส้นไหล
      const triggerPoint = windowHeight / 2;
      const containerTop = rect.top;
      const containerHeight = rect.height;

      // คำนวณความสูงที่เลื่อนผ่านช่วงพื้นที่ Timeline ออกมาเป็นเปอร์เซ็นต์
      let filled = triggerPoint - containerTop;
      if (filled < 0) filled = 0;
      if (filled > containerHeight) filled = containerHeight;

      setLineHeight((filled / containerHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="experience" className="py-10">
      <Card>
        <div className="p-5 border-b-2 border-primary/20">
          <h2 className="text-[40px] md:text-[64px] font-black text-accent uppercase text-center">
            Experience
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-5xl mx-auto px-6 py-24"
        >
          {/* เส้นสีเทาพื้นหลัง */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2 z-0" />

          {/* เส้นสีเหลืองไหลตามสกรอลล์*/}
          <div
            style={{ height: `${lineHeight}%` }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-secondary md:-translate-x-1/2 z-0 pointer-events-none"
          />

          <div className="space-y-30 relative z-10">
            {timelineData.map((item) => {
              const isPassed = lineHeight >= item.topPercent;

              return (
                <div key={item.id} className="relative md:grid md:grid-cols-2">
                  <div className="md:hidden pl-4 md:pl-10">
                    <div className="mb-2">
                      <span className="text-sm font-bold text-white tracking-widest">
                        {item.type}
                      </span>

                      <h4 className="text-base font-medium text-accent">
                        {item.title}
                      </h4>

                      <p className="text-xs text-primary italic">
                        {item.subtitle}
                      </p>

                      {item.date && (
                        <p className="text-xs text-primary mt-1">{item.date}</p>
                      )}
                    </div>

                    {item.detail && (
                      <div className="text-sm leading-relaxed text-accent/80">
                        {item.detail}
                      </div>
                    )}
                  </div>

                  <div
                    className={`hidden md:block text-right pr-12 ${
                      item.side === "left" ? "" : ""
                    }`}
                  >
                    {item.side === "left" ? (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-white tracking-widest">
                          {item.type}
                        </span>

                        <h4 className="text-base font-medium text-accent">
                          {item.title}
                        </h4>

                        <p className="text-xs text-primary italic">
                          {item.subtitle}
                        </p>
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-primary tracking-wider">
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* DOT */}
                  <div className="absolute -left-1.75 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center w-8 h-8">
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-colors duration-200
                        ${
                          isPassed
                            ? "bg-secondary border-secondary"
                            : "bg-custom-bg border-primary/40"
                        }`}
                    />
                  </div>

                  <div className="hidden md:block text-left pl-12">
                    {item.side === "right" ? (
                      <div className="flex flex-col gap-2 max-w-lg">
                        <div>
                          <span className="text-sm font-bold text-white tracking-widest">
                            {item.type}
                          </span>

                          <h4 className="text-base font-medium text-accent">
                            {item.title}
                          </h4>

                          <p className="text-xs text-primary italic mb-2">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="text-sm leading-relaxed text-accent/80">
                          {item.detail}
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-primary tracking-wider">
                        {item.detail}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
