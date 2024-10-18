'use client';
import React from 'react';

export default function LeftIn({ userData }) {
  return (
    <div className="inf-cont">
      <div className="data">
        <h1>Login:</h1>
        <h2> {userData.name}</h2>

        <h1>Email:</h1>
        <h2>{userData.email}</h2>
      </div>
    </div>
  );
}
