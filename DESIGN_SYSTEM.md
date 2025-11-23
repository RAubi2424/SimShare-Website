# SimShare Design System

**Version 1.0**
_Last Updated: January 2025_

This document defines the complete design system for SimShare, ensuring brand consistency across all digital products and platforms.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Animations & Transitions](#animations--transitions)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)

---

## Brand Identity

### Brand Name

**SimShare**

### Tagline

_"Your Swing, Your Schedule"_

### Brand Voice

- **Friendly**: Approachable and welcoming
- **Professional**: Trustworthy and reliable
- **Empowering**: Helps users monetize their assets
- **Community-Focused**: Bringing simulator and golf enthusiasts together

### Logo

- **Full Logo**: Icon + "SimShare" wordmark
- **Icon Only**: Golf simulator house icon (for small spaces)
- **Logo Colors**:
  - Primary: White on SimShare Green (#478547)
  - Secondary: SimShare Green on white/light backgrounds
  - Dark Mode: White on dark backgrounds

**Logo Sizes:**

- Large (Hero): 70px height
- Standard (Header): 55px height
- Small (Scrolled Header): 55px height
- Icon Only: 45px minimum

**Logo Clear Space:**

- Minimum padding around logo: 16px on all sides

---

## Color Palette

### Primary Colors

#### SimShare Green

```css
Primary: #478547
RGB: 71, 133, 71
HSL: 120°, 30%, 40%
```

**Usage:** Primary actions, header, brand identity, CTAs

#### SimShare Green Variants

```css
Light Hover: #5a9a5a (10% lighter)
Dark Hover: #3a6e3a (10% darker)
```

### Neutral Colors (Light Mode)

#### Backgrounds

```css
Primary Background: #f5f5f5 (hsl(0, 0%, 96%))
Secondary Background: #f2f2f2 (hsl(0, 0%, 95%))
Card Background: #FFFFFF
Gradient: linear-gradient(135deg, hsl(0, 0%, 95%) 0%, hsl(0, 0%, 92%) 100%)
```

#### Text Colors

```css
Primary Text: #191919 (near black)
Secondary Text: #666666
Tertiary Text: #888888
Muted Text: #B8B8B8
```

#### UI Elements

```css
Border: #E5E5E5
Border Light: rgba(0, 0, 0, 0.05)
Shadow: rgba(0, 0, 0, 0.1)
```

### Neutral Colors (Dark Mode)

#### Backgrounds

```css
Primary Background: hsl(0, 0%, 7%)
Secondary Background: hsl(0, 0%, 9%)
Card Background: hsl(0, 0%, 10%)
Gradient: linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(0, 0%, 7%) 100%)
```

#### Text Colors

```css
Primary Text: #FFFFFF
Secondary Text: #D0D0D0
Tertiary Text: #B8B8B8
Muted Text: #888888
```

#### UI Elements

```css
Border: rgba(255, 255, 255, 0.05)
Shadow: rgba(0, 0, 0, 0.5)
Input Background: hsl(0, 0%, 10%)
Input Border: hsl(0, 0%, 15%)
```

### Semantic Colors

#### Success

```css
Success Green: #22C55E
Success Light: rgba(34, 197, 94, 0.1)
```

#### Error

```css
Error Red: #EF4444
Error Light: rgba(239, 68, 68, 0.1)
```

#### Warning

```css
Warning Yellow: #F59E0B
Warning Light: rgba(245, 158, 11, 0.1)
```

#### Info

```css
Info Blue: #3B82F6
Info Light: rgba(59, 130, 246, 0.1)
```

### Gradients

#### Button Gradients

```css
/* Primary Button */
background: linear-gradient(135deg, #478547 0%, #5a9d5a 100%)

/* Green Accent Gradient (for decorative elements) */
background: linear-gradient(135deg, rgba(71, 133, 71, 0.3) 0%, rgba(90, 157, 90, 0.2) 100%)
```

#### Background Gradients - Light Mode

```css
/* Hero Section */
background: linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 0%, 95%) 50%, hsl(0, 0%, 100%) 100%)

/* Content Sections */
background: linear-gradient(180deg, hsl(0, 0%, 90%) 0%, hsl(0, 0%, 93%) 50%, hsl(0, 0%, 90%) 100%)

/* Cards */
background: linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(0, 0%, 92%) 100%)

/* Nested Cards */
background: linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 95%) 100%)

/* Footer */
background: linear-gradient(135deg, hsl(0, 0%, 95%) 0%, hsl(0, 0%, 92%) 100%)
```

#### Background Gradients - Dark Mode

```css
/* Hero Section */
background: linear-gradient(135deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 8%) 50%, hsl(0, 0%, 5%) 100%)

/* Content Sections */
background: linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 7%) 50%, hsl(0, 0%, 5%) 100%)

/* Cards */
background: linear-gradient(135deg, hsl(0, 0%, 10%) 0%, hsl(0, 0%, 8%) 100%)

/* Nested Cards */
background: linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 9%) 100%)

/* Footer */
background: linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(0, 0%, 7%) 100%)
```

#### Text Gradients

Used for hero titles to create visual interest.

```css
/* Light Mode Title */
background: linear-gradient(135deg, #191919 0%, #333333 100%)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
background-clip: text

/* Dark Mode Title */
background: linear-gradient(135deg, #FFFFFF 0%, #D0D0D0 100%)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
background-clip: text
```

#### Overlay Gradients

```css
/* Mobile Hero Image Overlay (Dark) */
background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)

/* Image Overlay - Light Mode */
background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, transparent 50%, rgba(71, 133, 71, 0.05) 100%)

/* Image Overlay - Dark Mode */
background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%, rgba(71, 133, 71, 0.1) 100%)
```

---

## Typography

### Font Family

```css
Primary Font: 'Poppins', sans-serif
Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

**Font Weights:**

- Regular: 400
- Medium: 500
- Semi-Bold: 600
- Bold: 700

### Type Scale

#### Headings

```css
H1 (Hero Title): 56px / 700 / 1.1 line-height
H2 (Section Title): 48px / 700 / 1.2 line-height
H3 (Subsection): 32px / 700 / 1.3 line-height
H4 (Card Title): 24px / 600 / 1.4 line-height
H5 (Small Title): 20px / 600 / 1.4 line-height
H6 (Label): 16px / 600 / 1.5 line-height
```

#### Body Text

```css
Body Large: 18px / 400 / 1.6 line-height
Body Regular: 16px / 400 / 1.6 line-height
Body Small: 14px / 400 / 1.5 line-height
Caption: 13px / 400 / 1.4 line-height
Fine Print: 12px / 400 / 1.3 line-height
```

#### Buttons

```css
Button Large: 18px / 700
Button Regular: 16px / 700
Button Small: 14px / 600
```

### Text Colors by Context

```css
/* Light Mode */
Heading: #191919
Body: #333333
Secondary: #666666
Muted: #888888

/* Dark Mode */
Heading: #FFFFFF
Body: #D0D0D0
Secondary: #B8B8B8
Muted: #888888
```

---

## Spacing & Layout

### Spacing Scale (8px base unit)

```css
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
5xl: 128px
```

### Container Widths

```css
Max Content Width: 1200px
Page Padding (Desktop): 48px
Page Padding (Mobile): 24px
```

### Grid System

```css
Gap Small: 16px
Gap Medium: 24px
Gap Large: 32px

/* Common Layouts */
Two Column: grid-template-columns: 1fr 1fr
Three Column: grid-template-columns: repeat(3, 1fr)
Responsive: grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
```

### Border Radius

```css
Small (Input): 8px
Medium (Card): 12px
Large (Button): 15px
XL (Modal): 20px
```

### Shadows

```css
/* Light Mode */
Small: 0 2px 8px rgba(0, 0, 0, 0.1)
Medium: 0 4px 20px rgba(0, 0, 0, 0.15)
Large: 0 25px 50px rgba(0, 0, 0, 0.1)

/* Dark Mode */
Small: 0 2px 8px rgba(0, 0, 0, 0.3)
Medium: 0 4px 20px rgba(0, 0, 0, 0.5)
Large: 0 25px 50px rgba(0, 0, 0, 0.5)

/* Hover States */
Button Hover: 0 4px 12px rgba(0, 0, 0, 0.2)
Card Hover: 0 8px 30px rgba(0, 0, 0, 0.15)
```

---

## Components

### Buttons

#### Primary Button (CTA)

```css
Background: #478547
Color: #FFFFFF
Padding: 16px 28px
Border Radius: 15px
Font Size: 16px
Font Weight: 700
Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.15)

/* Hover */
Transform: scale(1.05)
Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.2)

/* Disabled */
Opacity: 0.5
Cursor: not-allowed
```

#### Secondary Button

```css
Background: #f5f5f5 (light) / hsl(0, 0%, 15%) (dark)
Color: #478547 (light) / #FFFFFF (dark)
Padding: 12px 24px
Border Radius: 12px
Font Size: 16px
Font Weight: 600

/* Hover */
Transform: scale(1.02)
Opacity: 0.9
```

#### Text Button (Link Style)

```css
Background: transparent
Color: #478547
Font Size: 16px
Font Weight: 600
Text Decoration: none

/* Hover */
Text Decoration: underline
Opacity: 0.8
```

### Form Elements

#### Input Field

```css
Background: #FFFFFF (light) / hsl(0, 0%, 10%) (dark)
Border: 1px solid #E5E5E5 (light) / hsl(0, 0%, 15%) (dark)
Border Radius: 8px
Padding: 12px
Font Size: 14px
Font Family: Poppins
Color: #191919 (light) / #FFFFFF (dark)

/* Focus */
Border Color: #478547
Ring: 3px solid rgba(71, 133, 71, 0.2)
Outline: none

/* Error */
Border Color: #EF4444
Ring: 3px solid rgba(239, 68, 68, 0.2)

/* Disabled */
Opacity: 0.5
Cursor: not-allowed
```

#### Label

```css
Font Size: 14px
Font Weight: 500
Color: #191919 (light) / #FFFFFF (dark)
Margin Bottom: 8px
Display: block
```

#### Select Dropdown

```css
/* Same as input + */
Appearance: none
Background Image: Custom dropdown arrow SVG
Background Position: right 12px center
Padding Right: 40px
```

#### Error Message

```css
Color: #EF4444
Font Size: 14px
Margin Top: 4px
Font Family: Poppins
```

### Cards

#### Standard Card

```css
Background: #FFFFFF (light) / hsl(0, 0%, 10%) (dark)
Border Radius: 12px
Padding: 32px
Box Shadow: 0 4px 20px rgba(0, 0, 0, 0.15) (light)
Box Shadow: 0 4px 20px rgba(0, 0, 0, 0.5) (dark)
Border: 1px solid rgba(0, 0, 0, 0.05) (light)
Border: 1px solid rgba(255, 255, 255, 0.05) (dark)

/* Hover (if interactive) */
Transform: translateY(-4px)
Box Shadow: 0 8px 30px rgba(0, 0, 0, 0.2)
```

### Modal

#### Modal Overlay (Backdrop)

```css
Background: rgba(0, 0, 0, 0.7)
Backdrop Filter: blur(4px)
Position: fixed
Inset: 0
Z-Index: 9998
```

#### Modal Container

```css
Background: hsl(0, 0%, 5%) (dark) / hsl(0, 0%, 95%) (light)
Border Radius: 20px
Padding: 40px
Max Width: 600px
Width: 90%
Max Height: 90vh
Overflow Y: auto
Box Shadow: 0 25px 50px rgba(0, 0, 0, 0.5)
Position: fixed
Top: 50%
Left: 50%
Transform: translate(-50%, -50%)
Z-Index: 9999
```

#### Modal Close Button

```css
Position: absolute
Top: 20px
Right: 20px
Background: transparent
Border: none
Cursor: pointer
Padding: 8px

/* Icon */
Size: 24px
Color: #191919 (light) / #FFFFFF (dark)

/* Hover */
Opacity: 0.7
```

### Header

#### Fixed Header

```css
Position: fixed
Top: 0
Left: 0
Right: 0
Z-Index: 1000
Background: #478547
Padding: 20px 48px (normal) / 12px 48px (scrolled)
Display: flex
Align Items: center
Justify Content: space-between
Border Bottom Left Radius: 16px
Border Bottom Right Radius: 16px
Box Shadow: 0 4px 20px rgba(0, 0, 0, 0.15)
Transition: all 0.3s ease
```

#### Navigation Links

```css
Font Size: 16px
Font Weight: 600
Color: #FFFFFF
Opacity: 0.8 (normal) / 1 (active/hover)
Transition: opacity 0.2s ease
Padding: 8px 0
Position: relative

/* Active Underline */
Position: absolute
Bottom: 0
Left: 0
Right: 0
Height: 2px
Background: #FFFFFF
```

#### Navigation Gap

```css
gap: 32px;
```

#### Mobile Menu

Appears on mobile and tablet devices (< 768px) when hamburger icon is clicked.

```css
/* Mobile Menu Container */
Position: fixed
Top: 70px (below header)
Left: 0
Right: 0
Background: #478547
Z-Index: 999
Border Bottom Left Radius: 16px
Border Bottom Right Radius: 16px
Box Shadow: 0 4px 20px rgba(0, 0, 0, 0.15)
Padding: 16px

/* Mobile Menu Nav */
Display: flex
Flex Direction: column
Gap: 16px

/* Mobile Menu Items */
Background: transparent
Border: none
Color: #FFFFFF
Font Size: 16px
Font Weight: 600
Padding: 12px 16px
Border Radius: 8px
Transition: background 0.2s ease

/* Active/Hover State */
Background: rgba(255, 255, 255, 0.1)

/* Hamburger Icon */
Display: block (< 768px) / none (≥ 768px)
Size: 24px
Color: #FFFFFF
```

### Footer

#### Footer Container

```css
Background: linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(0, 0%, 7%) 100%) (dark)
Background: linear-gradient(135deg, hsl(0, 0%, 95%) 0%, hsl(0, 0%, 92%) 100%) (light)
Padding: 32px 48px
Display: flex
Align Items: center
Justify Content: space-between
Border Top Left Radius: 16px
Border Top Right Radius: 16px
Box Shadow: 0 -20px 60px rgba(0, 0, 0, 0.5) (dark)
Box Shadow: 0 -20px 60px rgba(0, 0, 0, 0.1) (light)
Border: 1px solid rgba(255, 255, 255, 0.05) (dark)
Border: 1px solid rgba(0, 0, 0, 0.05) (light)
Border Bottom: none
```

#### Social Media Icons

```css
Width: 24px
Height: 24px
Color: #D0D0D0 (dark) / #333333 (light)
Transition: all 0.2s ease
Gap: 20px

/* Hover */
Transform: scale(1.1)
Opacity: 1
```

### Status Messages

#### Success Message

```css
Display: flex
Align Items: center
Gap: 12px
Padding: 16px
Border Radius: 12px
Background: rgba(34, 197, 94, 0.1)
Color: #22C55E
Font Size: 14px
Font Family: Poppins

/* Icon */
Size: 20px
```

#### Error Message

```css
Display: flex
Align Items: center
Gap: 12px
Padding: 16px
Border Radius: 12px
Background: rgba(239, 68, 68, 0.1)
Color: #EF4444
Font Size: 14px
Font Family: Poppins

/* Icon */
Size: 20px
```

### Loading States

#### Spinner

```css
/* Use lucide-react Loader2 icon */
Animation: spin 1s linear infinite
Color: #478547

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

#### Button Loading State

```css
Opacity: 0.7
Cursor: wait

/* Text */
Display: flex
Align Items: center
Gap: 8px

/* Spinner */
Width: 20px
Height: 20px
```

### Decorative Elements

#### Gradient Orbs (Background)

Used for ambient background decoration on desktop hero sections. These create a subtle, modern glow effect.

```css
/* Large Orb (Top Right) */
Position: absolute
Top: -10%
Right: -5%
Width: 300px (mobile) / 600px (desktop)
Height: 300px (mobile) / 600px (desktop)
Background: radial-gradient(circle, rgba(71, 133, 71, 0.15) 0%, transparent 70%)
Border Radius: 50%
Filter: blur(60px)
Pointer Events: none

/* Small Orb (Bottom Left) */
Position: absolute
Bottom: -15%
Left: -10%
Width: 350px (mobile) / 700px (desktop)
Height: 350px (mobile) / 700px (desktop)
Background: radial-gradient(circle, rgba(71, 133, 71, 0.1) 0%, transparent 70%)
Border Radius: 50%
Filter: blur(80px)
Pointer Events: none
```

**Usage Notes:**
- Only visible on desktop when background is a gradient (not when using background images)
- Creates subtle brand-colored ambient lighting
- Must have `pointer-events: none` to not interfere with interactions

---

## Animations & Transitions

### Standard Transitions

```css
/* Default */
transition: all 0.2s ease

/* Smooth */
transition: all 0.3s ease

/* Quick */
transition: all 0.15s ease
```

### Common Animations

#### Hover Scale (Small)

```css
transform: scale(1.02)
transition: transform 0.2s ease
```

#### Hover Scale (Medium)

```css
transform: scale(1.05)
transition: transform 0.2s ease
```

#### Hover Lift

```css
transform: translateY(-4px)
transition: all 0.3s ease
```

#### Fade In

```css
animation: fadeIn 0.3s ease-in-out

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

#### Slide In from Bottom

```css
animation: slideInUp 0.4s ease-out

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Pulse (for loading/emphasis)

```css
animation: pulse 2s ease-in-out infinite

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  /* sm */
}

/* Tablet */
@media (max-width: 768px) {
  /* md */
}

/* Desktop */
@media (max-width: 1024px) {
  /* lg */
}

/* Large Desktop */
@media (max-width: 1280px) {
  /* xl */
}
```

### Responsive Typography

```css
/* Mobile Adjustments */
@media (max-width: 768px) {
  H1: 40px
  H2: 36px
  H3: 28px
  Body: 14px

  /* Padding */
  Page Padding: 24px
  Card Padding: 24px

  /* Header */
  Header Padding: 16px 24px
}
```

### Responsive Layout Patterns

```css
/* Stack on Mobile */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
  flex-direction: column;
  gap: 16px;
}

/* Two Column on Tablet+ */
@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* Three Column on Desktop+ */
@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
```

---

## Accessibility

### WCAG Compliance

Target: **WCAG 2.1 Level AA**

### Color Contrast Ratios

```css
/* Minimum Ratios */
Large Text (18px+): 3:1
Normal Text (16px): 4.5:1
UI Components: 3:1

/* SimShare Green (#478547) on White */
Ratio: 4.8:1 ✓ (passes AA)

/* White on SimShare Green */
Ratio: 4.8:1 ✓ (passes AA)
```

### Focus States

```css
/* All Interactive Elements */
outline: 2px solid #478547
outline-offset: 2px
border-radius: 4px

/* Alternative (for buttons) */
box-shadow: 0 0 0 3px rgba(71, 133, 71, 0.3)
```

### Interactive Element Sizes

```css
/* Minimum Touch Target */
Minimum Width: 44px
Minimum Height: 44px
Padding: adequate for 44x44px minimum
```

### Screen Reader Support

```html
<!-- Always use semantic HTML -->
<button aria-label="Close modal">...</button>
<nav aria-label="Main navigation">...</nav>
<img alt="Descriptive text" />

<!-- Loading states -->
<button aria-busy="true" aria-live="polite">
  <span aria-hidden="true">Loading...</span>
</button>
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus order must be logical
- Escape key should close modals
- Tab order should follow visual flow
- Enter/Space should activate buttons

---

## Theme Toggle

### Toggle Button

```css
Width: 40px
Height: 40px
Border Radius: 50%
Background: rgba(255, 255, 255, 0.2) (dark) / rgba(0, 0, 0, 0.05) (light)
Border: 1px solid rgba(255, 255, 255, 0.1) (dark)
Cursor: pointer
Display: flex
Align Items: center
Justify Content: center
Transition: all 0.2s ease

/* Icon */
Size: 20px
Color: #FFFFFF (dark) / #191919 (light)

/* Hover */
Background: rgba(255, 255, 255, 0.25) (dark)
Transform: scale(1.05)
```

---

## Usage Examples

### Example: Primary CTA Button

```tsx
<button
  style={{
    backgroundColor: '#478547',
    color: '#FFFFFF',
    padding: '16px 28px',
    borderRadius: '15px',
    fontSize: '16px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.2s ease',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
  }}
>
  Join Waitlist
</button>
```

### Example: Input Field

```tsx
<input
  type="text"
  style={{
    backgroundColor: isDark ? 'hsl(0, 0%, 10%)' : '#FFFFFF',
    border: `1px solid ${isDark ? 'hsl(0, 0%, 15%)' : '#E5E5E5'}`,
    borderRadius: '8px',
    padding: '12px',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    color: isDark ? '#FFFFFF' : '#191919',
    width: '100%',
    outline: 'none',
  }}
  onFocus={e => {
    e.currentTarget.style.borderColor = '#478547';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(71, 133, 71, 0.2)';
  }}
/>
```

### Example: Card Component

```tsx
<div
  style={{
    backgroundColor: isDark ? 'hsl(0, 0%, 10%)' : '#FFFFFF',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: isDark
      ? '0 4px 20px rgba(0, 0, 0, 0.5)'
      : '0 4px 20px rgba(0, 0, 0, 0.15)',
    border: isDark
      ? '1px solid rgba(255, 255, 255, 0.05)'
      : '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  }}
>
  {/* Card content */}
</div>
```

---

## Brand Assets Checklist

When creating new SimShare materials, ensure you have:

- [ ] SimShare logo (SVG format)
- [ ] Primary brand color (#478547)
- [ ] Poppins font loaded
- [ ] Proper spacing scale (8px base)
- [ ] Dark/light theme support
- [ ] Responsive breakpoints implemented
- [ ] Accessibility standards met (WCAG AA)
- [ ] Consistent border radius (8-20px range)
- [ ] Proper hover states on interactive elements
- [ ] Loading states for async actions
- [ ] Error/success message styling
- [ ] Focus states for keyboard navigation

---

## Design Tools

### Recommended Color Formats

- **CSS**: Hex (#478547) or HSL (hsl(120, 30%, 40%))
- **Design Tools**: RGB (71, 133, 71)
- **Opacity**: Use rgba() or hsla()

### Font Loading

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Icon Library

**Lucide React** (https://lucide.dev)

- Consistent style
- Tree-shakeable
- Customizable size and color

---

## Development Patterns

### Custom Hooks

#### useResponsive Hook

Used for detecting screen width and applying responsive behavior in React components.

**Location:** `src/hooks/useResponsive.ts`

**Usage:**

```typescript
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

function MyComponent() {
  const { screenWidth } = useResponsive();

  // Check device type
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isDesktop = screenWidth >= 1024;
  const isMobileOrTablet = screenWidth < 1024;

  // Get responsive values
  const fontSize = getResponsiveValue('14px', '16px', '18px', screenWidth);

  return (
    <div style={{ fontSize }}>
      {isMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

**Helper Function:**

```typescript
getResponsiveValue(
  mobileValue,    // < 768px
  tabletValue,    // 768px - 1023px
  desktopValue,   // ≥ 1024px
  screenWidth
)
```

#### useTheme Hook

Used for accessing and toggling the current theme (light/dark).

**Location:** `src/contexts/ThemeContext.tsx`

**Usage:**

```typescript
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        background: isDark ? 'hsl(0, 0%, 10%)' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#191919',
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Responsive Patterns

#### Mobile-First Approach

Always start with mobile styles, then enhance for larger screens using CSS classes.

```css
/* Base mobile styles */
.component {
  padding: 16px;
  font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    padding: 24px;
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    padding: 32px;
    font-size: 18px;
  }
}
```

#### Conditional Background Images

Use JavaScript to conditionally apply background images based on screen size.

```typescript
const isMobileOrTablet = screenWidth < 1024;

<div
  style={{
    background: isMobileOrTablet
      ? `linear-gradient(...), url(${image}) center/cover no-repeat`
      : 'linear-gradient(...)',
  }}
/>
```

### Component Patterns

#### Theme-Aware Styling

Always provide both light and dark theme values.

```typescript
const isDark = theme === 'dark';

<div
  style={{
    background: isDark
      ? 'linear-gradient(135deg, hsl(0, 0%, 10%) 0%, hsl(0, 0%, 8%) 100%)'
      : 'linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(0, 0%, 92%) 100%)',
    color: isDark ? '#FFFFFF' : '#191919',
    border: isDark
      ? '1px solid rgba(255, 255, 255, 0.05)'
      : '1px solid rgba(0, 0, 0, 0.05)',
  }}
/>
```

#### Hover State Pattern

Use inline event handlers for interactive hover effects.

```typescript
<button
  style={{
    transition: 'all 0.2s ease',
    transform: 'scale(1)',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'scale(1)';
  }}
>
  Hover Me
</button>
```

---

## Version History

**v1.0** - January 2025

- Initial design system documentation
- Based on SimShare pre-launch website
- Includes light/dark theme specifications
- Complete component library
- Accessibility guidelines

---

## Maintenance Notes

### When Adding New Components:

1. Follow the existing color palette
2. Use the 8px spacing scale
3. Maintain consistent border radius values
4. Implement both light and dark themes
5. Add hover states with standard transitions
6. Ensure WCAG AA compliance
7. Test keyboard navigation
8. Document in this design system

### When Updating:

1. Update version number
2. Document changes in version history
3. Update all affected components
4. Test across light/dark themes
5. Verify responsive behavior
6. Check accessibility compliance

---

**For questions or suggestions about this design system, contact the SimShare development team.**
