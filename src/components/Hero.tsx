import { Button } from './Button';

const sectionStyles: React.CSSProperties = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '5rem',
  paddingBottom: '4rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  backgroundColor: '#000000',
};

const containerStyles: React.CSSProperties = {
  position: 'relative',
  zIndex: 10,
  maxWidth: '64rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
};

const titleStyles: React.CSSProperties = {
  fontFamily: 'Teko, sans-serif',
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  fontWeight: 700,
  lineHeight: 1.1,
  marginBottom: '1.5rem',
  textTransform: 'uppercase',
};

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={sectionStyles}>
      {/* Diagonal accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '33%',
          height: '100%',
          opacity: 0.1,
          background: 'linear-gradient(135deg, transparent 0%, #FFC300 100%)',
        }}
      />

      {/* Content */}
      <div style={containerStyles}>
        {/* Main Title */}
        <h1 style={titleStyles}>
          <span style={{ color: '#FFC300' }}>A Sua Academia Boutique</span>
          <br />
          <span style={{ color: '#FFFFFF' }}>no Centro de Niterói.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}
        >
          Treinamento Funcional exclusivo. Escolha a sua unidade e alcance resultados reais
          com uma equipa especializada.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
          className="sm:flex-row"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('unidades')}
          >
            Conhecer Unidade Sulacap
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection('unidades')}
          >
            Conhecer Unidade São João
          </Button>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: '4rem' }}>
          <div
            style={{
              width: '32px',
              height: '48px',
              borderRadius: '16px',
              border: '2px solid rgba(255, 195, 0, 0.5)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '8px',
              marginLeft: 'auto',
              marginRight: 'auto',
              animation: 'bounce 1s infinite',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '12px',
                backgroundColor: '#FFC300',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8rem',
          background: 'linear-gradient(to top, #000000, transparent)',
        }}
      />
    </section>
  );
}