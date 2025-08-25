import axios from 'axios';
import React, { useContext, useState } from 'react';

import AppContext from '../context/app-context';
import CloseIcon from './CloseIcon';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import Logo from './Logo';
import NavbarTab from './NavbarTab';
import SearchBar from './SearchBar';
import DesktopUserMenu from './UserMenu';

const Navbar = () => {
  const {
    auth: { isAuthenticated, currentUser },
    setAuth,
  } = useContext(AppContext);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const onClick = async () => {
    try {
      await axios.post('/api/auth/signout');
      setAuth({ isAuthenticated: false, currentUser: null });
    } catch (err) {}
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px',
          padding: '0 1rem'
        }}>
          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <Logo />
            <div style={{
              display: 'none',
              gap: '2rem',
              alignItems: 'center'
            }} className="desktop-nav">
              <NavbarTab href="/" name="Home" />
              <NavbarTab href="/listings" name="Browse Listings" />
              {isAuthenticated && (
                <NavbarTab href="/sell" name="Sell an Item" />
              )}
            </div>
          </div>

          {/* Desktop Search and User Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div className="desktop-search" style={{ display: 'none' }}>
              <SearchBar />
            </div>
            
            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setShowMobileNav(!showMobileNav)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '8px',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              className="mobile-menu-btn"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <span style={{ display: 'none' }}>Open main menu</span>
              {showMobileNav ? <CloseIcon /> : <HamburgerMenuIcon />}
            </button>

            {/* Desktop User Menu */}
            {isAuthenticated ? (
              <div className="desktop-user-menu" style={{ display: 'none' }}>
                <DesktopUserMenu />
              </div>
            ) : (
              <div className="desktop-nav" style={{ 
                display: 'none',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <NavbarTab href="/auth/signin" name="Sign in" />
                <NavbarTab href="/auth/signup" name="Sign up" />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileNav && (
          <div style={{
            display: 'block',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            margin: '0.5rem',
            padding: '1rem',
            animationName: 'fadeIn',
            animationDuration: '0.3s'
          }} className="mobile-nav-menu">
            {/* Mobile Search */}
            <div style={{ marginBottom: '1rem' }}>
              <SearchBar />
            </div>
            
            {/* Mobile Navigation Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <NavbarTab href="/" name="Home" />
              <NavbarTab href="/listings" name="Browse Listings" />
              {isAuthenticated && <NavbarTab href="/sell" name="Sell an Item" />}
            </div>

            {/* Mobile User Section */}
            <div style={{ paddingTop: '1rem' }}>
              {isAuthenticated && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '1rem'
                }}>
                  <div style={{ flexShrink: 0, marginRight: '0.75rem' }}>
                    <img
                      style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}
                      src={currentUser.avatar}
                      alt="Your Profile Picture"
                    />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'white'
                    }}>
                      {currentUser.name}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      {currentUser.email}
                    </div>
                  </div>
                </div>
              )}
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {isAuthenticated ? (
                  <>
                    <NavbarTab href={`/profile/${currentUser.name}`} name="Your Profile" />
                    <NavbarTab href="/dashboard/listings" name="Dashboard" />
                    <NavbarTab href="/settings/profile" name="Settings" />
                    <button
                      onClick={onClick}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.8)',
                        padding: '0.75rem 1rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        fontSize: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'none';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                      }}
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <NavbarTab href="/auth/signin" name="Sign in" />
                    <NavbarTab href="/auth/signup" name="Sign up" />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav,
          .desktop-search,
          .desktop-user-menu {
            display: flex !important;
          }
          
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-nav,
          .desktop-search,
          .desktop-user-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
