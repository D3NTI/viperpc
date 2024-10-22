'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Ava from '../assets/ava.png';
import LeftIn from '../components/LeftIn';
import RightIn from '../components/RightIn';
import Image from 'next/image';
export default function InAccount() {
  const { data: session } = useSession(); // useSession()
  const [userData, setUserData] = useState({
    name: 'Loading...',
    email: 'Loading...',
  });
  useEffect(() => {
    if (session) {
      setUserData(session.user);
    }
  }, [session]);
  return (
    <div className="inacc-container">
      <div className="inacc">
        <div className="top">
          <Image src={Ava} alt="" />
          <h1>Hi, {userData.name}!</h1>
        </div>
        <div className="pp">
          <div className="left-inacc">
            <LeftIn userData={userData}></LeftIn>
          </div>
          <div className="right-inacc">
            <RightIn></RightIn>
          </div>
        </div>
      </div>
    </div>
  );
}
