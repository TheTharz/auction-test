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
  name: Yup.string()
    .min(4, 'Your username must be more than 4 characters')
    .max(32, 'Your username must be less than 32 characters')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Passwords must be more than 4 characters')
    .max(32, 'Passwords must be less than 32 characters')
    .required('Required'),
  passwordConfirm: Yup.string()
    .min(4, 'Passwords must be more than 4 characters')
    .max(32, 'Passwords must be less than 32 characters')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Required'),
});

const SignUp = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const { setAuth } = useContext(AppContext);
  const router = useRouter();

  const onSubmit = async (body) => {
    setIsSigningUp(true);

    try {
      const { data } = await axios.post('/api/auth/signup', body);
      setAuth({ isAuthenticated: true, currentUser: data });
      toast.success('Successfully signed up!');
      router.push('/');
    } catch (err) {
      err.response.data.errors.forEach((err) => toast.error(err.message));
    }

    setIsSigningUp(false);
  };

  return (
    <>
      <Head>
        <title>Sign Up | auctionweb.site</title>
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
          maxWidth: '420px',
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
              Create Account
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem'
            }}>
              Join our auction platform today
            </p>
          </div>

          <Formik
            initialValues={{
              email: '',
              name: '',
              password: '',
              passwordConfirm: '',
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
                  Username
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Choose a username"
                  className="glass-input"
                />
                <ErrorMessage
                  name="name"
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
                  placeholder="Create a password"
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

              <div style={{ textAlign: 'left' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm your password"
                  className="glass-input"
                />
                <ErrorMessage
                  name="passwordConfirm"
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
                disabled={isSigningUp}
                className="glass-button glass-button-primary"
                style={{
                  width: '100%',
                  fontSize: '1rem',
                  fontWeight: '600',
                  opacity: isSigningUp ? 0.7 : 1,
                  cursor: isSigningUp ? 'not-allowed' : 'pointer'
                }}
              >
                {isSigningUp ? 'Creating Account...' : 'Create Account'}
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
              Already have an account?
            </p>
            <a 
              href="/auth/signin"
              className="glass-button glass-button-secondary"
              style={{
                textDecoration: 'none',
                fontSize: '0.875rem'
              }}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
                  <ErrorMessage component={StyledErrorMessage} name="email" />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage component={StyledErrorMessage} name="name" />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    type="text"
                    name="password"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    component={StyledErrorMessage}
                    name="password"
                  />
                </div>

                <div>
                  <label
                    htmlFor="passwordConfirm"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirm
                  </label>
                  <Field
                    type="text"
                    name="passwordConfirm"
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    component={StyledErrorMessage}
                    name="passwordConfirm"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {isSigningUp ? 'Signing up...' : 'Sign up'}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
