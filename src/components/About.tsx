import { Icon } from './Icon';
import { activities } from '../data';

const sectionStyles: React.CSSProperties = {
  backgroundColor: '#FFFFFF',
  color: '#000000',
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

const gridStyles: React.CSSProperties = {
  display: 'grid',
  gap: '3rem',
  alignItems: 'center',
};

export function About() {
  return (
    <section id="sobre" style={sectionStyles}>
      <div id="metodologia" style={{ scrollMarginTop: '80px' }}>
      <div style={containerStyles}>
        <div style={gridStyles} className="lg:grid-cols-2">
          {/* Text Column */}
          <div>
            <h2
              style={{
                fontFamily: 'Teko, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: '#000000',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
              }}
            >
              A BTW Training
            </h2>
            <p
              style={{
                color: '#374151',
                fontSize: '1.125rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}
            >
              Somos a escolha certa para quem procura um espaço exclusivo e focado em resultados.
              Trabalhamos exclusivamente com agendamento para garantir a qualidade de cada treino.
            </p>
            <p
              style={{
                color: '#4B5563',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}
            >
              Nossa metodologia foi desenvolvida para proporcionar resultados reais e duradouros,
              com acompanhamento personalizado de profissionais qualificados.
            </p>

            {/* Activities List */}
            <div
              style={{
                display: 'grid',
                gap: '1rem',
              }}
              className="sm:grid-cols-2"
            >
              {activities.map((activity) => (
                <div
                  key={activity.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    backgroundColor: '#F5F5F5',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#FFC300',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon name={activity.icon} size={20} color="#000" />
                  </div>
                  <span style={{ fontWeight: 500, color: '#1F2937' }}>{activity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder Column */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                aspectRatio: '4/3',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#FFC300',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="user" size={40} color="#000" />
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
                  Espaço exclusivo
                  <br />
                  focado em você
                </p>
              </div>
            </div>
            {/* Accent element */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1rem',
                right: '-1rem',
                width: '128px',
                height: '128px',
                backgroundColor: 'rgba(255, 195, 0, 0.2)',
                borderRadius: '16px',
                zIndex: -10,
              }}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}