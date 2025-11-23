import { useTheme } from '../contexts/ThemeContext';

export function WhatIsSimShare() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const highlights = [
    {
      title: 'For Golfers',
      description:
        'Browse nearby simulators, compare prices, amenities and technologies then book instantly all in one platform',
    },
    {
      title: 'For Owners',
      description:
        'Turn downtime into dependable passive income, through secure transactions to verified golfers.',
    },
  ];

  return (
    <div
      className="what-section"
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
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '60px',
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
                ? 'linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 9%) 100%)'
                : 'linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 95%) 100%)',
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
              <div
                key={index}
                className="what-card"
                style={{
                  borderLeft: `4px solid #478547`,
                  background: isDark
                    ? 'linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(0, 0%, 11%) 100%)'
                    : 'linear-gradient(135deg, hsl(0, 0%, 95%) 0%, hsl(0, 0%, 97%) 100%)',
                  borderRadius: '12px',
                  boxShadow: isDark
                    ? '0 4px 12px rgba(0, 0, 0, 0.5)'
                    : '0 4px 12px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = isDark
                    ? '0 8px 30px rgba(0, 0, 0, 0.7), 0 4px 15px rgba(0, 0, 0, 0.4)'
                    : '0 8px 30px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
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
              background: isDark
                ? 'linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 9%) 100%)'
                : 'linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 95%) 100%)',
              borderRadius: '20px',
              boxShadow: isDark
                ? '0 20px 60px rgba(0, 0, 0, 0.7), 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05) inset'
                : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset',
              border: isDark
                ? '1px solid rgba(255, 255, 255, 0.05)'
                : '1px solid rgba(0, 0, 0, 0.05)',
              transform: 'translateY(-8px)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = isDark
                ? '0 25px 70px rgba(0, 0, 0, 0.8), 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.05) inset'
                : '0 25px 70px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.05) inset';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = isDark
                ? '0 20px 60px rgba(0, 0, 0, 0.7), 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.05) inset'
                : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset';
            }}
          >
            <div
              style={{
                borderRadius: '12px',
                padding: '4px',
              }}
            >
              <p
                className="what-cta-title"
                style={{
                  fontWeight: '600',
                  color: isDark ? '#FFFFFF' : '#191919',
                  margin: '0 0 8px 0',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Ready to get started?
              </p>
              <p
                className="what-cta-text"
                style={{
                  color: isDark ? '#B8B8B8' : '#666666',
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
