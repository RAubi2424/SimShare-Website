import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface SimShareHeaderProps {
  onNavigate: (sectionId: string) => void;
}

export function SimShareHeader({ onNavigate }: SimShareHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        'home',
        'what-is-simshare',
        'become-a-host',
        'waitlist',
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`responsive-header ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: '#478547',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="/New Logo.png"
            alt="SimShare Logo"
            style={{
              height: isScrolled ? '60px' : '70px',
              width: 'auto',
              display: 'block',
            }}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="responsive-nav">
          <button
            onClick={() => onNavigate('what-is-simshare')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
              opacity: activeSection === 'what-is-simshare' ? 1 : 0.8,
              transition: 'opacity 0.2s ease',
              position: 'relative',
              padding: '8px 0',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e =>
              (e.currentTarget.style.opacity =
                activeSection === 'what-is-simshare' ? '1' : '0.8')
            }
          >
            What is SimShare?
            {activeSection === 'what-is-simshare' && (
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#FFFFFF',
                }}
              />
            )}
          </button>

          <button
            onClick={() => onNavigate('become-a-host')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
              opacity: activeSection === 'become-a-host' ? 1 : 0.8,
              transition: 'opacity 0.2s ease',
              position: 'relative',
              padding: '8px 0',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e =>
              (e.currentTarget.style.opacity =
                activeSection === 'become-a-host' ? '1' : '0.8')
            }
          >
            Become a Host
            {activeSection === 'become-a-host' && (
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#FFFFFF',
                }}
              />
            )}
          </button>

          <button
            onClick={() => onNavigate('waitlist')}
            style={{
              backgroundColor: '#f5f5f5ff',
              color: '#478547',
              fontSize: '16px',
              fontWeight: '700',
              padding: '12px 28px',
              borderRadius: '15px',
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
            Get First Access
          </button>

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            top: isScrolled ? '70px' : '100px',
          }}
        >
          <div className="mobile-menu-nav">
            <button
              onClick={() => handleNavClick('what-is-simshare')}
              className={`mobile-menu-item ${activeSection === 'what-is-simshare' ? 'active' : ''}`}
            >
              What is SimShare?
            </button>

            <button
              onClick={() => handleNavClick('become-a-host')}
              className={`mobile-menu-item ${activeSection === 'become-a-host' ? 'active' : ''}`}
            >
              Become a Host
            </button>

            <button
              onClick={() => handleNavClick('waitlist')}
              style={{
                backgroundColor: '#f5f5f5ff',
                color: '#478547',
                fontSize: '16px',
                fontWeight: '700',
                padding: '12px 28px',
                borderRadius: '15px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              Get First Access
            </button>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '8px',
              }}
            >
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
