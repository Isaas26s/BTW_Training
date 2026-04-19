import { Icon } from './Icon';
import { amenities } from '../data';

const sectionStyles: React.CSSProperties = {
  backgroundColor: '#1A1A1A',
  paddingTop: '4rem',
  paddingBottom: '4rem',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1280px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',
};

export function Amenities() {
  return (
    <section id="comodidades" style={sectionStyles}>
      <div style={containerStyles}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontFamily: 'Teko, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            O Que Oferecemos
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.125rem' }}>
            Tudo o que você precisa para uma experiência completa
          </p>
        </div>

        {/* Amenities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
          className="md:grid-cols-4"
        >
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '16px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 195, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Icon name={amenity.icon} size={28} color="#FFC300" />
              </div>
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}>
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}