# 
# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases a clean, professional design with smooth animations and interactive elements.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash````bash
   git clone <repository-url>
   cd portfolio
   ```bash````

2. Install dependencies:
   ```bash````bash
   npm install
   ```bash````

3. Start the development server:
   ```bash````bash
   npm run dev
   ```bash````

4. Open your browser and visit ```bashhttp://localhost:5173```

## 📦 Available Scripts

- ```bashnpm run dev``` - Start the development server
- ```bashnpm run build``` - Build the project for production
- ```bashnpm run preview``` - Preview the production build locally
- ```bashnpm run lint``` - Run ESLint to check for code issues

## 🛠️ Tech Stack

This portfolio is built using modern web technologies:

- **React 18** - UI library for building interactive user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server with HMR (Hot Module Replacement)
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Icons** - Popular icon library for React
- **Lottie React** - Library for rendering After Effects animations
- **Spline** - 3D design tool integration for interactive 3D elements
- **Typed.js** - JavaScript library for creating typewriter effects

## 📁 Project Structure

```bash````
src/
├── components/          # Reusable React components
│   ├── Contact.tsx     # Contact section component
│   ├── Hero.tsx        # Hero/landing section
│   ├── Navbar.tsx      # Navigation component
│   ├── ProjectCard.tsx # Individual project display
│   └── Timeline.tsx    # Experience timeline
├── data/
│   └── content.ts      # Site content and configuration
├── assets/             # Static assets (images, animations)
└── App.tsx            # Main application component
```bash````

## 🎨 Customization

To customize this portfolio for your own use:

1. Update the content in [```bashsrc/data/content.ts```](src/data/content.ts)
2. Replace images and animations in the [```bashsrc/assets/```](src/assets/) directory
3. Modify the styling in component files or update the Tailwind configuration in [```bashtailwind.config.js```](tailwind.config.js)

## 🔧 Development Setup

### Expanding the ESLint Configuration

If you're planning to extend this portfolio or develop it further for production use, you may want to enable more comprehensive ESLint rules. Here are some advanced configurations you can apply:

#### Type-Aware Lint Rules

For stricter TypeScript checking, update your ESLint configuration to enable type-aware rules. Create or update your ```basheslint.config.js``` file:

```bash````javascript
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```bash````

#### React-Specific Lint Rules

You can also install additional plugins for React-specific linting. First install the packages:

```bash````bash
npm install --save-dev eslint-plugin-react-x eslint-plugin-react-dom
```bash````

Then update your ```basheslint.config.js```:

```bash````javascript
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```bash````

## 📄 Configuration Files

- [```bashpackage.json```](package.json) - Project dependencies and scripts
- [```bashtsconfig.json```](tsconfig.json) - TypeScript configuration
- [```bashvite.config.ts```](vite.config.ts) - Vite build tool configuration
- [```bashtailwind.config.js```](tailwind.config.js) - Tailwind CSS configuration
- [```bashpostcss.config.js```](postcss.config.js) - PostCSS configuration

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
