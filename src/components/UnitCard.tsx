import { Icon } from './Icon';

interface UnitCardProps {
  name: string;
  address: string;
  mapsUrl: string;
}

export function UnitCard({ name, address, mapsUrl }: UnitCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid #333333',
        borderRadius: '16px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
      }}
    >
      <h3
        style={{
          fontFamily: 'Teko, sans-serif',
          fontSize: '1.75rem',
          fontWeight: 700,
          color: '#FFC300',
          marginBottom: '1rem',
        }}
      >
        {name}
      </h3>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Icon name="mapPin" size={24} color="#FFC300" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
          {address}
        </p>
      </div>

      <a
        href={mapsUrl}
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
          padding: '0.875rem 1.5rem',
          borderRadius: '8px',
          fontSize: '0.875rem',
          border: '2px solid #FFC300',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          marginTop: 'auto',
        }}
      >
        <Icon name="mapPin" size={18} color="#000" />
        Ver no Mapa
      </a>
    </div>
  );
}