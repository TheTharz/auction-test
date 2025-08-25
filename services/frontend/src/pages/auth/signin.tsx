import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import AppContext from '../../context/app-context';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Your email address must be a valid email')
    .max(100, 'Your email address must be less than 100 characters')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Passwords must be more than 4 characters')
    .max(32, 'Passwords must be less than 32 characters')
    .required('Required'),
});

const SignIn = () => {
  const { setAuth } = useContext(AppContext);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();

  const onSubmit = async (body) => {
    setIsSigningIn(true);

    try {
      const { data } = await axios.post('/api/auth/signin', body);
      setAuth({ isAuthenticated: true, currentUser: data });
      toast.success('Successfully signed in!');
      router.push('/');
    } catch (err) {
      err.response.data.errors.forEach((err) => toast.error(err.message));
    }

    setIsSigningIn(false);
  };

  return (
    <>
      <Head>
        <title>Sign In | auctionweb.site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        padding: '2rem 1rem'
      }}>
        <div className="glass-card animate-fade-in-up" style={{
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <img
              style={{
                height: '48px',
                width: 'auto',
                margin: '0 auto 1.5rem'
              }}
              src="/images/small-logo.svg"
              alt="Logo"
            />
            <h1 className="heading-2" style={{ marginBottom: '0.5rem' }}>
              Welcome Back
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem'
            }}>
              Sign in to your account to continue
            </p>
          </div>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{ textAlign: 'left' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Email address
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="glass-input"
                />
                <ErrorMessage 
                  name="email" 
                  component="div"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--error)',
                    marginTop: '0.25rem'
                  }}
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="glass-input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--error)',
                    marginTop: '0.25rem'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSigningIn}
                className="glass-button glass-button-primary"
                style={{
                  width: '100%',
                  fontSize: '1rem',
                  fontWeight: 600,
                  opacity: isSigningIn ? 0.7 : 1,
                  cursor: isSigningIn ? 'not-allowed' : 'pointer'
                }}
              >
                {isSigningIn ? 'Signing in...' : 'Sign in'}
              </button>
            </Form>
          </Formik>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem 0 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              marginBottom: '1rem'
            }}>
              Don't have an account?
            </p>
            <a 
              href="/auth/signup"
              className="glass-button glass-button-secondary"
              style={{
                textDecoration: 'none',
                fontSize: '0.875rem'
              }}
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
