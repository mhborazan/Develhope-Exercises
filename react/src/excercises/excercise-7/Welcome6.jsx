import React from 'react'
import Age2 from './Age2'

export default function Welcome6(props) {
  return (
    <>
      <p>Welcome {props.name || "Mustafa"}</p>
      {props.age >= 18 ? <Age2 age={props.age}/> : "" }
    </>
  )
}
