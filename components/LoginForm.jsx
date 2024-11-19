'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';
import styles from './SignUpForm.module.css';

export default function SignUpForm() {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn('credentials', {
        redirect: false,
        ...data,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/account');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred');
    }
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { msg: 'Invalid credentials', status: 'error' };
        case 'CredentialsSignin':
          throw error;
        default:
          return { msg: 'Something went wrong', status: 'error' };
      }
    }
  };

  return (
    <div className={styles.signContainer}>
      <form onSubmit={loginUser} className={styles.signForm}>
        <div className={styles.formContent}>
          <h1>LOGIN</h1>
          <input
            value={data.email}
            placeholder="EMAIL"
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
            className={styles.input}
          />
          <input
            value={data.password}
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            className={styles.input}
          />

          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.circle}></div>
        </div>
        <h4>Don't have an account?</h4>
        <Link href="/signup" className={styles.signupLink}>
          <h3>Sign Up!</h3>
        </Link>

        <input type="submit" className={styles.submitButton} value="LOGIN" />
      </form>
    </div>
  );
}
