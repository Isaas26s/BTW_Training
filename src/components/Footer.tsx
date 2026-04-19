import { Icon } from './Icon';
import { Logo } from './Logo';

const whatsappUrl = 'https://wa.me/5521997490241?text=Olá, vi seu anúncio no Instagram, pode me tirar algumas dúvidas?';
const instagramUrl = 'https://instagram.com/btwtraining';

const footerStyles: React.CSSProperties = {
  backgroundColor: '#000000',
  borderTop: '1px solid #333333',
  paddingTop: '3rem',
  paddingBottom: '3rem',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1280px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',
};

export function Footer() {
  return (
    <>
      <footer style={footerStyles}>
        <div style={containerStyles}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="md:flex-row md:justify-between"
          >
            {/* Logo */}
            <Logo size="md" />

            {/* Contact Info */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              {/* Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'color 0.3s ease',
                }}
              >
                <Icon name="instagram" size={20} color="currentColor" />
                <span style={{ fontWeight: 500 }}>@btwtraining</span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                }}
              >
                <Icon name="messageCircle" size={20} color="#FFF" />
                <span>(21) 99749-0241</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #333333', marginTop: '2rem', paddingTop: '2rem' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
              className="md:flex-row md:justify-between"
            >
              {/* Copyright */}
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem', textAlign: 'center' }}>
                © 2026 BTW Training. Todos os direitos reservados.
              </p>

              {/* Location */}
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem', textAlign: 'center' }}>
                <Icon name="mapPin" size={14} color="currentColor" style={{ display: 'inline', marginRight: '0.25rem' }} />
                Centro de Niterói, RJ
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* Floating WhatsApp Button */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50,
        width: '56px',
        height: '56px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
      }}
      aria-label="Contato via WhatsApp"
    >
      <Icon name="messageCircle" size={28} color="#FFF" />
    </a>
  );
}