import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function useGithubUserSWR({ username }) {
  const { data, error, isLoading } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return [data, error, isLoading];
}
