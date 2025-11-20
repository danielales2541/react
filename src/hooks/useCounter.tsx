import React, { useState } from 'react'
interface Option {
  initialValue: number;
}

export const useCounter = ({initialValue}: Option) => {
     const [count, setCount] = useState<number>(initialValue);
  
  const increseBy = (value: number)=>{
    const newvalie=count + value;
    if (newvalie < 0)return;
    setCount(count + value);
  }

  return {
    //Properties
    count,
    //metodos
    increseBy,
  }

}
