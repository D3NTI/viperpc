import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function NavMobile() {
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
      <Link className="link" href="/account">
        Account
      </Link>
    </div>
  );
}
