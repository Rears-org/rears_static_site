import Banner from "@/components/Banner";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Improve from "@/components/Improve";
import Navbar from "@/components/Navabar";
import Projects from "@/components/Projects";
import ProjectsIcons from "@/components/ProjectsIcons";
import Workflow from "@/components/Workflow";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 sm:pt-16 px-4 sm:px-4 md:px-20">
        <section className="banner-section sm:mt-10 md:mt-30">
          <Banner />
        </section>
        <section className="demo-section sm:mt-10 md:mt-10 lg:mt-64">
          <Demo />
        </section>
        <section className="project-section sm:mt-10">
        <Projects />
        </section>
        <section className="project-icons-section sm:mt-10">
        <ProjectsIcons />
        </section>
        <section className="workflow-section sm:mt-10">
        <Workflow />
        </section>
        <section className="improve-section sm:mt-10">
        <Improve />
        </section>
      </main>
      <Footer />
    </div>  
  );
}
