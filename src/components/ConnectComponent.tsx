interface ConnectComponentProps {
  connectionRef: React.RefObject<HTMLElement | null>;
}

export const ConnectComponent = ({ connectionRef }: ConnectComponentProps) => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center relative px-[10%] snap-start snap-always"
      ref={connectionRef}
    >
      <h2 className="text-3xl lg:text-4xl mb-10 text-primary flex items-center gap-4 before:content-[''] before:w-12 before:h-[2px] before:bg-primary/50">
        Let's Connect
      </h2>
      <div className="flex gap-12 text-light p-0">
        <ul className="list-none p-0 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <li>
            <a
              href="https://www.linkedin.com/in/aranyasen62/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-4 transition-all duration-300 hover:text-primary hover:translate-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AranyaSen?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center gap-4 transition-all duration-300 hover:text-primary hover:translate-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
