import { sections } from "../constants/constants";

interface SideNavProps {
  scrollToRef: (ref: React.RefObject<HTMLElement | null>) => void;
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  activeSection: string;
}

export const SideNav = ({
  scrollToRef,
  sectionRefs,
  activeSection,
}: SideNavProps) => {
  return (
    <div className="fixed right-0 top-0 w-1/5 h-screen glass border-l border-white/5 hidden items-center justify-center z-50 lg:flex">
      <div className="p-0 m-0">
        <ul className="list-none p-0 m-0 flex flex-col gap-8">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => scrollToRef(sectionRefs[section.id])}
              className={`text-lg font-medium cursor-pointer transition-all duration-300 relative tracking-wider hover:text-primary flex items-center gap-2 group ${activeSection === section.id ? "text-primary active-link" : "text-light/60"}`}
            >
              <span
                className={`w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-8 ${activeSection === section.id ? "w-8" : ""}`}
              ></span>
              {section.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
