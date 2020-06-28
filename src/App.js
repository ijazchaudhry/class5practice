import React from 'react';
import './App.css';
import Parent from './Parent';
import { useState } from 'react';
import ValueContext from './ValueContext';

function App() {
  let value =useState(48);
  
  return (
    <ValueContext.Provider value={value}>
    <div>

      hello world 
      <Parent ></Parent>    
    </div> 
    </ValueContext.Provider>
  );
}

export default App;
