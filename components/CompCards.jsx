import React, { useState } from 'react';
import Image from 'next/image';
import CPU from '../assets/cpu.png';
import RAM from '../assets/ram.png';
import Rtx from '../assets/Rtx.png';
import Disk from '../assets/Disk.png';
import Keyboard from '../assets/Keyboard.png';
import Mouse from '../assets/mouse.png';
import Head from '../assets/head.png';
import Monitor from '../assets/Monitor.png';
import Strelka from '../assets/Stralka.png';

export default function CompCards({ type }) {
  let Compo = {
    Cpu: 'INTEL CORE I7-13700F',
    Rtx: 'RTX 4070 SUPER',
    Ram: '32 GB 3200 MHZ',
    Disk: 'NVME SSD 256 GB',
    KeyBoard: 'ARDOP GAMING IMMORTALITY',
    Mouse: 'LAMZU ATLANTIS',
    Monitor: 'FRAGMACHINE 24.5”, 240HZ',
    HeadPh: 'HYPERX CLOUD 2',
  };
  switch (type) {
    case 'bootcamp':
      Compo = {
        Cpu: 'INTEL CORE I9-13700F',
        Rtx: 'RTX 4070 TI ',
        Ram: '64 GB 3200 MHZ',
        Disk: 'NVME SSD 256 GB',
        KeyBoard: 'ARDOP GAMING IMMORTALITY',
        Mouse: 'LAMZU ATLANTIS',
        Monitor: 'FRAGMACHINE 24.5”, 240HZ',
        HeadPh: 'HYPERX CLOUD 52',
      };
      break;
    case 'vip':
      Compo = {
        Cpu: 'INTEL CORE I9-16700F',
        Rtx: 'RTX 4070 TI ',
        Ram: '128 GB 3200 MHZ',
        Disk: 'NVME SSD 1TB',
        KeyBoard: 'HYPERX "Viperr 2.2"',
        Mouse: 'LAMZU ATLANTIS',
        Monitor: 'FRAGMACHINE 67.5”, 240HZ',
        HeadPh: 'HYPERX CLOUD 161',
      };
      break;
  }

  return (
    <div className="cards-section">
      <div className="first-comp">
        <h2 className="pp">
          COMPONENTS <Image src={Strelka} alt="" />
        </h2>

        <div className="row">
          <p>
            CPU <span>{Compo.Cpu}</span>
          </p>
          <Image src={CPU} alt="" />
        </div>
        <div className="row">
          <p>
            VIDEO CARD<span>{Compo.Rtx}</span>
          </p>
          <Image src={Rtx} alt="" />
        </div>
        <div className="row">
          <p>
            RAM<span>{Compo.Ram}</span>
          </p>
          <Image src={RAM} alt="" />
        </div>
        <div className="row">
          <p>
            HARD DRIVE<span>{Compo.Disk}</span>
          </p>
          <Image src={Disk} alt="" />
        </div>
      </div>
      <div className="second-comp">
        <h2 className="pp">
          ACCESSORIES <Image src={Strelka} alt="" />
        </h2>
        <div className="row">
          <p>
            HEADPHONES<span>{Compo.HeadPh}</span>
          </p>
          <Image src={Head} alt="" />
        </div>
        <div className="row">
          <p>
            MOUSE<span>{Compo.Mouse}</span>
          </p>
          <Image src={Mouse} alt="" />
        </div>
        <div className="row">
          <p>
            KEYBOARD<span>{Compo.KeyBoard}</span>
          </p>
          <Image src={Keyboard} alt="" />
        </div>
        <div className="row">
          <p>
            MONITOR<span>{Compo.Monitor}</span>
          </p>
          <Image src={Monitor} alt="" />
        </div>
      </div>
    </div>
  );
}
