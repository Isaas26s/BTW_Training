interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizeConfig = {
  sm: { circle: 40, textSize: '1.25rem', subtitleSize: '0.625rem' },
  md: { circle: 56, textSize: '1.75rem', subtitleSize: '0.75rem' },
  lg: { circle: 80, textSize: '2.25rem', subtitleSize: '0.875rem' },
};

export function Logo({ size = 'md' }: LogoProps) {
  const config = sizeConfig[size];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      {/* Yellow Circle with BTW */}
      <div
        style={{
          width: config.circle,
          height: config.circle,
          borderRadius: '50%',
          backgroundColor: '#FFC300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            fontFamily: 'Teko, sans-serif',
            fontSize: config.textSize,
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#000000',
            zIndex: 1,
          }}
        >
          BTW
        </span>
        {/* Diagonal line accent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.15) 50%, transparent 60%)',
            transform: 'rotate(-15deg) scale(1.5)',
          }}
        />
      </div>

      {/* Text beside circle */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'Teko, sans-serif',
            fontSize: config.textSize,
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#FFFFFF',
            lineHeight: 1,
          }}
        >
          BTW
        </span>
        <span
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: config.subtitleSize,
            fontWeight: 600,
            color: '#FFC300',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          TRAINING
        </span>
      </div>
    </div>
  );
}