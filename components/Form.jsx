'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import emailjs from '@emailjs/browser';

export default function Form() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [showNotification, setShowNotification] = useState(false);

  const [data, setData] = useState({
    selectedOption: '',
    num: '',
    date: '',
    tel: '',
  });

  async function onSubmit(event) {
    event.preventDefault();
    z;
    if (status !== 'authenticated') return;

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
          userId: session.user.id,
        }),
      });
      const reserveInfo = await response.json();
      console.log(reserveInfo);

      // Показываем уведомление
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      // Очищаем форму
      setData({
        selectedOption: '',
        num: '',
        date: '',
        tel: '',
      });
    } catch (error) {
      console.error('Submission failed:', error);
    }
  }

  const options = [
    { value: '', label: 'Please select' },
    { value: 'standart', label: 'Standart' },
    { value: 'vip', label: 'Vip' },
    { value: 'Bootcamp', label: 'Bootcamp' },
    { value: 'VIP-room', label: 'Vip Room' },
    { value: 'TV-rent', label: 'Tv Rent' },
  ];

  if (status === 'loading') {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }
  // Emeil send

  return (
    <div className="form-container">
      <form
        onSubmit={onSubmit}
        className={`reservation-form ${
          status !== 'authenticated' ? 'form-blur' : ''
        }`}
      >
        <Image src={Logo} alt="" />
        <input
          value={data.num}
          type="number"
          name="numGuest"
          placeholder="HOURS"
          onChange={(e) => setData({ ...data, num: e.target.value })}
          disabled={status !== 'authenticated'}
        />

        <input
          value={data.date}
          type="date"
          name="date"
          placeholder="CHOOSE DATE"
          onChange={(e) => setData({ ...data, date: e.target.value })}
          disabled={status !== 'authenticated'}
        />

        <input
          value={data.tel}
          type="tel"
          name="tel"
          placeholder="PHONE NUMBER"
          onChange={(e) => setData({ ...data, tel: e.target.value })}
          disabled={status !== 'authenticated'}
        />

        <h3>
          SELECTION FOR RESERVATION
          <span>
            <select
              value={data.selectedOption}
              onChange={(e) =>
                setData({ ...data, selectedOption: e.target.value })
              }
              disabled={status !== 'authenticated'}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </span>
        </h3>

        <input
          className="bdn"
          type="submit"
          value="Reserve"
          disabled={status !== 'authenticated'}
        />
      </form>

      {status !== 'authenticated' && (
        <div className="auth-message">Please log in to make a reservation</div>
      )}

      {showNotification && (
        <div className="notification">Reservation successfully added!</div>
      )}
    </div>
  );
}
