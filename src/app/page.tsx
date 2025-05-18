import SlideSwiper from "@/components/slide-swiper";
import { fetchTMDB } from "@/lib/fetch";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import SearchBtn from "@/components/search-button";
import { FaStar, FaChevronRight } from "react-icons/fa";
import RankList from "@/components/home/rank-list";

export default async function Home() {
  const { results } = await fetchTMDB("/trending/all/week");

  return (
    <div className="relative z-10">
      <Header />

      {/* 주간 트렌드 영화&시리즈 */}
      {<SlideSwiper results={results} />}

      {/* 검색 페이지 이동 */}
      <SearchBtn />

      {/* 랭킹  */}
      <div>
        <div className=" flex justify-between items-center mt-10 mb-5 px-3 ">
          <h4 className="text-lg font-bold">일간 랭킹</h4>
          <div className="text-[var(--gray-400)] text-sm">
            {new Date().toLocaleDateString("ko-KR")} 기준
          </div>
        </div>

        {/* 랭킹 탭 */}
        <RankList />

        {/* 탭 결과 */}
        <div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center  justify-between p-2">
              <div className="flex items-start gap-5">
                <div className="font-bold">1</div>
                <div className="flex items-center gap-1">
                  <Image
                    src={"/ogimage.png"}
                    width={120}
                    height={120}
                    alt="예비 이미지"
                  />
                  <span className="text-sm">언젠가는 슬기로울 전공의생활</span>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar className="w-4 h-4" />
                <span className="text-sm">3.2</span>
              </div>
            </li>

            <li className="flex items-center  justify-between p-2">
              <div className="flex items-start gap-5">
                <div className="font-bold">1</div>
                <div className="flex items-center gap-1">
                  <Image
                    src={"/ogimage.png"}
                    width={120}
                    height={120}
                    alt="예비 이미지"
                  />
                  <span className="text-sm">언젠가는 슬기로울 전공의생활</span>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar className="w-4 h-4" />
                <span className="text-sm">3.2</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 인기 트렌드 영화 */}
      <div className="mt-10">
        <div className="mb-5">
          <h4 className="text-lg font-bold">인기 트렌드 영화</h4>
          <span className="text-sm text-[var(--gray-500)]">
            최근 24시간 동안 가장 많이 언급된 영화
          </span>
        </div>

        {/* 스와이퍼  */}
        <div>
          {/* <Swiper></Swiper> */}
          <div>
            <ul className="flex  items-center gap-2  ">
              <li className="flex flex-col gap-1">
                <Image
                  src={"/ogimage.png"}
                  width={120}
                  height={240}
                  alt="예비 이미지"
                  className="rounded-xl"
                />
                <div className="flex flex-col text-[13px] text-gray-500">
                  <span className="text-[var(--gray-700)]">서브스턴스</span>
                  <p className="test-[var(--gray-600)]">
                    영화 - 정서극/공포(호러)
                  </p>
                </div>
              </li>

              <li className="flex flex-col gap-1">
                <Image
                  src={"/ogimage.png"}
                  width={120}
                  height={240}
                  alt="예비 이미지"
                  className="rounded-xl"
                />
                <div className="flex flex-col text-[13px] text-gray-500">
                  <span className="text-[var(--gray-700)]">서브스턴스</span>
                  <p className="test-[var(--gray-600)]">
                    영화 - 정서극/공포(호러)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 인기 트렌드 시리즈 */}
      <div className="mt-10">
        <div className="mb-5">
          <h4 className="text-lg font-bold">인기 트렌드 시리즈</h4>
          <span className="text-sm text-[var(--gray-500)]">
            최근 24시간 동안 가장 많이 언급된 시리즈
          </span>
        </div>

        {/* 스와이퍼  */}
        <div>
          {/* <Swiper></Swiper> */}
          <div>
            <ul className="flex  items-center gap-2  ">
              <li className="flex flex-col gap-1">
                <Image
                  src={"/ogimage.png"}
                  width={120}
                  height={240}
                  alt="예비 이미지"
                  className="rounded-xl"
                />
                <div className="flex flex-col text-[13px] text-gray-500">
                  <span className="text-[var(--gray-700)]">서브스턴스</span>
                  <p className="test-[var(--gray-600)]">
                    영화 - 정서극/공포(호러)
                  </p>
                </div>
              </li>

              <li className="flex flex-col gap-1">
                <Image
                  src={"/ogimage.png"}
                  width={120}
                  height={240}
                  alt="예비 이미지"
                  className="rounded-xl"
                />
                <div className="flex flex-col text-[13px] text-gray-500">
                  <span className="text-[var(--gray-700)]">서브스턴스</span>
                  <p className="test-[var(--gray-600)]">
                    영화 - 정서극/공포(호러)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 개봉 예정작 / 신작 */}

      <div className="mt-10">
        <div className="mb-5">
          <h4 className="text-lg font-bold">개봉 예정작 / 신작 </h4>
          <span className="text-sm text-[var(--gray-500)]">
            최근 상영/방영한 따끈따끈한 신작!
          </span>
        </div>

        <div>
          <ul className="flex gap-2">
            <li className="flex flex-col rounded-[6px] overflow-hidden">
              <Image
                src={"/ogimage.png"}
                width={230}
                height={140}
                alt="예비 이미지"
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2 pt-4 px-[12px] pb-[20px] bg-[var(--gray-050)]">
                <h6 className="font-bold text-[14px] text-[var(--gray-800)]">
                  영화제목
                </h6>
                <p className="text-[13px] text-[var(--gray-600)] ">
                  사람들이 많이 본 인기작 모아보기
                </p>
              </div>
            </li>

            <li className="flex flex-col gap-2">
              <Image
                src={"/ogimage.png"}
                width={230}
                height={140}
                alt="예비 이미지"
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2 pt-4 px-[12px] pb-[20px] bg-[var(--gray-050)]">
                <h6 className="font-bold text-[14px] text-[var(--gray-800)]">
                  영화제목
                </h6>
                <p className="text-[13px] text-[var(--gray-600)] ">
                  사람들이 많이 본 인기작 모아보기
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

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
      <div className="mt-10">
        <div className="mb-5">
          <h4 className="text-lg font-bold">숨겨진 보석💎</h4>
          <span className="text-sm text-[var(--gray-500)]">
            과소평가된 고전 영화/시리즈들
          </span>
        </div>
      </div>
    </div>
  );
}
