import React from 'react';

import ActiveLink from './ActiveLink';

interface IProps {
  href: string;
  name: string;
}

const NavbarTab = ({ href, name }: IProps) => {
  return (
    <>
      {/* Desktop NavbarTab */}
      <ActiveLink href={href}>
        <a style={{
          display: 'none',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          color: 'rgba(255, 255, 255, 0.9)',
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          border: '1px solid transparent'
        }}
        className="desktop-nav-link"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'transparent';
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
        }}>
          {name}
        </a>
      </ActiveLink>
      
      {/* Mobile NavbarTab */}
      <ActiveLink href={href}>
        <a style={{
          display: 'block',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          color: 'rgba(255, 255, 255, 0.9)',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          border: '1px solid transparent'
        }}
        className="mobile-nav-link"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'transparent';
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
        }}>
          {name}
        </a>
      </ActiveLink>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav-link {
            display: flex !important;
          }
          .mobile-nav-link {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-nav-link {
            display: none !important;
          }
          .mobile-nav-link {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default NavbarTab;
