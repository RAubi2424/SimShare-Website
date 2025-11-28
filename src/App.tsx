import { useState } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { SimShareHeader } from './components/SimShareHeader';
import { SimShareFooter } from './components/SimShareFooter';
import { WhatIsSimShare } from './components/WhatIsSimShare';
import { BecomeAHost } from './components/BecomeAHost';
import { HomePage } from './pages/HomePage';
import { WaitlistModal } from './components/WaitlistModal';

function SimShareApp() {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? '#191919' : '#FAFAFA';
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'waitlist') {
      setIsWaitlistModalOpen(true);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 20; // Reduced offset for better scroll positioning
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <SimShareHeader onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home">
          <HomePage onNavigate={scrollToSection} />
        </section>

        {/* What is SimShare Section */}
        <section id="what-is-simshare">
          <WhatIsSimShare />
        </section>

        {/* Become a Host Section */}
        <section id="become-a-host">
          <BecomeAHost onOpenWaitlist={() => setIsWaitlistModalOpen(true)} />
        </section>
      </main>

      <SimShareFooter />

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SimShareApp />
    </ThemeProvider>
  );
}