'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';

export default function SignUpForm() {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    signIn('credentials', {
      ...data,
      redirect: false,
    });
    router.push('/account');
  };

  return (
    <div className="sign-container">
      <form onSubmit={loginUser} className="sign-form">
        <div className="sperma">
          <h1>LOGIN</h1>
          <input
            value={data.email}
            placeholder="EMAIL"
            type="emeil"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            value={data.password}
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <div className="circle"></div>
        </div>
        <h4> You don't have an account ?</h4>
        <Link href="/signup">
          <h3>Click Here!</h3>
        </Link>

        <input type="submit" className="regButt" value={'LOGIN'} />
      </form>
    </div>
  );
}
