import Link from 'next/link';
import React from 'react';

import { centsToDollars } from '../utils/cents-to-dollars';
import Countdown from './Countdown';

interface IProps {
  name: string;
  expiresAt: string;
  price: number;
  slug: string;
  smallImage: string;
}

const ListingCard = ({ name, price, slug, smallImage, expiresAt }: IProps) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '320px',
      margin: '0 auto 1.5rem'
    }}>
      <Link href={slug}>
        <a style={{ textDecoration: 'none' }}>
          <div className="glass-card" style={{
            padding: '0',
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}>
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px 16px 0 0'
            }}>
              <img 
                src={smallImage} 
                alt={name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)'
              }} />
            </div>
            
            <div style={{
              padding: '1.5rem'
            }}>
              <div style={{
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                lineHeight: '1.4'
              }}>
                {name}
              </div>
              
              <div style={{
                color: 'var(--text-accent)',
                fontSize: '0.875rem',
                marginBottom: '1rem',
                fontWeight: 500
              }}>
                <Countdown expiresAt={expiresAt} />
              </div>
              
              <div style={{
                color: 'var(--text-primary)',
                fontSize: '1.25rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {centsToDollars(price)}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ListingCard;
