import React, { useState } from 'react'

export default function ClickTracker() {
    const [lastButton,setLastButton] = useState(0);

    const clickHandler = (button) => {

        switch (button) {
            case 1:
                setLastButton(1);
                break;
            case 2:
                setLastButton(2);
                break;
            case 3:
                setLastButton(3);
                break;
        
            default:
                break;
        }
    }

  return (
    <div>{lastButton==0
        ? <h1>No button has clicked</h1>
        : <h1>Last clicked button is {lastButton}</h1>
    }           
        <button onClick={()=>clickHandler(1)}>1st</button>
        <button onClick={()=>clickHandler(2)}>2nd</button>
        <button onClick={()=>clickHandler(3)}>3rd</button>
    </div>
  )
}
