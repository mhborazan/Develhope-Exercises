import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function GithubUserSWR({ username }) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return (
    <>
      {!data && !error && <h3>Loading</h3>}
      {error && <h3>An error has occured</h3>}
      {data && !error && (
        <>
          <h1>{data.name}</h1>
          <img src={data.avatar_url} />
        </>
      )}
    </>
  );
}
