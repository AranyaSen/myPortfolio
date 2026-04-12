# Aranya Sen | Software Engineer Portfolio

A modern, responsive, and performance-optimized portfolio website built with the standard React + TypeScript ecosystem. This project showcases my technical skills, personal projects, and professional background with a premium, state-of-the-art developer experience.

![Portfolio Preview](https://aranyasen.github.io/myPortfolio/)

## 🚀 Features

- **Responsive Design**: Mobile-first architecture with fluid transitions and vertical stacking for small screens.
- **Premium Aesthetics**: Sleek dark mode using a custom glassmorphism design system.
- **Dynamic Content**: Skills and projects are dynamically mapped from centralized constants for easy maintenance.
- **Modern Navigation**: Dual navigation system featuring a desktop sidebar and a responsive mobile overlay.
- **Smooth Interaction**: Integrated scroll-snapping and micro-animations using Tailwind CSS utility classes.
- **Iconography**: Unified icon system powered by `lucide-react`.

## 🛠️ Tech Stack

- **Core**: [React 19](https://reactjs.org/)
- **Language**: [TypeScript 6](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components (Intro, Skills, Projects, etc.)
├── constants/           # Centralized configuration and content (SKILLS, projects)
├── hooks/               # Custom React hooks for navigation and UI logic
├── page/                # Main layout and assembly (LandingPage)
├── types/               # TypeScript interfaces and type definitions
└── assets/              # Static images and global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AranyaSen/aranyasen.github.io.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

### Running Locally

To start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
