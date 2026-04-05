import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-purple-600/30 selection:text-white">
      {/* 
        The Scrollytelling Section
        h-[500vh] provides the scrolling distance needed to scrub through 
        the 90-frame image sequence.
      */}
      <section id="home" className="relative h-[500vh]">
        <ScrollyCanvas />
        <Overlay />
      </section>

      <div className="content-reveal">
        {/* The Projects Section */}
        <Projects />

        {/* The Tech Stack Section */}
        <TechStack />

        {/* The Process Section */}
        <Process />

        {/* The Contact Form Section */}
        <ContactForm />
        
        <Footer />
      </div>
    </main>
  );
}
