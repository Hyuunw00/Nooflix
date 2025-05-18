import SlideSwiper from "@/components/slide-swiper";
import { fetchTMDB } from "@/lib/fetch";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Swiper } from "swiper/react";
import Link from "next/link";

export default async function Home() {
  const { results } = await fetchTMDB("/trending/all/week?language=ko-KR");

  return (
    <div>
      {<SlideSwiper results={results} />}

      {/* 검색 페이지 이동 */}
      
      <div className="mt-5 px-4 " onClick={}>
        <div className="px-2 py-3 text-gray-300 bg-[var(--gray-100)] w-full flex items-center gap-1 rounded-[10px] cursor-pointer">
          <MdSearch className="w-6 h-6" />
          <span className="text-[var(--gray-400)]">'야당'이 궁금하신가요?</span>
        </div>
      </div>

      <div className="pt-5 px-3 ">
        {/* 랭킹  */}
        <div className=" flex justify-between items-center mb-5 ">
          <h4 className="text-lg font-bold">실시간 랭킹</h4>
          <div className="text-gray-400 text-sm">오후 11:47 기준</div>
        </div>

        {/* 탭 */}
        <div>
          <ul className="flex gap-2 items-center mb-10 ">
            <li className="bg-[#4DCA9A] rounded-full p-2 text-white">
              실시간 인기
            </li>
            <li className=" rounded-full p-2 border border-gray-200">
              실시간 인기
            </li>
            <li className=" rounded-full p-2 border border-gray-200">
              실시간 인기
            </li>

            <li className=" rounded-full p-2 border border-gray-200">
              실시간 인기
            </li>
            <li className=" rounded-full p-2 border border-gray-200">
              실시간 인기
            </li>
          </ul>

          {/* 탭 내용 */}
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
                    <span className="text-sm">
                      언젠가는 슬기로울 전공의생활
                    </span>
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
                    <span className="text-sm">
                      언젠가는 슬기로울 전공의생활
                    </span>
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
                    '천국보다 아름다운' 등 사람들이 많이 본 인기작 모아보기
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
                    '천국보다 아름다운' 등 사람들이 많이 본 인기작 모아보기
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* OTT별 필터링(넷플릭스.디즈니 플러스 등등) */}
        <div className="mt-10">
          <div className="mb-5 flex justify-between items-start">
            <div className="">
              <h4 className="text-lg font-bold">OTT 모음집 </h4>
              <span className="text-sm text-[var(--gray-500)]">
                TMDB에서 엄선한 OTT 작품 모음집
              </span>
            </div>
            <div>
              <Link href={"/"}>>></Link>
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
    </div>
  );
}
