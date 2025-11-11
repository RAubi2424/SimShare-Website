import imgGolfSim from 'figma:asset/5e785a4f588382d9855fbe756dbac66fcfad1ac5.png';
import { useTheme } from '../contexts/ThemeContext';

interface HomePageProps {
  onNavigate: (sectionId: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: isDark
          ? 'linear-gradient(135deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 8%) 50%, hsl(0, 0%, 5%) 100%)'
          : 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 0%, 95%) 50%, hsl(0, 0%, 100%) 100%)',
        paddingTop: '100px',
        paddingBottom: '60px',
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
          width: '600px',
          height: '600px',
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
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(circle, rgba(71, 133, 71, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          width: '100%',
          padding: '0 60px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          gap: '0',
        }}
      >
        {/* Left Side - Text Content in Card */}
        <div
          style={{
            background: isDark
              ? 'linear-gradient(135deg, hsl(0, 0%, 10%) 0%, hsl(0, 0%, 8%) 100%)'
              : 'linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(0, 0%, 92%) 100%)',
            borderRadius: '32px',
            padding: '60px',
            boxShadow: isDark
              ? '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 1px rgba(255, 255, 255, 0.05) inset'
              : '0 30px 80px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.05) inset',
            border: isDark
              ? '1px solid rgba(255, 255, 255, 0.05)'
              : '1px solid rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 2,
            maxWidth: '650px',
            marginRight: '-80px',
          }}
        >
          {/* Main Headline */}
          <h1
            key={theme}
            style={{
              fontSize: '56px',
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
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: isDark ? '#B8B8B8' : '#666666',
              margin: '0 0 40px 0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            SimShare makes it easy to book premium golf simulators. Practice
            your swing year-round, or list your own simulator and earn income.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            <button
              onClick={() => onNavigate('waitlist')}
              style={{
                background: 'linear-gradient(135deg, #478547 0%, #5a9d5a 100%)',
                color: '#FFFFFF',
                fontSize: '17px',
                fontWeight: '700',
                padding: '18px 40px',
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
              Join the Waitlist
            </button>

            <button
              onClick={() => onNavigate('what-is-simshare')}
              style={{
                color: isDark ? '#ffffffff' : '#191919',
                fontSize: '17px',
                fontWeight: '600',
                padding: '18px 40px',
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
          style={{
            position: 'relative',
            width: '750px',
            height: '600px',
            zIndex: 1,
            flex: '0 0 750px',
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
                ? '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 1px rgba(255, 255, 255, 0.1) inset'
                : '0 30px 80px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.1) inset',
              border: isDark
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={imgGolfSim}
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
