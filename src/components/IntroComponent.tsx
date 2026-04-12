import { ChevronDown } from "lucide-react";
import myImage from "../assets/images/myImage.jpg";
import { TITLE } from "../constants/constants";

interface IntroComponentProps {
  introRef: React.RefObject<HTMLElement | null>;
  onClick: () => void;
}

export const IntroComponent = ({ introRef, onClick }: IntroComponentProps) => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center relative px-[10%] snap-start snap-always bg-[radial-gradient(circle_at_center,rgba(121,255,255,0.05)_0%,transparent_70%)]"
      ref={introRef}
    >
      <div className="flex flex-col lg:flex-row items-center gap-16 animate-fade-in">
        <div className="relative after:content-[''] after:absolute after:-inset-3 after:border-2 after:border-primary after:rounded-full after:opacity-30 after:animate-pulse-slow">
          <img
            className="w-40 h-40 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-secondary shadow-2xl"
            src={myImage}
            alt="Aranya Sen"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold m-0 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent leading-tight">
            Aranya Sen
          </h1>
          <span className="text-xl lg:text-2xl text-primary font-normal mt-2 block">
            {TITLE}
          </span>
          <div className="mt-12 flex flex-col items-center lg:items-start gap-4 text-light/50 text-xs uppercase tracking-[2px]">
            <span>Explore my work</span>
            <ChevronDown
              size={32}
              className="text-primary cursor-pointer hover:translate-y-2 transition-transform"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
