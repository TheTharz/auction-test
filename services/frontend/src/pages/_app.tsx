import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import buildClient from '../api/base-client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AppContext from '../context/app-context';

interface IProps extends AppProps {
  currentUser: any;
}

const MyApp = ({ Component, pageProps, currentUser }: IProps) => {
  const [auth, setAuth] = useState({
    isAuthenticated: !!currentUser,
    currentUser,
  });

  return (
    <AppContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <Navbar />
        <main style={{
          flex: '1',
          padding: '2rem 0'
        }}>
          <div className="container">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastClassName="glass-toast"
        />
      </div>
    </AppContext.Provider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/auth/current-user');
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client
    );
  }

  return { ...data, pageProps };
};

export default MyApp;
