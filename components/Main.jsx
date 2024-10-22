import React from 'react';
import Image from 'next/image';
import Mice from '../assets/mice.png';
import Link from 'next/link';
export default function Main() {
  return (
    <div className="main">
      <div className="left-section">
        <h2>EXCLUSIVE COMPUTER CLUB!</h2>
        <h1>VIPERR PC CLUB</h1>
        <ul className="main-list">
          <li>Best place to chill with your friends</li>
          <li>Only the best computers </li>
          <li> Lounge zone with cafe and bar</li>
        </ul>
        <Link className="main-btn" href="#reserv">
          RESERVATION
        </Link>
      </div>
      <div className="right-section">
        <Image src={Mice} alt="" />
      </div>
    </div>
  );
}
