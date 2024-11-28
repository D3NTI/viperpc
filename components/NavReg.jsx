'use client';
import React from 'react';
import Logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function NavReg() {
  const { data: session } = useSession();
  const [userIn, setUserIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session != undefined) {
      setUserIn(true);
    }
  }, [session]);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut({ redirect: false });
    router.push('/');
  };

  return (
    <div className="navi">
      <Link href="/">
        <Image className="logo" src={Logo} alt="" />
      </Link>

      <div className="naav-btns">
        {userIn ? (
          <Link href="/" onClick={handleSignOut}>
            Sign out
          </Link>
        ) : (
          <>
            <Link href="/login">Sign in</Link>
            <Link href="/signup">Sign up</Link>
          </>
        )}
      </div>
    </div>
  );
}
