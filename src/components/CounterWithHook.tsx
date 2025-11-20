import React, { use, useState } from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
  const {count,increseBy}=useCounter({
    initialValue: 5
  });
 let esebue: Array<string> = ["El fer"];
 let index 
 for (index = 0; index < 100; index++) {
  if (index >=1 && index <2) {
  esebue.push('me la deja bien...')   
  }else if(index >=2 && index <3) {
    esebue.push('lustrada')
  } 
  
 
}

  return (
    <>
    <h3>COntador: <small>{count}</small></h3>
    <div>
      <button onClick={()=> increseBy(1)}>+1</button>
      &nbsp;
      <button onClick={()=> increseBy(-1)}>-1</button>
    <pre>
        
        {JSON.stringify(esebue,null, 2)}
    </pre>
    </div>
    </>
  )
}