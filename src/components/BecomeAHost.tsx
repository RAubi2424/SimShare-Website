import {
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface BecomeAHostProps {
  onOpenWaitlist: () => void;
}

export function BecomeAHost({ onOpenWaitlist }: BecomeAHostProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const features = [
    'Instant, secure payments after each session',
    'Integrated insurance coverage for peace of mind',
    'Guest verification & messaging tools',
    'Business analytics to track growth and demand trends',
    'Early-access perks & partner discounts for verified hosts',
    '24/7 dedicated host support team',
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Set Your Rates',
      description:
        'Control your pricing and turn idle time into reliable passive income',
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
        'Every transaction is secure and every guest is verified for safety',
    },
    {
      icon: TrendingUp,
      title: 'Track Performance',
      description:
        'View earnings, bookings, and analytics all in one dashboard',
    },
    {
      icon: Clock,
      title: 'Instant Payouts',
      description:
        'Get paid quickly after each session with automated payment processing',
    },
    {
      icon: Award,
      title: 'Premium Listings',
      description:
        'Stand out with verified host badges and priority placement in search',
    },
  ];

  return (
    <div
      className="host-section"
      style={{
        width: '100%',
        background: isDark
          ? 'linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 7%) 50%, hsl(0, 0%, 5%) 100%)'
          : 'linear-gradient(180deg, hsl(0, 0%, 90%) 0%, hsl(0, 0%, 93%) 50%, hsl(0, 0%, 90%) 100%)',
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
          <p
            className="host-text"
            style={{
              lineHeight: '1.7',
              color: isDark ? '#B8B8B8' : '#666666',
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            From casual golfers earning extra income from their home sim, to
            entrepreneurs launching their own simulator facilities. SimShare
            makes it simple to start earning.
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
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="host-card"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 9%) 100%)'
                    : 'linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 95%) 100%)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'default',
                  boxShadow: isDark
                    ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.05) inset'
                    : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset',
                  border: isDark
                    ? '1px solid rgba(255, 255, 255, 0.05)'
                    : '1px solid rgba(0, 0, 0, 0.05)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = isDark
                    ? '0 8px 30px rgba(0, 0, 0, 0.5)'
                    : '0 8px 30px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isDark
                    ? '0 4px 20px rgba(0, 0, 0, 0.4)'
                    : '0 4px 20px rgba(0, 0, 0, 0.08)';
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
          })}
        </div>

        {/* Control Section */}
        <div
          className="host-control"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 9%) 100%)'
              : 'linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 95%) 100%)',
            borderRadius: '24px',
            marginBottom: '80px',
            textAlign: 'center',
            boxShadow: isDark
              ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.05) inset'
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
              margin: '0 0 20px 0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            You're in Control — Every Step of the Way
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
            SimShare gives you total flexibility. You decide when to host, what
            to charge, and who to welcome. Your personalized host dashboard
            makes it easy to manage bookings, view earnings, and track
            performance — all in one place.
          </p>
          <p
            className="host-control-text"
            style={{
              lineHeight: '1.7',
              color: isDark ? '#B8B8B8' : '#666666',
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Our system automates payments and sends confirmations instantly, so
            you never have to chase a booking or handle cash. Whether you're
            sharing a home setup a few hours a week or running multiple bays
            full-time, you stay in full control.
          </p>
          <div
            onClick={onOpenWaitlist}
            style={{
              marginTop: '32px',
              padding: '20px',
              backgroundColor: isDark ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 100%)',
              borderRadius: '16px',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = isDark
                ? '0 8px 24px rgba(0, 0, 0, 0.4)'
                : '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <p
              style={{
                fontSize: '19px',
                fontWeight: '600',
                color: '#478547',
                margin: 0,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              You set the rules — we handle the rest.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div
          style={{
            marginBottom: '80px',
          }}
        >
          <h3
            className="host-features-title"
            style={{
              fontWeight: '700',
              color: isDark ? '#FFFFFF' : '#191919',
              margin: '0 0 20px 0',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
            }}
          >
            Effortless Hosting, Powerful Support
          </h3>
          <p
            className="host-features-text"
            style={{
              lineHeight: '1.7',
              color: isDark ? '#B8B8B8' : '#666666',
              margin: '0 0 48px 0',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Hosting with SimShare is designed to feel professional and secure
            from day one. Every transaction is protected, and every guest is
            verified.
          </p>

          <div
            className="host-grid-3"
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="host-feature-item"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  background: isDark
                    ? 'linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 9%) 100%)'
                    : 'linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 95%) 100%)',
                  borderRadius: '12px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'default',
                  boxShadow: isDark
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.05)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = isDark
                    ? '0 8px 24px rgba(0, 0, 0, 0.4)'
                    : '0 8px 24px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isDark
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.05)';
                }}
              >
                <CheckCircle2
                  size={24}
                  color="#478547"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
                <p
                  className="host-feature-text"
                  style={{
                    lineHeight: '1.6',
                    color: isDark ? '#D0D0D0' : '#333333',
                    margin: 0,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="host-cta"
          style={{
            backgroundColor: '#478547',
            borderRadius: '24px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
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
              When you become a SimShare host, you're helping shape the future
              of indoor golf. Connect with passionate players in your community,
              create more places to play during the off-season, and turn your
              passion into profit.
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
                0% SimShare Fees for First 100 Hosts
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

            <p
              className="host-cta-final"
              style={{
                fontWeight: '600',
                color: '#FFFFFF',
                margin: 0,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Join the pre-launch waitlist and start earning from your
              simulator!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
