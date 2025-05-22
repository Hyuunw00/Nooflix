import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fetchTMDB } from "@/lib/fetch";
import RecentlySwiper from "./recently-swiper";
import { Recently } from "@/types/recently";

export default async function RecentlyOpen() {
  const [movie, series] = await Promise.all([
    fetchTMDB(`/movie/upcoming`),
    fetchTMDB(`/tv/on_the_air`),
  ]);
  const filteredMovie: Recently[] = movie.results
    .filter(
      (result: Recently) => result.overview !== "" && result.poster_path != ""
    )
    .slice(0, 10);
  const filtredSeries: Recently[] = series.results
    .filter(
      (result: Recently) => result.overview !== "" && result.poster_path != ""
    )
    .slice(0, 10);

  const data = [...filteredMovie, ...filtredSeries];
  return (
    <div className="mt-10">
      <div className=" p-4">
        <h4 className="text-lg font-bold">개봉 예정작 / 신작 </h4>
        <span className="text-sm text-[var(--gray-500)]">
          최근에 나온 따끈따끈한 신작!
        </span>
      </div>

      <div className="pl-3">
        <RecentlySwiper datas={data} type={`recently`} />
      </div>
    </div>
  );
}
