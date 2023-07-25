import { useEffect, useState } from "react";

export const useGithubUser = (username) => {
  let isLoading = false;
  let userData;
  let errorData;
  useEffect(() => {
    try {
      isLoading = true;
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
          userData = data;
        });
      isLoading = false;
    } catch (error) {
      if (error instanceof Error) {
        errorData = error;
      }
    }
  }, []);

  return { userData, errorData, isLoading };
};
