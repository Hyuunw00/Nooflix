import { fetchTMDB } from "./fetch";

export default async function fetchMovies(currentTab: number) {
  const movieTabData = [
    {
      endPoint: "/trending/movie/day",
    },
    {
      endPoint: "/movie/popular",
    },
    {
      endPoint: "/movie/now_playing",
    },
    {
      endPoint: "/discover/movie",
      params: {
        sort_by: "revenue.desc",
      },
    },
    {
      endPoint: "/movie/top_rated",
    },
    {
      endPoint: "/discover/movie",
      params: {
        sort_by: "vote_count.desc",
      },
    },
  ];

  return fetchTMDB(
    movieTabData[currentTab].endPoint,
    movieTabData[currentTab].params ?? {}
  );
}
