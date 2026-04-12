import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { sections } from "../constants/constants";

interface UseMobileNavProps {
  scrollToRef: (ref: React.RefObject<HTMLElement | null>) => void;
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  activeSection: string;
}

export const useMobileNav = ({
  scrollToRef,
  sectionRefs,
  activeSection,
}: UseMobileNavProps) => {
  const [navVisible, setNavVisible] = useState<boolean>(false);

  const handleMenu = () => {
    setNavVisible((prev) => !prev);
  };

  const MobileNav = () => (
    <>
      <div
        className="fixed z-[100] top-6 right-6 p-2 rounded-full glass cursor-pointer transition-all duration-300 hover:bg-primary/10 hover:rotate-90 lg:hidden block text-primary"
        onClick={handleMenu}
      >
        {navVisible ? <X size={32} /> : <Menu size={32} />}
      </div>

      {navVisible && (
        <div className="fixed inset-0 bg-transparent flex flex-col justify-center items-center z-[150] animate-in slide-in-from-top duration-400">
          <ul className="list-none p-0 text-center">
            {sections.map((section) => (
              <li
                key={section.id}
                onClick={() => {
                  scrollToRef(sectionRefs[section.id]);
                  setNavVisible(false);
                }}
                className={`text-3xl my-6 cursor-pointer transition-colors ${activeSection === section.id ? "text-primary font-bold" : "text-light/60"}`}
              >
                {section.label}
              </li>
            ))}
          </ul>
          <button
            className="absolute top-6 right-6 text-primary p-2"
            onClick={handleMenu}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </>
  );

  return { MobileNav, navVisible };
};
