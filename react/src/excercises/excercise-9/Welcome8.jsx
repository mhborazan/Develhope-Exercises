import React from 'react'
import Age3 from './Age3'

export default function Welcome8(props) {
  return (
    <>
      <p>Welcome {props.name || "Mustafa"}</p>
      {props.age>=18 && props.age <=65 &&
      <Age3 age={props.age}/>
      }
    </>
  )
}
