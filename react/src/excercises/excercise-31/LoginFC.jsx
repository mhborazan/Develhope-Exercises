import React, { useRef, useState } from "react";

export default function LoginFC() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const reset = () => {
    setUsername("");
    setPassword("");
  };
  const loginHandler = () => {
    console.log("Username:", username, "Password:", password);
  };
  return (
    <div>
      Username:
      <input
        name="username"
        value={username}
        onChange={(v) => {
          setUsername(v.target.value);
        }}
      />
      Password:
      <input
        value={password}
        name="password"
        onChange={(v) => {
          setPassword(v.target.value);
        }}
      />
      <button
        disabled={!(username.length > 0 && password.length > 0)}
        onClick={() => loginHandler()}
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
