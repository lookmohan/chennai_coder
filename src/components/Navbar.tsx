import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Freelance', href: '#freelance' },
    { name: 'Projects', href: '#projects' },
    { name: 'Courses', href: '#courses' },
    { name: 'Skills', href: '#skills' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        background: isScrolled ? 'var(--bg-glass-nav)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        zIndex: 999,
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            src="/assets/chennai-coder-logo.png"
            alt="Chennai Coder Logo"
            className="brand-logo-img"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--text-body)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1rem'
          }}
          className="desktop-actions"
        >
          <ThemeToggle />
          <a href="#freelance" className="btn btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-toggle-wrapper">
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              color: 'var(--text-heading)',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-heading)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#freelance"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem' }}
          >
            Start a Project
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-theme-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
