# TypeScript Hero Project

A simple TypeScript project with React and modern CSS featuring a beautiful hero section.

## Features

- ⚡ TypeScript with React
- 🎨 Modern CSS with animations
- 📱 Responsive design
- 🚀 Webpack build system
- 🔥 Hot reload development server

## Project Structure

```
src/
├── index.html          # HTML template
├── main.tsx           # React entry point
├── App.tsx            # Main App component
├── Hero.tsx           # Hero section component
└── styles.css         # Global styles
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start development server and open browser

## Hero Component

The `Hero.tsx` component is a reusable, customizable hero section with:

- Customizable title, subtitle, and description
- Two action buttons with click handlers
- Responsive design
- Smooth animations
- Modern gradient background

### Usage

```tsx
import Hero from './Hero';

<Hero
  title="Your Title"
  subtitle="Your Subtitle"
  description="Your description text"
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  onPrimaryClick={() => console.log('Primary clicked')}
  onSecondaryClick={() => console.log('Secondary clicked')}
/>
```

## Technologies Used

- TypeScript
- React 18
- Webpack 5
- CSS3 with modern features
- Inter font family
