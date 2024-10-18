'use client';

import React, { useState } from 'react';
import CompCards from './CompCards';

export default function Components() {
  const [type, setType] = useState('standart');
  return (
    <div className="components-sec">
      <div className="bkg">
        <h1 id="components">COMPONENTS</h1>
        <div className="components-btns">
          <button onClick={() => setType('standart')}>Standart</button>
          <button onClick={() => setType('bootcamp')}>Boot Camp</button>
          <button onClick={() => setType('vip')}>VIP</button>
        </div>
        <div className="hpx">
          <CompCards type={type}></CompCards>
        </div>
      </div>
    </div>
  );
}
