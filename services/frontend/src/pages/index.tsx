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
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 2rem 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
        }
        
        .content-section {
          flex: 1;
          min-width: 300px;
          color: white;
        }
        
        .content-wrapper {
          max-width: 500px;
          margin: 0 auto;
          text-align: center;
        }
        
        .main-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #ffd700;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .description {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .button-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .primary-button {
          background: linear-gradient(45deg, #ff6b6b, #ee5a24);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
        }
        
        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(238, 90, 36, 0.4);
          background: linear-gradient(45deg, #ee5a24, #ff6b6b);
        }
        
        .secondary-button {
          color: #ffd700;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 1rem 1.5rem;
          border: 2px solid #ffd700;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        
        .secondary-button:hover {
          background: #ffd700;
          color: #667eea;
          transform: translateY(-2px);
        }
        
        .image-section {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .hero-image {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
        }
        
        .hero-image:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          
          .content-wrapper {
            text-align: center;
          }
          
          .button-group {
            flex-direction: column;
            align-items: center;
          }
          
          .primary-button,
          .secondary-button {
            width: 200px;
            text-align: center;
          }
        }
      `}</style>
      <section className="hero-section">
        <div className="container">
          <div className="content-section">
            <div className="content-wrapper">
              <h1 className="main-title">
                <span>A </span>
                <span className="highlight">Modern</span>
                <span> Auction Platform</span>
              </h1>
              <p className="description">
                Experience the future of online auctions with our cutting-edge platform.
                Built with modern microservices architecture using TypeScript, Node.js, 
                MySQL, Docker and Kubernetes for robust backend performance, paired with 
                React and Next.js for seamless user experience.
              </p>
              <div className="button-group">
                <Link href="/listings">
                  <a className="primary-button">
                    Explore Auctions
                  </a>
                </Link>
                <a
                  className="secondary-button"
                  href="https://github.com/jarrodjm/auction-website"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="image-section">
            <img
              className="hero-image"
              src="https://shuffle.dev/metis-assets/illustrations/working-from-airport.png"
              alt="Auction Platform Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
