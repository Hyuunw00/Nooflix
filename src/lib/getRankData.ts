import fetchOtt from "./fetch-ott";

export async function getRankData(currentTab: number) {
  const [movieData, tvData] = await Promise.all([
    fetchOtt(currentTab, "movie"),
    fetchOtt(currentTab, "tv"),
  ]);

  // 영화와 TV 데이터를 합쳐서 반환
  return [...movieData.results.slice(0, 5), ...tvData.results.slice(0, 5)];
}
