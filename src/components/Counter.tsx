import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(10);
  
  const increseBy = (value: number)=>{
    console.log("el numero es", value);
    
    setCount(count + value);
  }


  return (
    <>
    <h3>COntador: <small>{count}</small></h3>
    <div>
      <button onClick={()=> increseBy(1)}>+1</button>
      &nbsp;
      <button onClick={()=> increseBy(-1)}>-1</button>

    </div>
    </>
  )
}