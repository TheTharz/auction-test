import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | auctionweb.site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 0'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '3rem',
          width: '100%'
        }}>
          <div style={{
            flex: '1',
            minWidth: '320px',
            maxWidth: '600px'
          }}>
            <div className="glass-card animate-fade-in-up" style={{
              textAlign: 'center',
              padding: '3rem 2rem'
            }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                A <span style={{
                  background: 'linear-gradient(135deg, #ffd700 0%, #ffc107 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Modern</span> Auction Platform
              </h1>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                marginBottom: '2rem',
                color: 'var(--text-secondary)',
                maxWidth: '500px',
                margin: '0 auto 2rem'
              }}>
                Experience the future of online auctions with our cutting-edge platform.
                Built with modern microservices architecture using TypeScript, Node.js, 
                MySQL, Docker and Kubernetes for robust backend performance, paired with 
                React and Next.js for seamless user experience.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link href="/listings">
                  <a className="glass-button glass-button-primary" style={{
                    textDecoration: 'none',
                    fontSize: '1rem',
                    padding: '1rem 2rem'
                  }}>
                    Explore Auctions
                  </a>
                </Link>
                <a
                  className="glass-button glass-button-secondary"
                  href="https://github.com/jarrodjm/auction-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    fontSize: '1rem',
                    padding: '1rem 2rem'
                  }}
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
          <div style={{
            flex: '1',
            minWidth: '320px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="glass-card animate-fade-in-up" style={{
              padding: '1.5rem',
              borderRadius: '20px',
              animationDelay: '0.2s'
            }}>
              <img
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '16px',
                  transition: 'transform 0.3s ease'
                }}
                src="https://shuffle.dev/metis-assets/illustrations/working-from-airport.png"
                alt="Auction Platform Illustration"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
