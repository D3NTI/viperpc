'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function SignUpForm() {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    const userInfo = await response.json();
    console.log(userInfo);
    router.push('/login');
  };

  return (
    <div className="sign-container">
      <form onSubmit={registerUser} className="sign-form">
        <div className="sperma">
          <h1>REGISTER</h1>
          <input
            value={data.name}
            placeholder="NAME"
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
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
        <h4>Already have an account?</h4>
        <Link href="/login">
          <h3>Click Here!</h3>
        </Link>

        <input type="submit" className="regButt" value={'REGISTRATE'} />
      </form>
    </div>
  );
}
