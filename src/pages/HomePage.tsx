import { useTheme } from '../contexts/ThemeContext';
import { getResponsiveValue, useResponsive } from '../hooks/useResponsive';

interface HomePageProps {
  onNavigate: (sectionId: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { screenWidth } = useResponsive();
  const isMobileOrTablet = screenWidth < 1024;

  return (
    <div
      className="home-container"
      style={{
        width: '100%',
        minHeight: '100vh',
        background: isMobileOrTablet
          ? `linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url("/Golf Indoor.jpg") center/cover no-repeat`
          : isDark
            ? 'linear-gradient(135deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 8%) 50%, hsl(0, 0%, 5%) 100%)'
            : 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 0%, 95%) 50%, hsl(0, 0%, 100%) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: getResponsiveValue('300px', '600px', '600px', screenWidth),
          height: getResponsiveValue('300px', '600px', '600px', screenWidth),
          background:
            'radial-gradient(circle, rgba(71, 133, 71, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: getResponsiveValue('350px', '700px', '700px', screenWidth),
          height: getResponsiveValue('350px', '700px', '700px', screenWidth),
          background:
            'radial-gradient(circle, rgba(71, 133, 71, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="home-content"
        style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left Side - Text Content in Card */}
        <div
          className="home-card"
          style={{
            background: isMobileOrTablet
              ? isDark
                ? 'linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(20, 20, 20, 0.85) 100%)'
                : 'linear-gradient(135deg, rgba(247, 247, 247, 0.85) 0%, rgba(235, 235, 235, 0.85) 100%)'
              : isDark
                ? 'linear-gradient(135deg, hsl(0, 0%, 10%) 0%, hsl(0, 0%, 8%) 100%)'
                : 'linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(0, 0%, 92%) 100%)',
            borderRadius: '32px',
            boxShadow: isDark
              ? '0 30px 80px rgba(0, 0, 0, 0.8), 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.05) inset'
              : '0 30px 80px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.05) inset',
            border: isDark
              ? '1px solid rgba(255, 255, 255, 0.05)'
              : '1px solid rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Main Headline */}
          <h1
            key={theme}
            className="home-title"
            style={{
              fontWeight: '800',
              lineHeight: '1.1',
              margin: '0 0 24px 0',
              background: isDark
                ? 'linear-gradient(135deg, #FFFFFF 0%, #D0D0D0 100%)'
                : 'linear-gradient(135deg, #191919 0%, #333333 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Your Swing,
            <br />
            Your Schedule.
          </h1>

          {/* Description */}
          <p
            className="home-description"
            style={{
              lineHeight: '1.7',
              color: isDark ? '#B8B8B8' : '#666666',
              margin: '0 0 40px 0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            SimShare makes it easy to book premium golf simulators near you.
            Keep swinging year-round or turn your own simulator into passive
            income.
          </p>

          {/* CTA Buttons */}
          <div className="home-buttons">
            <button
              onClick={() => onNavigate('waitlist')}
              className="home-button"
              style={{
                background: 'linear-gradient(135deg, #478547 0%, #5a9d5a 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
                borderRadius: '40px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(71, 133, 71, 0.35)',
                transition: 'all 0.3s ease',
                fontFamily: 'Poppins, sans-serif',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 32px rgba(71, 133, 71, 0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 8px 24px rgba(71, 133, 71, 0.35)';
              }}
            >
              Get First Access
            </button>

            <button
              onClick={() => onNavigate('what-is-simshare')}
              className="home-button"
              style={{
                color: isDark ? '#ffffffff' : '#191919',
                fontWeight: '600',
                borderRadius: '20px',
                border: `2px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Poppins, sans-serif',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#478547';
                e.currentTarget.style.color = '#478547';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = isDark
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.color = isDark ? '#FFFFFF' : '#191919';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Enhanced Image */}
        <div
          className="home-image-container"
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Glow effect behind image */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              background:
                'linear-gradient(135deg, rgba(71, 133, 71, 0.3) 0%, rgba(90, 157, 90, 0.2) 100%)',
              borderRadius: '40px',
              filter: 'blur(40px)',
              opacity: 0.6,
            }}
          />

          {/* Image container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: isDark
                ? '0 30px 80px rgba(0, 0, 0, 0.8), 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.1) inset'
                : '0 30px 80px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.1) inset',
              border: isDark
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src="/Golf Indoor.jpg"
              alt="Golf simulator"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Subtle overlay gradient on image */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: isDark
                  ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, transparent 50%, rgba(71, 133, 71, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, transparent 50%, rgba(71, 133, 71, 0.05) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
