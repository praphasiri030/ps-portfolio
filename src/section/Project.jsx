import SabaCathotel from "../components/SabaCathotel";
import Card from "../components/ui/Card";
import OtherProjects from "../components/OtherProjects";

export default function Project() {
  return (
    <div id="project">
      <Card>
        <div className="flex flex-col text-center overflow-hidden gap-5">
          <div className="p-5 border-b-2 border-primary/20">
            <h2 className="text-[40px] md:text-[64px] font-black text-accent uppercase">
              Project
            </h2>
          </div>
          <SabaCathotel />
          <OtherProjects />
        </div>
      </Card>
    </div>
  );
}
