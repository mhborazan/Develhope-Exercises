import React from 'react'

export default function Welcome3(props) {
  return (
    <>
      <p>Welcome {props.name || "Mustafa"}</p>
      <p>Your age is {props.age || 20}</p>
    </>
  )
}
