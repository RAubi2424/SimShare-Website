import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollStagger } from '../hooks/useScrollStagger';
import { useResponsive } from '../hooks/useResponsive';

interface HighlightCardProps {
  highlight: {
    title: string;
    description: string;
  };
  index: number;
  isDark: boolean;
  isMobile: boolean;
}

// Separate component for each highlight card to use scroll animation hook
function HighlightCard({
  highlight,
  index,
  isDark,
  isMobile,
}: HighlightCardProps) {
  const { ref, adjustedProgress } = useScrollStagger({
    index,
    staggerDelay: 0.12,
    threshold: 0.2,
  });

  const isHovering = useRef(false);

  // Effect to update DOM directly based on scroll progress
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateAnimation = () => {
      requestAnimationFrame(() => {
        if (!element) return;

        const progress = adjustedProgress();
        // Both cards slide up from bottom
        const translateY = (1 - progress) * (isMobile ? 20 : 30);
        const scale = 0.95 + progress * 0.05;
        const opacity = progress;
        const willChange = progress < 1 ? 'transform, opacity' : 'auto';

        // Only update if not hovering
        if (!isHovering.current) {
          element.style.transform = `translateY(${translateY}px) scale(${scale})`;
        }
        element.style.opacity = `${opacity}`;
        element.style.willChange = willChange;
      });
    };

    const handleScroll = () => {
      updateAnimation();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateAnimation(); // Initial update

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, adjustedProgress, isMobile]);

  return (
    <div
      ref={ref}
      className="what-card"
      style={{
        borderLeft: `4px solid #478547`,
        background: isDark
          ? 'linear-gradient(135deg, hsl(0, 0%, 10%) 0%, hsl(0, 0%, 12%) 100%)'
          : 'linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(0, 0%, 99%) 100%)',
        borderRadius: '12px',
        boxShadow: isDark
          ? '0 4px 12px rgba(0, 0, 0, 0.5)'
          : '0 4px 12px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        isHovering.current = true;
        const currentTransform = e.currentTarget.style.transform;
        const currentY = parseFloat(
          currentTransform.match(/translateY\(([-\d.]+)px\)/)?.[1] || '0'
        );
        const currentScale = parseFloat(
          currentTransform.match(/scale\(([-\d.]+)\)/)?.[1] || '1'
        );
        e.currentTarget.style.transform = `translateY(${currentY - 5}px) scale(${currentScale})`;
        e.currentTarget.style.boxShadow = isDark
          ? '0 8px 30px rgba(0, 0, 0, 0.7), 0 4px 15px rgba(0, 0, 0, 0.4)'
          : '0 8px 30px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={e => {
        isHovering.current = false;
        const progress = adjustedProgress();
        const translateY = (1 - progress) * (isMobile ? 20 : 30);
        const scale = 0.95 + progress * 0.05;
        e.currentTarget.style.transform = `translateY(${translateY}px) scale(${scale})`;
        e.currentTarget.style.boxShadow = isDark
          ? '0 4px 12px rgba(0, 0, 0, 0.5)'
          : '0 4px 12px rgba(0, 0, 0, 0.05)';
      }}
    >
      <h3
        className="what-card-title"
        style={{
          fontWeight: '700',
          color: '#478547',
          margin: '0 0 12px 0',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {highlight.title}
      </h3>
      <p
        className="what-card-text"
        style={{
          lineHeight: '1.7',
          color: isDark ? '#B8B8B8' : '#666666',
          margin: 0,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {highlight.description}
      </p>
    </div>
  );
}

export function WhatIsSimShare() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { isMobile } = useResponsive();

  const highlights = [
    {
      title: 'For Golfers',
      description:
        'Browse nearby simulators, compare prices, amenities and technologies then book instantly all in one platform.',
    },
    {
      title: 'For Owners',
      description:
        'Earn passive income by renting out your simulator through secure transactions to verified golfers.',
    },
  ];

  return (
    <div
      className="what-section"
      style={{
        width: '100%',
        background: isDark
          ? 'linear-gradient(180deg, hsl(0, 0%, 8%) 0%, hsl(0, 0%, 10%) 50%, hsl(0, 0%, 8%) 100%)'
          : 'linear-gradient(180deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 90%) 50%, hsl(0, 0%, 93%) 100%)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          <h2
            className="what-title"
            style={{
              fontWeight: '700',
              color: isDark ? '#FFFFFF' : '#191919',
              margin: '0 0 24px 0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            What is SimShare?
          </h2>
        </div>

        {/* Main Content */}
        <div className="what-content">
          <p
            className="what-description"
            style={{
              lineHeight: '1.8',
              color: isDark ? '#D0D0D0' : '#333333',
              margin: '0 0 32px 0',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            At SimShare, we are building a platform that connects golf
            simulators with golfers looking for convenient and affordable places
            to practice and play. Simulator owners can list their setups on our
            platform for others to rent. Allowing them to customize pricing,
            availability and start earning passive income. SimShare unites
            owners and golfers in one reliable system, unlocking the full value
            of every golf simulator.
          </p>

          {/* Highlights Grid */}
          <div
            className="what-grid"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(0, 0%, 11%) 100%)'
                : 'linear-gradient(135deg, hsl(0, 0%, 95%) 0%, hsl(0, 0%, 97%) 100%)',
              borderRadius: '20px',
              boxShadow: isDark
                ? '0 20px 60px rgba(0, 0, 0, 0.7), 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05) inset'
                : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset',
              border: isDark
                ? '1px solid rgba(255, 255, 255, 0.05)'
                : '1px solid rgba(0, 0, 0, 0.05)',
            }}
          >
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                highlight={highlight}
                index={index}
                isDark={isDark}
                isMobile={isMobile}
              />
            ))}
          </div>

          <p
            className="what-description"
            style={{
              lineHeight: '1.8',
              color: isDark ? '#D0D0D0' : '#333333',
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            SimShare is redefining the indoor golf experience. We're expanding
            access, building connections, and helping the game grow year-round.
            Whether you're hosting or playing, SimShare delivers a seamless
            experience that helps owners earn and golfers play more often.
          </p>
        </div>

        {/* Call to Action */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '60px',
          }}
        >
          <div
            className="what-cta"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #478547 0%, #5ba05b 100%)',
              borderRadius: '20px',
              padding: '32px 48px',
              boxShadow:
                '0 6px 16px rgba(71, 133, 71, 0.15), 0 2px 8px rgba(71, 133, 71, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            {/* Subtle pattern overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                background:
                  'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div
              style={{
                position: 'relative',
              }}
            >
              <p
                className="what-cta-title"
                style={{
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: '0 0 8px 0',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '20px',
                }}
              >
                Ready to get started?
              </p>
              <p
                className="what-cta-text"
                style={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  margin: 0,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Join our waitlist and be among the first to experience SimShare
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
