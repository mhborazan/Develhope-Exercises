import React from 'react'
import Age3 from './Age3'

export default function Welcome7(props) {
  return (
    <>
      <p>Welcome {props.name || "Mustafa"}</p>
      {props.age ? <Age3 age={props.age}/> : "" }
    </>
  )
}
