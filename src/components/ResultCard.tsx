interface ResultCardProps {
  name: string;
  loss: string;
  duration: string;
  image: string;
}

export function ResultCard({ name, loss, duration, image }: ResultCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        border: '4px solid #FFC300',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#1A1A1A',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
        <img
          src={image}
          alt={`Resultado de ${name}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          loading="lazy"
        />
        {/* Gradient overlay at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
          }}
        />
      </div>

      {/* Info Container */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.5rem',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontFamily: 'Teko, sans-serif',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '0.25rem',
          }}
        >
          {name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'Teko, sans-serif',
              color: '#FFC300',
              fontSize: '1.75rem',
              fontWeight: 700,
            }}
          >
            {loss}
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>=</span>
          <span
            style={{
              fontFamily: 'Teko, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
            }}
          >
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}