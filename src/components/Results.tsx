import { ResultCard } from './ResultCard';
import { results } from '../data';

const sectionStyles: React.CSSProperties = {
  backgroundColor: '#000000',
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

const titleStyles: React.CSSProperties = {
  fontFamily: 'Teko, sans-serif',
  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
  fontWeight: 700,
  color: '#FFC300',
  textShadow: '0 4px 0 rgba(0, 0, 0, 0.8)',
  marginBottom: '0.5rem',
};

export function Results() {
  return (
    <section id="resultados" style={sectionStyles}>
      <div style={containerStyles}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={titleStyles}>Resultados da BTW</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.125rem' }}>
            Transformações reais de nossos alunos
          </p>
        </div>

        {/* Results Grid */}
        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
          }}
          className="md:grid-cols-2 lg:grid-cols-3"
        >
          {results.map((result) => (
            <ResultCard
              key={result.id}
              name={result.name}
              loss={result.loss}
              duration={result.duration}
              image={result.image}
            />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.125rem', marginBottom: '1rem' }}>
            Quer resultados assim?
          </p>
          <a
            href="https://wa.me/5521997490241?text=Olá, vi seu anúncio no Instagram, pode me tirar algumas dúvidas?"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: '#FFC300',
              color: '#000000',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              border: '2px solid #FFC300',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#FFC300';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC300';
              e.currentTarget.style.color = '#000000';
            }}
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
}