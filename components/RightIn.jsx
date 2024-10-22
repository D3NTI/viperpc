'use client';
import React from 'react';
import { useState, useEffect } from 'react';

export default function RightIn() {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch('/api/showReservations', {
        method: 'GET',
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      // Проверяем, что data является массивом
      if (Array.isArray(data)) {
        setReservations(data);
      } else {
        console.error('Received data is not an array:', data);
        setReservations([]);
      }
    } catch (error) {
      console.error('Error fetching reservations:', error);
      setReservations([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="rig-con">
        <h1>Reservation History</h1>
        <div className="history">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="rig-con">
      <h1>Reservation History</h1>
      <div className="history">
        {Array.isArray(reservations) && reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div key={reservation.id}>
              <h2>
                {reservation.selectedOption}
                <span>{reservation.date}</span>
                <span>{reservation.num} h</span>
              </h2>
            </div>
          ))
        ) : (
          <h2>No reservations found</h2>
        )}
      </div>
    </div>
  );
}
