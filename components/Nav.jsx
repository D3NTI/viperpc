'use client';
import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Nav() {
  const { data: session } = useSession(); // useSession()
  const [userIn, setUserIn] = useState(false);
  useEffect(() => {
    if (session != undefined) {
      setUserIn(true);
    }
  }, [session]);
  return (
    <div className="nav">
      <Image src={Logo} alt="" />
      <ul className="nav-butt">
        <li>
          <Link href="#gallery">Gallery</Link>
        </li>
        <li>
          <Link href="#price">Price</Link>
        </li>
        <li>
          <Link href="#components">PC components</Link>
        </li>

        <li>
          <Link href="#footer">Contacts</Link>
        </li>
      </ul>
      <div className="nav-btns">
        <Link href="#reserv">Reservation</Link>(
        {userIn ? (
          <Link href="/account">Account</Link>
        ) : (
          <Link href="/login">Sign In</Link>
        )}
        )
      </div>
      <div className="mb-btn">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64px"
            height="64px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            stroke="#ff0000"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.624"
            />

            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M4 18L20 18"
                stroke="#eb33ff"
                stroke-width="2.4"
                stroke-linecap="round"
              />{' '}
              <path
                d="M4 12L20 12"
                stroke="#eb33ff"
                stroke-width="2.4"
                stroke-linecap="round"
              />{' '}
              <path
                d="M4 6L20 6"
                stroke="#eb33ff"
                stroke-width="2.4"
                stroke-linecap="round"
              />{' '}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
