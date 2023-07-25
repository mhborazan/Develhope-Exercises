import { useEffect, useState } from "react";

export const useGithubUser = (username) => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setImageURL(data.avatar_url);
      });
  }, []);

  return { name, imageURL };
};
