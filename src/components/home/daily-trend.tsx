import { Genre, TrendingAll } from "@/types/trending-all";
import DailySwiper from "./daily-swiper";
import { fetchTMDB } from "@/lib/fetch";

export default async function DailyTrend({ standard }: { standard: string }) {
  const [data, genreList] = await Promise.all([
    fetchTMDB(`/trending/${standard}/day`),
    fetchTMDB(`/genre/${standard}/list`),
  ]);

  const filteredData: TrendingAll[] = data.results;
  const genreMap: Record<number, string> = {};
  const type = standard === "movie" ? "영화" : "시리즈";

  genreList.genres.forEach((genre: Genre) => {
    genreMap[genre.id] = genre.name;
  });

  return (
    <div className="mt-10 ">
      <div className=" p-4">
        <h4 className="text-lg font-bold">인기 트렌드 {type}</h4>
        <span className="text-sm text-[var(--gray-500)]">
          최근 24시간 동안 가장 많이 언급된 {type}
        </span>
      </div>

      {/* 스와이퍼  */}
      <div className="pl-3">
        <DailySwiper
          datas={filteredData}
          genres={genreMap}
          type={`daily-${type}`}
        />
      </div>
    </div>
  );
}
