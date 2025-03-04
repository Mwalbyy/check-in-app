// src/components/PopOut/PopOut.tsx
import React from 'react';
import './PopOut.css';
import { format } from 'date-fns';

interface PopOutProps {
  selectedDay: Date;
  onClose: () => void;
}

export const PopOut: React.FC<PopOutProps> = ({ selectedDay, onClose }) => {
  return (
    <div className="popOutOverlay">
      <div className="popOutContent">
        <h2>{format(selectedDay, 'EEEE, MMMM d, yyyy')}</h2>
        <p>This is a pop out for the day.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
