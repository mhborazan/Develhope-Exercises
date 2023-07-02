import React, { useEffect, useState } from 'react'
import CounterDisplay from './CounterDisplay';

export default function Counter3({initial,time,increment}) {
    const [count,setCount] = useState(initial)
    useEffect(() => {
        
        const myInterval = setInterval(() => {
          setCount((p) => p + increment);
        }, time);

        return () => clearInterval(myInterval);
      }, []);
    
  return (
   <CounterDisplay count={count}/>
  )
}
