import { fetchTMDB } from "./fetch";

export default async function fetchSeries(currentTab: number) {
  const seriesTabData = [
    {
      endPoint: "/trending/tv/day",
    },
    {
      endPoint: "/tv/popular",
    },
    {
      endPoint: "/tv/on_the_air",
    },
    {
      endPoint: "/discover/tv",
      params: {
        sort_by: "revenue.desc",
      },
    },
    {
      endPoint: "/tv/top_rated",
    },
    {
      endPoint: "/discover/tv",
      params: {
        sort_by: "vote_count.desc",
      },
    },
  ];

  return fetchTMDB(
    seriesTabData[currentTab].endPoint,
    seriesTabData[currentTab].params
  );
}
