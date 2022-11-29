import React from 'react';
import { useState } from 'react';

function SimpleCounter() {

  const intialCount = 0;
  const [count, setCount] = useState(0);

  const addOnClick = () => {
    setCount(count + 1)
  }

  const lessOnClick = () => {
    setCount(count - 1)
  };

  const resetOnClick = () => {
    setCount(intialCount)
  }

  return (
    <div className='text-center'>
      <h5 className='my-4'>Simple Counter</h5>
      <h2>{count}</h2>
      <div>
        <button className='btn btn-success m-3' onClick={addOnClick}>Add</button>
        <button className='btn btn-danger m-3' onClick={lessOnClick}>less</button>
        <button className='btn btn-warning m-3' onClick={resetOnClick}>Reset</button>
      </div>
    </div>
  )
}

export default SimpleCounter