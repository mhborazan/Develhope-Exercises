import React from 'react'

export default function Seperator(props) {
  return (
    <div style={{backgroundColor:"lightGray",margin:20}}>
    <div style={{backgroundColor:"lightblue",padding:5}}>Excercise {props.id}</div>
    <div style={{padding:20}}>
        <div>{props.children}</div>
    </div>
    </div>
    
  )
}

