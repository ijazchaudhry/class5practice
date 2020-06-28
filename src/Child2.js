import React,{useContext,useReducer} from 'react';
import NumberReducer from './NumberReducer';



function Child2() {
    let [state, dispatch]=useReducer(NumberReducer,52);
  return (
    <div>
      child2 {state}
      <button onClick={()=> {dispatch({type:"INCREMENT", val:10});}}>Increment</button>
      <button onClick={()=> {dispatch({type:"DECREMENT", val:10});}}>Decrement</button>
    </div>
  );
}

export default Child2;
