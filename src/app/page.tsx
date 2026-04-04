import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] font-sans selection:bg-purple-600/30 selection:text-white">
      {/* 
        The Scrollytelling Section
        h-[500vh] provides the scrolling distance needed to scrub through 
        the 90-frame image sequence.
      */}
      <section id="home" className="relative h-[500vh]">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* The Projects Section */}
      <Projects />

      {/* The Tech Stack Section */}
      <TechStack />

      {/* The Process Section */}
      <Process />

      {/* The Contact Form Section */}
      <ContactForm />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Shivam Khade. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
