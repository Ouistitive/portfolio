# My eportfolio

My new updated portfolio about my carreer, my projects, diploma and certifications, and many more!

## Project structure

This project uses the following structure:

- src/
    - assets/       # Images and static files
    - components/   # Reusable UI components
        - business  # Specific UI components for the portfolio
        - generics  # Generic components
        - sections  # Sub sections of the pages
    - hooks/        # Reusable logic (useTheme)
    - i18n/         # Internationalization configuration (french and english versions)
    - pages/        # Application pages (HomePage, AboutMePage)
    - styles/       # Global styles
    - main.tsx      # Application entry point

## Main features

- Dark / Light theme
- Internationalization (FR / EN)
- Component-based architecture
- Portfolio routing with React Router

## Commit checker and CI/CD

For each commit, husky hooks the commit to check if there are some issues (warning and errors) in the project. To fix it, there are a command, npm run format to format all updated files using BiomeJS.

## Available scripts

- `npm run dev`     # Start development server
- `npm run build`   # Build the project for production
- `npm run preview` # Preview production build locally
- `npm run format`  # Format code using Biome.JS

## How to run

To run this project, you need to install the dependencies:
```
npm install
```

And then, run in local
```
npm run dev
```
This will run the repo on http://localhost:5173/portfolio