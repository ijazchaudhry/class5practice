import React, { useState } from 'react';
import Child from './Child';

function Parent(props) {
   
  return (
    <div>
      parent
      <Child num={props.num}/>
    </div>
  );
}

export default Parent;
