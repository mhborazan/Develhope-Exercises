import React, { useState } from 'react'
import Welcome from '../excercise-2/Welcome'

export default function InteractiveComponent() {
    const [value,setValue] = useState("")

  return (
    <div>
        <input onChange={(v)=>setValue(v.target.value)} />
        <Welcome name={value} />
    </div>
  )
}
