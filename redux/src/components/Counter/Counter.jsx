

import React from 'react';
import { 
  increment,
    // decrement,
    // incrementByAmount,
    // decrementByAmount,
} from "../../store/counterSlice";

import { useDispatch, useSelector } from 'react-redux';




const Counter = () => {
    const dispatch = useDispatch();
    const counterVal = useSelector((state) => state);
    const handleIncrement = () => {  
        dispatch(increment());
    };



console.log(counterVal);
  return (
     <>
<button onClick={handleIncrement}>Increment</button>
<button>Decrement</button>
<button>Increment By Amount</button>
<button>Decrement By Amount</button>
    </>
  );
};

export default Counter;






