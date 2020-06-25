import React from 'react';
import './App.css';
import Parent from './Parent';
import { useState } from 'react';

function App() {
  let [number, setNumber] =useState(45);
  return (
    <div>

      hello world 
      <Parent num={number}></Parent>

      <button onClick={()=>{setNumber(++number) }} >Update Number</button>

      
    </div>
  );
}

export default App;
