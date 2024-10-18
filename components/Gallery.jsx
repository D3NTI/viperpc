import React from 'react';
import Vip from '../assets/vip.png';
import Cat from '../assets/cat.png';
import Ice from '../assets/ice.png';
import Alabaster from '../assets/alabaster.png';
import Dog from '../assets/dog.png';
import Part from '../assets/part.png';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="top-side">
        <Image height={286} className="Ice" src={Ice} alt="" />
        <Image height={286} className="Dog" src={Dog} alt="" />
        <Image height={286} className="Alabaster" src={Alabaster} alt="" />
      </div>
      <div className="bottom-side">
        <Image height={286} className="Vip" src={Vip} alt="" />
        <Image height={286} className="Cat" src={Cat} alt="" />
      </div>
      <Image height={286} className="Part" src={Part} alt="" />
    </div>
  );
}
