import { useState } from "react";
import Login from "./Login";

export default function Excercise20() {
  const loginHandler = (username, password) => {
    console.log(username, password);
  };
  return <Login onLogin={loginHandler} />;
}
