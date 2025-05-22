import { fetchTMDB } from "@/lib/fetch";
import Header from "@/components/header";
import SearchBtn from "@/components/home/search-button";
import BannerSwiper from "@/components/home/banner-swiper";
import DailyTrend from "@/components/home/daily-trend";
import RecentlyOpen from "@/components/home/recently-open";
import OttRank from "@/components/home/ott-rank";
import ThemeCollection from "@/components/home/theme-collection";

export default async function Home() {
  const { results } = await fetchTMDB("/trending/all/week");

  return (
    <div className="relative z-10">
      <Header />

      {/* 주간 트렌드 영화&시리즈 */}
      {<BannerSwiper results={results} />}

      {/* 검색 페이지 이동 */}
      <SearchBtn />

      {/* OTT별 랭킹  */}
      <OttRank />

      {/* 인기 트렌드 영화 */}
      <DailyTrend standard="movie" />

      {/* 인기 트렌드 시리즈 */}
      <DailyTrend standard="tv" />

      {/* 개봉 예정작 / 신작 */}
      <RecentlyOpen />

      {/* 작품 모음집*/}
      <ThemeCollection />
    </div>
  );
}
