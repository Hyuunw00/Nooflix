import { OTT_PROVIDERS } from "@/constants/ott";
import { fetchTMDB } from "./fetch";

export default async function fetchOtt(currentTab: number, standard: string) {
  const movieTabData = [
    {
      endPoint: `/discover/${standard}`,
      params: {
        sort_by: "popularity.desc",
      },
    },
    {
      endPoint: `/discover/${standard}`,
      params: {
        with_watch_providers: `${OTT_PROVIDERS.Netflix}`,
        sort_by: "popularity.desc",
      },
    },
    {
      endPoint: `/discover/${standard}`,
      params: {
        with_watch_providers: `${OTT_PROVIDERS.DisneyPlus}`,
        sort_by: "popularity.desc",
      },
    },
    {
      endPoint: `/discover/${standard}`,
      params: {
        with_watch_providers: `${OTT_PROVIDERS.Watcha}`,
        sort_by: "popularity.desc",
      },
    },
    {
      endPoint: `/discover/${standard}`,
      params: {
        with_watch_providers: `${OTT_PROVIDERS.AppleTV}`,
        sort_by: "popularity.desc",
      },
    },
    {
      endPoint: `/discover/${standard}`,
      params: {
        with_watch_providers: `${OTT_PROVIDERS.Wavve}`,
        sort_by: "popularity.desc",
      },
    },
    {
      endPoint: `/discover/${standard}`,
      params: {
        with_watch_providers: `${OTT_PROVIDERS.Amazon}`,
        sort_by: "popularity.desc",
      },
    },
  ];

  return fetchTMDB(
    movieTabData[currentTab].endPoint,
    movieTabData[currentTab].params
  );
}
