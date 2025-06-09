'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

interface Props {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function SeleccionarDia({ selectedDate, onSelectDate }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const startWeekday = (firstDay.getDay() + 6) % 7;
    const calendar: (number | null)[][] = [];
    let week: (number | null)[] = new Array(startWeekday).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      while (week.length < 7) week.push(null);
      calendar.push(week);
    }
    return calendar;
  };

  const calendar = getDaysInMonth(currentDate);

  const handleMonthChange = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Limpiar hora

  const isSelected = (day: number) =>
    selectedDate &&
    selectedDate.getDate() === day &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear();

  const isPast = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return date < today;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto border border-cyan-100">
      {/* Month Selector */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => handleMonthChange('prev')}
          className="p-2 rounded-full bg-cyan-400 hover:bg-cyan-500 hover:scale-110 transition shadow-md"
        >
          <Image src="/svg/arrow-left.svg" alt="Anterior" width={20} height={20} />
        </button>
        <p className="text-lg font-bold capitalize">
          {currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
        </p>
        <button
          onClick={() => handleMonthChange('next')}
          className="p-2 rounded-full bg-cyan-400 hover:bg-cyan-500 hover:scale-110 transition shadow-md"
        >
          <Image src="/svg/arrow-right.svg" alt="Siguiente" width={20} height={20} />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm font-bold text-gray-700 mb-2">
        {weekDays.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 text-center gap-1 text-sm h-[300px]">
        {calendar.flat().map((day, i) => {
          const disabled = !day || isPast(day);
          return (
            <button
              key={i}
              disabled={disabled}
              onClick={() =>
                day && onSelectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day, 12))
              }
              className={`w-10 h-10 rounded-full ${
                day
                  ? isSelected(day)
                    ? 'bg-cyan-600 text-white font-bold'
                    : disabled
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'hover:bg-cyan-100'
                  : 'cursor-default'
              }`}
            >
              {day || ''}
            </button>
          );
        })}
      </div>
    </div>
  );
}
