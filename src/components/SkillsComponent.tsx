import { SKILLS } from "../constants/constants";

interface SkillsComponentProps {
  skillRef: React.RefObject<HTMLElement | null>;
}

export const SkillsComponent = ({ skillRef }: SkillsComponentProps) => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center relative px-[10%] py-20 lg:py-0 snap-start snap-always"
      ref={skillRef}
    >
      <h2 className="text-3xl lg:text-4xl mb-10 text-primary flex items-center gap-4 before:content-[''] before:w-12 before:h-[2px] before:bg-primary/50">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {SKILLS.map((category, index) => (
          <div
            key={index}
            className="bg-secondary p-6 lg:p-8 rounded-3xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-6 h-6 text-primary" />
              <span className="block text-xl font-semibold text-primary">
                {category.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {category.skills.map((skill, id) => (
                <span
                  key={id}
                  className="bg-primary/5 text-light px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm border border-white/10 transition-all duration-300 hover:bg-primary hover:text-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
