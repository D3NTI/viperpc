'use client';
import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import NavMobile from './NavMobile';
import autoAnimate from '@formkit/auto-animate';

export default function Nav() {
  const { data: session } = useSession(); // useSession()
  const [userIn, setUserIn] = useState(false);
  useEffect(() => {
    if (session != undefined) {
      setUserIn(true);
    }
  }, [session]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="nav " ref={parent}>
      <div className="dla">
        <Image src={Logo} alt="" />
        <div className="mb-btn">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64px"
              height="64px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              stroke="#ff0000"
              transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.624"
              />

              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M4 18L20 18"
                  stroke="#eb33ff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />{' '}
                <path
                  d="M4 12L20 12"
                  stroke="#eb33ff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />{' '}
                <path
                  d="M4 6L20 6"
                  stroke="#eb33ff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />{' '}
              </g>
            </svg>
          </button>
        </div>
      </div>
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

      {isOpen ? <NavMobile /> : ''}
    </div>
  );
}
