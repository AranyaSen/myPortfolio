import { projects } from "../constants/constants";

interface ProjectsComponentProps {
  projectRef: React.RefObject<HTMLElement | null>;
}

export const ProjectsComponent = ({ projectRef }: ProjectsComponentProps) => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center relative px-[10%] snap-start snap-always"
      ref={projectRef}
    >
      <h2 className="text-3xl lg:text-4xl mb-10 text-primary flex items-center gap-4 before:content-[''] before:w-12 before:h-[2px] before:bg-primary/50">
        Featured Personal Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            className="bg-secondary rounded-3xl overflow-hidden border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:border-primary group"
            key={index}
          >
            <div className="p-6">
              <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-light/60 text-sm my-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  className="bg-white/5 text-primary text-lg px-2 py-1 rounded-md"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
