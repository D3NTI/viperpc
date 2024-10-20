import React from 'react';
import Logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NavReg() {
  return (
    <div className="navi">
      <Link href="/">
        <Image className="logo" src={Logo} alt="" />
      </Link>
      <div className="naav-btns">
        <Link href="/login">Sign in</Link>
        <Link href="/signup">Sign up</Link>{' '}
      </div>
    </div>
  );
}
