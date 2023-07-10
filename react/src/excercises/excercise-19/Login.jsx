import React, { useState } from 'react'

export default function Login({onLogin}) {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [isButtonDisabled,setIsButtonDiasbled] = useState(true)
    const handler = () => {
        if(username != "" && password != "") setIsButtonDiasbled(false)
    }
  return (
    <div>
        Username:
        <input name="username" onChange={(v)=>{setUsername(v.target.value);handler()}}/>

        Password:
        <input name="password" onChange={(v)=>{setPassword(v.target.value);handler()}}/>

        <button disabled={isButtonDisabled} onClick={()=>onLogin()}>Login</button>
    </div>
  )
}
