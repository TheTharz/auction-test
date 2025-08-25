import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 0',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: '3rem'
    }}>
      <div className="container">
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '0.875rem',
          lineHeight: '1.6',
          margin: '0',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          © 2021 Jarrod Malkovic. This is not a real store and is hosted for demo
          purposes only. All database records are cleared regularly. See the code{' '}
          <a 
            href="https://github.com/jarrodmalkovic/auction-website"
            style={{
              color: 'rgba(116, 235, 213, 0.9)',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(116, 235, 213, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(116, 235, 213, 0.9)';
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
