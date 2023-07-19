import React from "react";

export default function UncontrolledForm() {
  const formHandler = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    console.log(username, password);
  };
  return (
    <form onSubmit={formHandler}>
      Username:
      <input name="username" />
      Password:
      <input name="password" />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}
