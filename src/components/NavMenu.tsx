import { Icon } from './Icon';

interface NavItem {
  id: string;
  label: string;
}

interface NavMenuProps {
  items: NavItem[];
  activeSection?: string | null;
  isOpen?: boolean;
  onClose?: () => void;
}

export function NavMenu({ items, activeSection, isOpen, onClose }: NavMenuProps) {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose?.();
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav style={{ display: 'none' }} className="lg:flex lg:items-center lg:gap-8">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: activeSection === item.id ? '#FFC300' : '#FFFFFF',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          zIndex: 40,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        className="md:hidden"
        onClick={onClose}
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: '2rem',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: activeSection === item.id ? '#FFC300' : '#FFFFFF',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        padding: '0.5rem',
        color: isOpen ? '#FFC300' : '#FFFFFF',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
      }}
      className="md:hidden"
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      <Icon name={isOpen ? 'close' : 'menu'} size={28} color="currentColor" />
    </button>
  );
}