import React from "react";
import GithubUser from "./GithubUser";
import { useParams } from "react-router-dom";

export default function ShowGithubUser() {
  const params = useParams();
  return <GithubUser username={params.username} />;
}
