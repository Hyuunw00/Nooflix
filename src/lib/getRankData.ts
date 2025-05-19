import fetchMovies from "./fetchMovies";
import fetchSeries from "./fetchSeries";

export async function getRankData(currentTab: number) {
  const [movieData, tvData] = await Promise.all([
    fetchMovies(currentTab),
    fetchSeries(currentTab),
  ]);

  // 영화와 TV 데이터를 합쳐서 반환
  return [...movieData.results.slice(0, 5), ...tvData.results.slice(0, 5)];
}
