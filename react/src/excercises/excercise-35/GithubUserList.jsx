import React, { useState } from "react";
import GithubUser from "../excercise-34/GithubUser";

export default function GithubUserList() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState("");
  const inputOnChange = (data) => setUser(data);
  const onClick = () => {
    setUserList([...userList, user]);
    setUser("");
  };
  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => inputOnChange(e.target.value)}
      />
      <button onClick={onClick}>Add User</button>
      {userList.map((user, i) => (
        <GithubUser username={user} key={i} />
      ))}
    </div>
  );
}
