import React, { useState } from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { PopOut } from './components/PopOut/PopOut';
import './App.css';


const App: React.FC = () => {
  return(
    <>
    <Calendar />
    <PopOut />
    </>
  )
};

export default App;
