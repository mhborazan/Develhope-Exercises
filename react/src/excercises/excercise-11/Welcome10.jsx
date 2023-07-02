import React from 'react'
import Age from './Age'

export default function Welcome10(props) {
  return (
    <>
      <p>Welcome {props.name || "Mustafa"}</p>
      <Age age={props.age}/>
    </>
  )
}
