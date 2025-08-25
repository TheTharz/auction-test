import Link from 'next/link';
import React from 'react';

interface IProps {
  children: JSX.Element[];
}

const Breadcrumbs = ({ children }: IProps) => {
  return (
    <nav 
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        padding: '1rem 0'
      }}
    >
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }}>
        {children.map((val, i) =>
          i === 0 ? (
            <li key={i}>
              <Link href="/">
                <a style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }}>
                  <svg
                    style={{
                      height: '20px',
                      width: '20px'
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span style={{ display: 'none' }}>Home</span>
                </a>
              </Link>
            </li>
          ) : (
            <li key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <svg
                style={{
                  flexShrink: 0,
                  height: '20px',
                  width: '20px',
                  color: 'rgba(255, 255, 255, 0.4)'
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              {val}
            </li>
          )
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
