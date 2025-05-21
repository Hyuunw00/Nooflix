import { fetchTMDB } from "@/lib/fetch";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { FaChevronRight } from "react-icons/fa";
import Rank from "@/components/home/rank";
import SearchBtn from "@/components/home/search-button";
import BannerSwiper from "@/components/home/banner-swiper";
import DailyTrend from "@/components/home/daily-trend";
import RecentlyOpen from "@/components/home/recently-open";

export default async function Home() {
  const { results } = await fetchTMDB("/trending/all/week");

  return (
    <div className="relative z-10">
      <Header />

      {/* 주간 트렌드 영화&시리즈 */}
      {<BannerSwiper results={results} />}

      {/* 검색 페이지 이동 */}
      <SearchBtn />

      {/* 랭킹  */}
      <Rank />

      {/* 인기 트렌드 영화 */}
      <DailyTrend standard="movie" />

      {/* 인기 트렌드 시리즈 */}
      <DailyTrend standard="tv" />

      {/* 개봉 예정작 / 신작 */}
      <RecentlyOpen />

      {/* OTT별 필터링(넷플릭스.디즈니 플러스 등등) */}
      <div className="mt-10">
        <div className="mb-5 flex justify-between  items-start">
          <div className="">
            <h4 className="text-lg font-bold">OTT 모음집 </h4>
            <span className="text-sm text-[var(--gray-500)]">
              TMDB에서 엄선한 OTT 작품 모음집
            </span>
          </div>
          <div>
            <Link href={"/"}>
              <FaChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 넷플릭스. 디즈니 2개만 우선적으로 보여주기 */}
        <div>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 bg-[var(--gray-050)]">
              {/* 넷플릭스 로고 */}
              <Image
                src={"/ogimage.png"}
                width={108}
                height={108}
                alt="예비 이미지"
                className="rounded-[6px]"
              />
              <div className="py-5  flex flex-col gap-2">
                <div className="text-[14px] font-bold">
                  넷플릭스에서 제공하는 영화/시리즈!
                </div>
                <h6 className="text-[13px]">
                  밥 먹으면서 보면 더 맛있는 넷플릭스!
                </h6>
              </div>
            </li>

            <li className="flex items-center gap-2 bg-[var(--gray-050)]">
              {/* 넷플릭스 로고 */}
              <Image
                src={"/ogimage.png"}
                width={108}
                height={108}
                alt="예비 이미지"
                className="rounded-[6px]"
              />
              <div className="py-5  flex flex-col gap-2">
                <div className="text-[14px] font-bold">
                  넷플릭스에서 제공하는 영화/시리즈!
                </div>
                <h6 className="text-[13px]">
                  밥 먹으면서 보면 더 맛있는 넷플릭스!
                </h6>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 숨겨진 보석 */}
      {/* <div className="mt-10">
        <div className="mb-5">
          <h4 className="text-lg font-bold">숨겨진 보석💎</h4>
          <span className="text-sm text-[var(--gray-500)]">
            과소평가된 고전 영화/시리즈들
          </span>
        </div>
      </div> */}
    </div>
  );
}
