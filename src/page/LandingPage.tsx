import React, { useRef, useState, useEffect } from "react";
import myImage from "../assets/images/myImage.jpg";
import { projects, sections } from "../constants/constants";
import { IntroComponent } from "../components/IntroComponent";
import { AboutComponent } from "../components/AboutComponent";
import { SkillsComponent } from "../components/SkillsComponent";
import { ProjectsComponent } from "../components/ProjectsComponent";
import { ConnectComponent } from "../components/ConnectComponent";
import { useMobileNav } from "../hooks/useMobileNav";
import { SideNav } from "../components/SideNav";

const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  // REF DECLARATIONS
  const introRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const connectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    home: introRef,
    about: aboutRef,
    skills: skillRef,
    projects: projectRef,
    connect: connectionRef,
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key].current === entry.target,
          );
          if (sectionId) setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const { MobileNav, navVisible } = useMobileNav({
    scrollToRef,
    sectionRefs,
    activeSection,
  });

  return (
    <div
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-custom bg-dark text-light"
      ref={wrapperRef}
    >
      <MobileNav />
      <div
        className={`w-full lg:w-4/5 ${navVisible ? "opacity-10 blur-sm pointer-events-none" : "opacity-100"}`}
      >
        <IntroComponent
          introRef={introRef}
          onClick={() => scrollToRef(aboutRef)}
        />
        <AboutComponent aboutRef={aboutRef} />
        <SkillsComponent skillRef={skillRef} />
        <ProjectsComponent projectRef={projectRef} />
        <ConnectComponent connectionRef={connectionRef} />
      </div>

      <SideNav
        scrollToRef={scrollToRef}
        sectionRefs={sectionRefs}
        activeSection={activeSection}
      />
    </div>
  );
};

export default LandingPage;
