import React from 'react';
import Logo from '../assets/logo.png';
import Image from 'next/image';
export default function Preview() {
  return (
    <div className="preview">
      <Image src={Logo} alt="" />
      <Image src={Logo} alt="" />
      <Image src={Logo} alt="" />
      <Image src={Logo} alt="" />
    </div>
  );
}
