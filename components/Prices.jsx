'use client';

import React, { useState } from 'react';
import Cards from './Cards';

export default function Prices() {
  const [type, setType] = useState();

  return (
    <div className="prices-sections" id="price">
      <div className="gg">
        <p className="xxx">Prices</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="693"
          height="124"
          viewBox="0 0 693 124"
          fill="none"
        >
          <path d="M0 123.5H63" stroke="white" />
          <path d="M116 123.5H179" stroke="white" />
          <path d="M232 123.5H295" stroke="white" />
          <path d="M347 123.5H410" stroke="white" />
          <path d="M462 123.5H525" stroke="white" />
          <path d="M578 123.5H641" stroke="white" />
          <line
            x1="0.545585"
            y1="123.791"
            x2="56.5456"
            y2="1.79142"
            stroke="white"
          />
          <line
            x1="62.54"
            y1="123.804"
            x2="114.54"
            y2="1.80396"
            stroke="white"
          />
          <line
            x1="116.546"
            y1="123.791"
            x2="172.546"
            y2="1.79142"
            stroke="white"
          />
          <line
            x1="178.54"
            y1="123.804"
            x2="230.54"
            y2="1.80396"
            stroke="white"
          />
          <line
            x1="231.546"
            y1="123.791"
            x2="287.546"
            y2="1.79142"
            stroke="white"
          />
          <line
            x1="294.54"
            y1="123.804"
            x2="346.54"
            y2="1.80396"
            stroke="white"
          />
          <line
            x1="347.546"
            y1="123.791"
            x2="403.546"
            y2="1.79142"
            stroke="white"
          />
          <line
            x1="409.54"
            y1="123.804"
            x2="461.54"
            y2="1.80396"
            stroke="white"
          />
          <line
            x1="462.546"
            y1="123.791"
            x2="518.546"
            y2="1.79142"
            stroke="white"
          />
          <line
            x1="524.54"
            y1="123.804"
            x2="576.54"
            y2="1.80396"
            stroke="white"
          />
          <line
            x1="578.546"
            y1="123.791"
            x2="634.546"
            y2="1.79142"
            stroke="white"
          />
          <line
            x1="640.54"
            y1="123.804"
            x2="692.54"
            y2="1.80396"
            stroke="white"
          />
          <line x1="56" y1="0.5" x2="115" y2="0.5" stroke="white" />
          <line x1="172" y1="0.5" x2="231" y2="0.5" stroke="white" />
          <line x1="288" y1="0.5" x2="347" y2="0.5" stroke="white" />
          <line x1="403" y1="0.5" x2="462" y2="0.5" stroke="white" />
          <line x1="518" y1="0.5" x2="577" y2="0.5" stroke="white" />
          <line x1="634" y1="0.5" x2="693" y2="0.5" stroke="white" />
        </svg>
      </div>
      <div className="bar">
        <button onClick={() => setType('standart')}>Standart</button>
        <button onClick={() => setType('bootcamp')}>Boot Camp</button>
        <button onClick={() => setType('vip')}>VIP</button>
        <button onClick={() => setType('vip6')}>VIP Room 6pc + ps</button>
        <button onClick={() => setType('tv')}>Tv Rent</button>
      </div>
      <Cards type={type}></Cards>
    </div>
  );
}
