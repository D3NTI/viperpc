'use client';
import React from 'react';
import { useState, useEffect } from 'react';
export default function RightIn() {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('/api/showReservations', { method: 'GET' }, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        setLoading(false);
      });
  }, []);
  console.log(reservations);
  if (loading)
    return (
      <div className="rig-con">
        <h1>Reservation Histrory</h1>
        <div className="history">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  return (
    <div className="rig-con">
      <h1>Reservation Histrory</h1>
      <div className="history">
        {reservations.map((reservation) => (
          <div key={reservation.id}>
            <h2>
              {reservation.selectedOption}
              <span>{reservation.date}</span>
              <span>{reservation.num} h</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
