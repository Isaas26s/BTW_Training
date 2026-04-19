import { UnitCard } from './UnitCard';
import { Icon } from './Icon';
import { units, operatingHours } from '../data';

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

export function Units() {
  return (
    <section id="unidades" style={sectionStyles}>
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
            As Nossas Unidades
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.125rem' }}>
            Duas localizações no Centro de Niterói para sua conveniência
          </p>
        </div>

        {/* Units Grid */}
        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
          className="md:grid-cols-2"
        >
          {units.map((unit) => (
            <UnitCard
              key={unit.id}
              name={unit.name}
              address={unit.address}
              mapsUrl={unit.mapsUrl}
            />
          ))}
        </div>

        {/* Operating Hours */}
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #333333',
            borderRadius: '16px',
            padding: '1.5rem',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <Icon name="clock" size={24} color="#FFC300" />
            <h3
              style={{
                fontFamily: 'Teko, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              Horário de Funcionamento
            </h3>
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', marginBottom: '1rem' }}>
            {operatingHours.note}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ color: '#FFFFFF' }}>
              <span style={{ color: '#FFC300', fontWeight: 500 }}>Segunda a Sexta:</span>{' '}
              {operatingHours.weekdays.replace('Segunda a Sexta: ', '')}
            </p>
            <p style={{ color: '#FFFFFF' }}>
              <span style={{ color: '#FFC300', fontWeight: 500 }}>Sábado:</span>{' '}
              {operatingHours.saturday.replace('Sábado: ', '')}
            </p>
            <p style={{ color: '#FFFFFF' }}>
              <span style={{ color: '#FFC300', fontWeight: 500 }}>Domingo:</span>{' '}
              {operatingHours.sunday.replace('Domingo: ', '')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}