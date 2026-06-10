import Experience from "../section/Experience";
import Hero from "../section/Hero";
import Project from "../section/Project";
import Skill from "../section/Skill";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div  className="flex flex-col gap-5 md:gap-15">
        <Hero />
        <Skill />
        <Project />
        <Experience />
      </div>
      <Footer />
    </div>
  );
}
