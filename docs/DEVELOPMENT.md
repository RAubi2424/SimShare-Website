# SimShare Pre-Launch Website - Development Guide

## Project Overview

This is a modern React pre-launch website for SimShare - a golf simulator sharing platform. The project is built with React 18, TypeScript, Vite, and Tailwind CSS v4.

## Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.3+
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS v4.1.3
- **UI Components**: shadcn/ui (Radix UI based)
- **Theme Management**: next-themes
- **Form Handling**: react-hook-form
- **Icons**: lucide-react

## Project Structure

```
Website/
├── .vscode/              # VS Code settings and extensions
├── docs/                 # Project documentation
├── public/               # Static assets
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components (shadcn/ui)
│   │   └── *.tsx       # Feature components
│   ├── contexts/        # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── imports/         # Figma imports and SVG assets
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and CSS
│   ├── App.tsx         # Main app component
│   └── main.tsx        # App entry point
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
├── .prettierrc         # Prettier configuration
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is formatted |
| `npm run type-check` | Run TypeScript type checking |

## Development Workflow

### 1. Before You Start

Make sure VS Code extensions are installed:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

### 2. Code Style

The project uses ESLint and Prettier for consistent code formatting:

- Code is automatically formatted on save
- ESLint runs on TypeScript/TSX files
- Prettier handles all formatting
- Run `npm run lint:fix` before committing

### 3. TypeScript

- Strict mode is enabled
- Use proper types for all components and functions
- Run `npm run type-check` to verify types

### 4. Component Development

#### Creating a New Component

```tsx
// src/components/MyComponent.tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
}

export const MyComponent: FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};
```

#### Creating a New Page

```tsx
// src/pages/MyPage.tsx
import { useTheme } from '../contexts/ThemeContext';

export function MyPage() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto p-8">
      {/* Page content */}
    </div>
  );
}
```

### 5. Styling with Tailwind CSS

- Use Tailwind utility classes
- Custom colors and design tokens are in `src/index.css`
- Use the `cn()` utility from `src/lib/utils.ts` for conditional classes

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  'more-classes'
)} />
```

### 6. Using shadcn/ui Components

The project includes 50+ pre-built UI components:

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

<Button variant="default" size="lg">
  Click Me
</Button>
```

## Theme System

The app supports light and dark modes using `next-themes`:

```tsx
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## Path Aliases

Use the `@` alias to import from `src`:

```tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/contexts/ThemeContext';
```

## Figma Integration

The project was generated from Figma and maintains connections to Figma assets:

- Figma design: [View Design](https://www.figma.com/design/52XU57k938CxJJOJxjfOXF/Pre-Launch-Website)
- Asset imports are in `src/imports/`
- Vite config handles Figma asset resolution

## Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use composition over prop drilling
   - Extract reusable logic into custom hooks

2. **State Management**
   - Use React Context for global state (theme, auth, etc.)
   - Use local state for component-specific data
   - Consider React Hook Form for complex forms

3. **Performance**
   - Lazy load pages and heavy components
   - Use memo for expensive computations
   - Optimize images (use WebP, proper sizing)

4. **Accessibility**
   - All shadcn/ui components are accessible by default
   - Use semantic HTML
   - Test with keyboard navigation
   - Ensure proper ARIA labels

5. **Git Workflow**
   - Write clear commit messages
   - Run `npm run lint:fix` before committing
   - Test the build with `npm run build`

## Troubleshooting

### TypeScript Errors

If you see TypeScript errors after pulling changes:
```bash
npm install
npm run type-check
```

### Build Fails

Clear cache and rebuild:
```bash
rm -rf node_modules build
npm install
npm run build
```

### ESLint/Prettier Conflicts

Run both tools in order:
```bash
npm run lint:fix
npm run format
```

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)

## Support

For questions or issues, please refer to the main README.md or contact the development team.