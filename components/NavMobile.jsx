'use client';
import { useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function NavMobile() {
  const { data: session } = useSession(); // useSession()
  const [userIn, setUserIn] = useState(false);
  useEffect(() => {
    if (session != undefined) {
      setUserIn(true);
    }
  }, [session]);

  return (
    <div className="mobile-menu">
      <Link className="link" href="#gallery">
        Gallery
      </Link>
      <Link className="link" href="#price">
        Price
      </Link>
      <Link className="link" href="#components">
        PC components
      </Link>
      <Link className="link" href="#footer">
        Contacts
      </Link>
      <Link className="link" href="#reservation">
        Reservation
      </Link>

      {userIn ? (
        <Link className="link" href="/account">
          Account
        </Link>
      ) : (
        <Link className="link" href="/login">
          Sign In
        </Link>
      )}
    </div>
  );
}
