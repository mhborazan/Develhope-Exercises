import React from 'react'

export default function Age(props) {
  if(props.age >= 18) {
    return (
      <>
        <p>Your age is {props.age || 20}</p>
      </>
    )
  }
  return (
    <p>You are very young!</p>
  )
}
