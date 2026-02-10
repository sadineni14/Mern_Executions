import React ,{useState}from 'react'
import './Counter1.css'

const Counter1 = () => {
  const [count, setCount] = useState(0)

  return (
   <div className="counter-box">
    <h1>Simple Counter</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>    
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h6>Developed by Chinnu @copy Rights Reserved </h6>
    </div>
  )
}

export default Counter1
