import { ABOUT_ME } from "../constants/constants";

interface AboutComponentProps {
  aboutRef: React.RefObject<HTMLElement | null>;
}

export const AboutComponent = ({ aboutRef }: AboutComponentProps) => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center relative px-[10%] snap-start snap-always"
      ref={aboutRef}
    >
      <h2 className="text-3xl lg:text-4xl mb-10 text-primary flex items-center gap-4 before:content-[''] before:w-12 before:h-[2px] before:bg-primary/50">
        About Me
      </h2>
      <div className="max-w-3xl">
        <h3 className="text-xl lg:text-3xl lg:leading-relaxed font-light text-light/90">
          {ABOUT_ME}
        </h3>
      </div>
    </section>
  );
};
