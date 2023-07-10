import React, { useState } from 'react'

export default function Login({onLogin}) {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
  return (
    <div>
        Username:
        <input name="username" onChange={(v)=>{setUsername( v.target.value)}}/>

        Password:
        <input name="password" onChange={(v)=>{setPassword(v.target.value)}}/>

        <button disabled={!(username.length>0&&password.length>0)} onClick={()=>onLogin(username,password)}>Login</button>
    </div>
  )
}
