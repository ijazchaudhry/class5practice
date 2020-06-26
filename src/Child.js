import React,{useContext}from 'react';
import ValueContext from './ValueContext';


function Child() {
  let value = useContext(ValueContext);
  return (
    <div>
      child number {value}
    </div>
  );
}

export default Child;
