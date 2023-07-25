import React, { useRef } from "react";

export default function UncontrolledForm() {
  const userRef = useRef();
  const passRef = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;
    console.log(username, password);
  };
  return (
    <form>
      Username:
      <input name="username" ref={userRef} />
      Password:
      <input name="password" ref={passRef} />
      <button type="submit" onClick={formHandler}>
        Submit
      </button>
      <button type="reset">Reset</button>
    </form>
  );
}
