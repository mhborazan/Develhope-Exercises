import React from "react";
import { useGithubUser } from "./useGithubUser";

export default function GithubUser2({ username }) {
  const { name, imageURL } = useGithubUser(username);
  return (
    <>
      <h1>{name}</h1>
      <img src={imageURL} />
    </>
  );
}
