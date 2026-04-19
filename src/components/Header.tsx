import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NavMenu, MobileMenuButton } from './NavMenu';
import { Button } from './Button';
import { useMobileMenu, useScrollSpy } from '../hooks';

const navItems = [
  { id: 'sobre', label: 'A BTW' },
  { id: 'metodologia', label: 'Metodologia' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'comodidades', label: 'Comodidades' },
  { id: 'unidades', label: 'Unidades' },
];

const headerStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: '#000000',
  transition: 'all 0.3s ease',
};

const innerStyles: React.CSSProperties = {
  maxWidth: '1280px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',
};

const flexStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px',
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, toggle, close } = useMobileMenu();
  const activeSection = useScrollSpy(navItems.map((item) => item.id), 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ ...headerStyles, boxShadow: isScrolled ? '0 2px 20px rgba(255, 195, 0, 0.1)' : 'none' }}>
      <div style={innerStyles}>
        <div style={flexStyles}>
          {/* Logo */}
          <Logo size="sm" />

          {/* Desktop Navigation */}
          <div style={{ display: 'none' }} className="lg:flex lg:flex-1 lg:justify-center lg:px-8">
            <NavMenu items={navItems} activeSection={activeSection} />
          </div>

          {/* CTA Button - Desktop */}
          <div style={{ display: 'none' }} className="lg:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const section = document.getElementById('unidades');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Agendar Aula
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton isOpen={isOpen} onClick={toggle} />
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <NavMenu
        items={navItems}
        activeSection={activeSection}
        isOpen={isOpen}
        onClose={close}
      />
    </header>
  );
}