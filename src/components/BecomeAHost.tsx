import {
  Award,
  Calendar,
  Clock,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface BecomeAHostProps {
  onOpenWaitlist: () => void;
}

interface BenefitCardProps {
  benefit: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  isDark: boolean;
  isMobile: boolean;
}

interface FacilityCardProps {
  isDark: boolean;
  isMobile: boolean;
}

// Facility Card component with scroll animation - fades up from bottom
function FacilityCard({ isDark, isMobile }: FacilityCardProps) {
  const { ref, progress } = useScrollAnimation({
    threshold: 0.3,
    easing: 'quart',
  });

  // Effect to update DOM directly based on scroll progress
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateAnimation = () => {
      requestAnimationFrame(() => {
        if (!element) return;

        const currentProgress = progress.current ?? 0;
        // Vertical fade-up animation
        const translateY = (1 - currentProgress) * (isMobile ? 40 : 60);
        const opacity = currentProgress;
        const willChange = currentProgress < 1 ? 'transform, opacity' : 'auto';

        element.style.transform = `translateY(${translateY}px)`;
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
  }, [ref, progress, isMobile]);

  return (
    <div
      className="host-control"
      style={{
        marginBottom: '80px',
        textAlign: 'center',
      }}
    >
      <div
        ref={ref}
        style={{
          background: isDark
            ? 'linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(0, 0%, 11%) 100%)'
            : 'linear-gradient(135deg, hsl(0, 0%, 98%) 0%, hsl(0, 0%, 100%) 100%)',
          borderRadius: '24px',
          padding: '60px 40px',
          boxShadow: isDark
            ? '0 20px 60px rgba(0, 0, 0, 0.7), 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05) inset'
            : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset',
          border: isDark
            ? '1px solid rgba(255, 255, 255, 0.05)'
            : '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <h3
          className="host-control-title"
          style={{
            fontWeight: '700',
            color: isDark ? '#FFFFFF' : '#191919',
            margin: '0 0 24px 0',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Have a Dedicated Simulator Facility?
        </h3>
        <p
          className="host-control-text"
          style={{
            lineHeight: '1.8',
            color: isDark ? '#D0D0D0' : '#333333',
            margin: '0 0 24px 0',
            fontFamily: 'Poppins, sans-serif',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Do you own a commercial simulator facility or dream of starting your
          own business? SimShare connects you with a vast network of golfers to
          help you fill unused tee times and generate consistent off-peak
          revenue — all without adding extra work to your day.
        </p>
        <p
          className="host-control-text"
          style={{
            lineHeight: '1.7',
            color: isDark ? '#B8B8B8' : '#666666',
            margin: '0 0 40px 0',
            fontFamily: 'Poppins, sans-serif',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          We help simulator businesses get off the ground faster. Our platform
          removes all the hassle of booking management, letting you focus on the
          things that matter.
        </p>
        <div
          style={{
            background: 'linear-gradient(135deg, #478547 0%, #5ba05b 100%)',
            borderRadius: '16px',
            padding: '24px 32px',
            display: 'inline-block',
            cursor: 'default',
            boxShadow: '0 8px 24px rgba(71, 133, 71, 0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Pattern overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              background:
                'radial-gradient(circle at 30% 40%, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          <p
            className="host-control-quote"
            style={{
              fontWeight: '600',
              color: '#FFFFFF',
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
              position: 'relative',
              letterSpacing: '0.5px',
            }}
          >
            You set the rules — We handle the rest.
          </p>
        </div>
      </div>
    </div>
  );
}

interface CTASectionProps {
  onOpenWaitlist: () => void;
  isMobile: boolean;
}

// CTA Section component with scroll animation - fades up from bottom with stagger
function CTASection({ onOpenWaitlist, isMobile }: CTASectionProps) {
  const { ref, progress } = useScrollAnimation({
    threshold: 0.3,
    easing: 'quart',
  });

  // Effect to update DOM directly based on scroll progress
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateAnimation = () => {
      requestAnimationFrame(() => {
        if (!element) return;

        const currentProgress = progress.current ?? 0;

        // Apply 150ms stagger delay
        const staggerDelay = 0.15;
        const staggeredProgress = Math.max(
          0,
          Math.min(1, (currentProgress - staggerDelay) / (1 - staggerDelay))
        );

        // Vertical fade-up animation
        const translateY = (1 - staggeredProgress) * (isMobile ? 40 : 60);
        const opacity = staggeredProgress;
        const willChange =
          staggeredProgress < 1 ? 'transform, opacity' : 'auto';

        element.style.transform = `translateY(${translateY}px)`;
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
  }, [ref, progress, isMobile]);

  return (
    <div
      ref={ref}
      className="host-cta"
      style={{
        backgroundColor: '#478547',
        borderRadius: '24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 40px',
      }}
    >
      {/* Background pattern */}
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
          backgroundSize: '50px 50px',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto',
          }}
        >
          <Users size={32} color="#FFFFFF" />
        </div>

        <h3
          className="host-cta-title"
          style={{
            fontWeight: '700',
            color: '#FFFFFF',
            margin: '0 0 20px 0',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Join Canada's New Golf Movement
        </h3>
        <p
          className="host-cta-text"
          style={{
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.95)',
            margin: '0 0 32px 0',
            fontFamily: 'Poppins, sans-serif',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          When you become a SimShare host, you're helping shape the future of
          indoor golf. Connect with passionate players in your community, create
          more places to play during the off-season, and turn your passion into
          profit.
        </p>

        {/* Launch Offer Badge */}
        <div
          className="host-cta-badge"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            marginBottom: '32px',
            display: 'inline-block',
            backdropFilter: 'blur(10px)',
            padding: '24px 32px',
          }}
        >
          <p
            className="host-cta-badge-label"
            style={{
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 12px 0',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Exclusive Launch Rewards
          </p>
          <p
            className="host-cta-badge-title"
            style={{
              fontWeight: '700',
              color: '#FFFFFF',
              margin: '0 0 8px 0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            For The First 100 Hosts
          </p>
          <p
            className="host-cta-badge-text"
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            + Inaugural Members Badge when we Launch
          </p>
        </div>

        <button
          onClick={onOpenWaitlist}
          className="host-cta-final"
          style={{
            fontWeight: '600',
            color: '#FFFFFF',
            margin: 0,
            fontFamily: 'Poppins, sans-serif',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'inherit',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            transition: 'opacity 0.2s ease',
            display: 'block',
            width: '100%',
            textAlign: 'center',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Join the pre-launch waitlist and start earning from your simulator!
        </button>
      </div>
    </div>
  );
}

// Separate component for each benefit card to use scroll animation hook
function BenefitCard({ benefit, isDark, isMobile }: BenefitCardProps) {
  const Icon = benefit.icon;
  const { ref, progress } = useScrollAnimation({
    threshold: 0.15,
  });

  const isHovering = useRef(false);

  // Effect to update DOM directly based on scroll progress
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateAnimation = () => {
      requestAnimationFrame(() => {
        if (!element) return;

        const currentProgress = progress.current ?? 0;
        const translateY = (1 - currentProgress) * (isMobile ? 25 : 40);
        const opacity = currentProgress;
        const willChange = currentProgress < 1 ? 'transform, opacity' : 'auto';

        // Only update if not hovering
        if (!isHovering.current) {
          element.style.transform = `translateY(${translateY}px)`;
        }
        element.style.opacity = `${opacity}`;
        element.style.willChange = willChange;
      });
    };

    // Listen to scroll events
    const handleScroll = () => {
      updateAnimation();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateAnimation(); // Initial update

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, progress, isMobile]);

  return (
    <div
      ref={ref}
      className="host-card"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(0, 0%, 11%) 100%)'
          : 'linear-gradient(135deg, hsl(0, 0%, 98%) 0%, hsl(0, 0%, 100%) 100%)',
        borderRadius: '16px',
        textAlign: 'center',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default',
        boxShadow: isDark
          ? '0 20px 60px rgba(0, 0, 0, 0.7), 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05) inset'
          : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset',
        border: isDark
          ? '1px solid rgba(255, 255, 255, 0.05)'
          : '1px solid rgba(0, 0, 0, 0.05)',
      }}
      onMouseEnter={e => {
        isHovering.current = true;
        const currentTransform = e.currentTarget.style.transform;
        const currentY = parseFloat(
          currentTransform.match(/translateY\(([-\d.]+)px\)/)?.[1] || '0'
        );
        e.currentTarget.style.transform = `translateY(${currentY - 5}px)`;
        e.currentTarget.style.boxShadow = isDark
          ? '0 8px 30px rgba(0, 0, 0, 0.7), 0 4px 15px rgba(0, 0, 0, 0.5)'
          : '0 8px 30px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={e => {
        isHovering.current = false;
        const currentProgress = progress.current ?? 0;
        const translateY = (1 - currentProgress) * (isMobile ? 25 : 40);
        e.currentTarget.style.transform = `translateY(${translateY}px)`;
        e.currentTarget.style.boxShadow = isDark
          ? '0 20px 60px rgba(0, 0, 0, 0.7), 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05) inset'
          : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset';
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#478547',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          boxShadow: '0 4px 12px rgba(71, 133, 71, 0.3)',
        }}
      >
        <Icon size={28} color="#FFFFFF" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '80px',
        }}
      >
        <h3
          className="host-card-title"
          style={{
            fontWeight: '600',
            color: isDark ? '#FFFFFF' : '#191919',
            margin: '0 0 12px 0',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {benefit.title}
        </h3>
        <p
          className="host-card-text"
          style={{
            lineHeight: '1.6',
            color: isDark ? '#B8B8B8' : '#666666',
            margin: 0,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

export function BecomeAHost({ onOpenWaitlist }: BecomeAHostProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { isMobile } = useResponsive();

  const benefits = [
    {
      icon: DollarSign,
      title: 'Set Your Rates',
      description:
        'Set your own rates or use our smart pricing recommendations to help you choose',
    },
    {
      icon: Calendar,
      title: 'Your Schedule',
      description:
        "Decide when to host, whether it's a few hours a week or full-time",
    },
    {
      icon: Shield,
      title: 'Protected & Verified',
      description:
        'Host with confidence knowing every player is verified and every booking is insured',
    },
    {
      icon: TrendingUp,
      title: 'Track Performance',
      description: 'View earnings, booking patterns and more, all in one spot',
    },
    {
      icon: Clock,
      title: 'Instant Payouts',
      description:
        'Get paid quickly after each session with automated payment processing',
    },
    {
      icon: Award,
      title: 'Host Rewards',
      description: 'Earn exclusive perks and bonuses as you host more sessions',
    },
  ];

  return (
    <div
      className="host-section"
      style={{
        width: '100%',
        background: isDark
          ? 'linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 8%) 50%, hsl(0, 0%, 5%) 100%)'
          : 'linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(0, 0%, 95%) 50%, hsl(0, 0%, 100%) 100%)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
            maxWidth: '900px',
            margin: '0 auto 80px auto',
          }}
        >
          <h2
            className="host-title"
            style={{
              fontWeight: '700',
              color: isDark ? '#FFFFFF' : '#191919',
              margin: '0 0 24px 0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Turn Your Simulator into Income
          </h2>
          <p
            className="host-subtitle"
            style={{
              lineHeight: '1.8',
              color: isDark ? '#D0D0D0' : '#333333',
              margin: '0 0 32px 0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Why let your golf simulator sit idle when it could be paying for
            itself? SimShare lets you rent out your simulator on your schedule —
            whether it's set up in your basement, garage, or a dedicated indoor
            facility.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className="host-grid-3"
          style={{
            maxWidth: '1100px',
            margin: '0 auto 80px auto',
          }}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              benefit={benefit}
              isDark={isDark}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Facility Section - slides from LEFT */}
        <FacilityCard isDark={isDark} isMobile={isMobile} />

        {/* CTA Section - slides from RIGHT */}
        <CTASection onOpenWaitlist={onOpenWaitlist} isMobile={isMobile} />
      </div>
    </div>
  );
}
