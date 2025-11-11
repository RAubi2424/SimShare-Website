import { useTheme } from "../contexts/ThemeContext";

interface WhatIsSimShareProps {
  onOpenWaitlist: () => void;
}

export function WhatIsSimShare({ onOpenWaitlist }: WhatIsSimShareProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const highlights = [
    {
      title: "For Renters",
      description: "Premium golf simulators closer to home with top-tier technology, flexible booking, and affordable rates"
    },
    {
      title: "For Owners",
      description: "Turn downtime into dependable income, maximizing the value of your investment"
    }
  ];

  return (
    <div style={{
      width: '100%',
      background: isDark
        ? 'linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 7%) 50%, hsl(0, 0%, 5%) 100%)'
        : 'linear-gradient(180deg, hsl(0, 0%, 90%) 0%, hsl(0, 0%, 93%) 50%, hsl(0, 0%, 90%) 100%)',
      padding: '100px 40px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>

        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: isDark ? '#FFFFFF' : '#191919',
            margin: '0 0 24px 0',
            fontFamily: 'Poppins, sans-serif'
          }}>
            What is SimShare?
          </h2>
        </div>

        {/* Main Content */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 60px auto'
        }}>
          <p style={{
            fontSize: '19px',
            lineHeight: '1.8',
            color: isDark ? '#D0D0D0' : '#333333',
            margin: '0 0 32px 0',
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center'
          }}>
            At SimShare, we're building a platform that connects golf simulator owners with golfers looking for flexible, affordable places to practice and play. By bringing everyone together in one easy-to-use system, SimShare unlocks the full value of a simulator by offering secure access to verified golfers, benefiting both owners and renters.
          </p>

          {/* Highlights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            margin: '48px 0',
            padding: '40px',
            background: isDark
              ? 'linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 9%) 100%)'
              : 'linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 95%) 100%)',
            borderRadius: '20px',
            boxShadow: isDark
              ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.05) inset'
              : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  borderLeft: `4px solid #478547`,
                  background: isDark
                    ? 'linear-gradient(135deg, hsl(0, 0%, 9%) 0%, hsl(0, 0%, 11%) 100%)'
                    : 'linear-gradient(135deg, hsl(0, 0%, 95%) 0%, hsl(0, 0%, 97%) 100%)',
                  borderRadius: '12px',
                  boxShadow: isDark
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
              >
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#478547',
                  margin: '0 0 12px 0',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {highlight.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: isDark ? '#B8B8B8' : '#666666',
                  margin: 0,
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '19px',
            lineHeight: '1.8',
            color: isDark ? '#D0D0D0' : '#333333',
            margin: 0,
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center'
          }}>
            SimShare is redefining the indoor golf experience. We're expanding access, building connections, and helping the game grow year-round. Whether you're hosting or playing, SimShare makes it effortless to share your space, connect with local golfers, and make every swing count.
          </p>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <div
            style={{
              display: 'inline-block',
              padding: '32px 48px',
              background: isDark
                ? 'linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 9%) 100%)'
                : 'linear-gradient(135deg, hsl(0, 0%, 93%) 0%, hsl(0, 0%, 95%) 100%)',
              borderRadius: '20px',
              boxShadow: isDark
                ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.05) inset'
                : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05) inset',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
            }}
          >
            <div
              onClick={onOpenWaitlist}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                borderRadius: '12px',
                padding: '4px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <p style={{
                fontSize: '20px',
                fontWeight: '600',
                color: isDark ? '#FFFFFF' : '#191919',
                margin: '0 0 8px 0',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Ready to get started?
              </p>
              <p style={{
                fontSize: '16px',
                color: isDark ? '#B8B8B8' : '#666666',
                margin: 0,
                fontFamily: 'Poppins, sans-serif'
              }}>
                Join our waitlist and be among the first to experience SimShare
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}