import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-main)',
        borderTop: '1px solid var(--border-color)',
        padding: '4rem 0 2rem 0',
        color: 'var(--text-body)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}
            >
              <img
                src="/assets/chennai-coder-logo.png"
                alt="Chennai Coder Logo"
                className="brand-logo-img"
              />
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem', color: 'var(--text-body)' }}>
              AI Solutions • Freelance Software Development • Online Programming Training
            </p>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-accent)' }}>
              Build AI. Create Solutions. Learn Programming.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem' }}>
              <li><a href="#about" style={{ transition: 'color 0.2s' }}>About Chennai Coder</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }}>Services & Solutions</a></li>
              <li><a href="#freelance" style={{ transition: 'color 0.2s' }}>Freelance Development</a></li>
              <li><a href="#projects" style={{ transition: 'color 0.2s' }}>Featured Projects</a></li>
              <li><a href="#courses" style={{ transition: 'color 0.2s' }}>Online Courses</a></li>
              <li><a href="#skills" style={{ transition: 'color 0.2s' }}>Technical Skills</a></li>
              <li><a href="#how-it-works" style={{ transition: 'color 0.2s' }}>How It Works</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: '1.25rem' }}>
              Connect with Mohanraj
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <a href="mailto:mohanraj9677011@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} style={{ color: 'var(--color-accent)' }} />
                <span>mohanraj9677011@gmail.com</span>
              </a>
              <a href="https://wa.me/917395981362" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} style={{ color: 'var(--color-success)' }} />
                <span>+91 7395981362</span>
              </a>
              <a href="https://in.linkedin.com/in/moganraj" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <LinkedinIcon size={16} style={{ color: '#0A66C2' }} />
                <span>LinkedIn / moganraj</span>
              </a>
              <a href="https://github.com/lookmohan" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <GithubIcon size={16} style={{ color: 'var(--text-heading)' }} />
                <span>GitHub / lookmohan</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.88rem'
          }}
        >
          <p>© 2026 Chennai Coder. All Rights Reserved.</p>
          <p>Founded by Mohanraj • Chennai, India</p>
        </div>
      </div>
    </footer>
  );
};
