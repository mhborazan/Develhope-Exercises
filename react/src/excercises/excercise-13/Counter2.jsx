import React, { useEffect, useState } from 'react'

export default function Counter2({initial,time,increment}) {
    const [count,setCount] = useState(initial)
    useEffect(() => {
        
        const myInterval = setInterval(() => {
          setCount((p) => p + increment);
        }, time);

        return () => clearInterval(myInterval);
      }, []);
    
  return (
    <h1>Count: {count}</h1>
  )
}
