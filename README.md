# SimShare Pre-Launch Website

A modern, responsive pre-launch website for SimShare - a golf simulator sharing platform that connects golf enthusiasts with premium simulator facilities.

## Overview

This project showcases SimShare's value proposition and allows potential users to join the waitlist. Built with modern web technologies for optimal performance and developer experience.

**Figma Design**: [View Original Design](https://www.figma.com/design/52XU57k938CxJJOJxjfOXF/Pre-Launch-Website)

## Features

- Modern, responsive design optimized for all devices
- Dark/Light theme support with persistent preferences
- Smooth page transitions and animations
- Image slideshow with 4-second intervals
- Waitlist signup functionality
- SEO-friendly structure
- Accessible UI components (WCAG compliant)
- Fast performance with Vite build tool

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **next-themes** - Theme management

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload on port 3000 |
| `npm run build` | Type-check and create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code for linting errors |
| `npm run lint:fix` | Automatically fix linting errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Verify code formatting |
| `npm run type-check` | Run TypeScript type checking without build |

## Project Structure

```
Website/
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   └── ...         # Feature components
│   ├── contexts/        # React Context providers (Theme, etc.)
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── assets/         # Images and media
│   └── styles/         # Global styles
├── docs/               # Documentation
├── public/             # Static files
└── ...config files
```

## Development

For detailed development guidelines, see [DEVELOPMENT.md](docs/DEVELOPMENT.md)

### Key Points

- Code formatting happens automatically on save (Prettier + ESLint)
- TypeScript strict mode is enabled for type safety
- Use `@` alias for imports: `import { Button } from '@/components/ui/button'`
- All UI components support dark mode automatically

### VS Code Extensions (Recommended)

The project includes recommended extensions. VS Code will prompt you to install them:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- React/TypeScript snippets

## Pages

- **Home** - Hero section with image slideshow and CTA
- **What is SimShare** - Platform overview and benefits
- **Become a Host** - Information for simulator owners

## Components

The project includes 50+ pre-built UI components from shadcn/ui:
- Forms (Input, Select, Checkbox, etc.)
- Layout (Card, Tabs, Accordion, etc.)
- Navigation (Menu, Breadcrumb, etc.)
- Feedback (Alert, Toast, Dialog, etc.)

All components are fully typed, accessible, and themeable.

## Styling

- **Tailwind CSS v4** with custom design tokens
- Color scheme optimized for both light and dark modes
- Responsive design with mobile-first approach
- Custom fonts: Poppins and Nunito

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Private - All rights reserved

## Contact

For questions or support, please contact the SimShare development team.
  