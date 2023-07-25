import { useEffect, useState } from "react";

export const useGithubUser = (username) => {
  let userData;
  let errorData;
  useEffect(() => {
    try {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
          userData = data;
        });
    } catch (error) {
      if (error instanceof Error) {
        errorData = error;
      }
    }
  }, []);

  return { userData, errorData };
};
