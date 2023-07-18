import React, { useRef, useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const uRef = useRef();
  const pRef = useRef();
  const reset = () => {
    setUsername("");
    setPassword("");
    pRef.current.value = "";
    uRef.current.value = "";
  };
  return (
    <div>
      Username:
      <input
        name="username"
        ref={uRef}
        onChange={(v) => {
          setUsername(v.target.value);
        }}
      />
      Password:
      <input
        name="password"
        ref={pRef}
        onChange={(v) => {
          setPassword(v.target.value);
        }}
      />
      <button
        disabled={!(username.length > 0 && password.length > 0)}
        onClick={() => onLogin(username, password)}
      >
        Login
      </button>
      <button
        disabled={!(username.length > 0 && password.length > 0)}
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
}
