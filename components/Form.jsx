'use client';
import Image from 'next/image';
import React from 'react';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();
  const [data, setData] = useState({
    selectedOption: '',
    num: '',
    date: '',
    tel: '',
  });

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
      }),
    });
    const reserveInfo = await response.json();
    console.log(reserveInfo);
  }

  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: '', label: 'Please select an option' },
    { value: 'standart', label: 'Standart' },
    { value: 'vip', label: 'Vip' },
    { value: 'Bootcamp', label: 'Bootcamp' },
    { value: 'VIP-room', label: 'Vip Room' },
    { value: 'TV-rent', label: 'Tv Rent' },
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="reservation-form">
      <Image src={Logo} alt="" />
      <input
        value={data.num}
        type="number"
        name="numGuest"
        placeholder="HOURS"
        onChange={(e) => setData({ ...data, num: e.target.value })}
      />

      <input
        value={data.date}
        type="date"
        name="date"
        placeholder="CHOOSE DATE"
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />

      <input
        value={data.tel}
        type="tel"
        name="tel"
        placeholder="PHONE NUMBER"
        onChange={(e) => setData({ ...data, tel: e.target.value })}
      />
      <h3>
        SELECTION FOR RESERVATION
        <span>
          {/* <select name="SELECTION FOR RESERVATION" id="selec">
            <option value="1">STANDART</option>
            <option value="2">VIP</option>
            <option value="3">BOOTCAMP</option>
            <option value="4">VIP ROOM</option>
            <option value="5">TV RENT</option>
          </select> */}

          <select
            value={data.selectedOption}
            onChange={(e) =>
              setData({ ...data, selectedOption: e.target.value })
            }
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </span>
      </h3>

      <input type="submit" value="Reserve" />
    </form>
  );
}
