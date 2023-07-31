import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GithubUserList2() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState("");
  const inputOnChange = (data) => setUser(data);
  const onClick = () => {
    setUserList([...userList, user]);
    setUser("");
  };
  return (
    <div>
      <h1>Add a user and select it</h1>
      <input
        type="text"
        value={user}
        onChange={(e) => inputOnChange(e.target.value)}
      />
      <button onClick={onClick}>Add User</button>
      {userList.map((user, i) => (
        <>
          <br />
          <Link to={"/users/" + user} key={i}>
            {user}
          </Link>
        </>
      ))}
    </div>
  );
}
