import React, { useState } from 'react'
import './Counter.css'

const Counter = ({step = 2}) => {
	const [count, setCount] = useState(0)
	
	function Plus() {
		setCount(count + step)
	}
	function Minus() {
    setCount(count - step);
	}
	function Zero() {
    setCount(0);
  }
  return (
    <div className='Counter'>
      <h2>{count}</h2>
      <button onClick={Minus}>-{step}</button>
      <button onClick={Zero}>0</button>
      <button onClick={Plus}>+{step}</button>
     
    </div>
  );
}

export default Counter
