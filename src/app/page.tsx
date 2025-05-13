import SlideSwiper from "@/components/slide-swiper";
import { fetchTMDB } from "@/lib/fetch";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Swiper } from "swiper/react";

export default async function Home() {
  const { results } = await fetchTMDB("/trending/all/day?language=ko-KR");

  return (
    <div>
      {<SlideSwiper results={results} />}

      {/* 검색 페이지 이동 */}
      <div className="mt-5 px-4 ">
        <div className="px-2 py-3 text-gray-300 bg-gray-100 w-full flex items-center gap-1 rounded-[10px] cursor-pointer">
          <MdSearch className="w-6 h-6" />
          <span className="text-gray-400">'야당'이 궁금하신가요?</span>
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
        <div className="mt-20">
          <div className="mb-5">
            <h4 className="text-lg font-bold">인기 트렌드 영화</h4>
            <h5>최근 24시간 동안 가장 많이 언급된 영화</h5>
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
                    <span>서브스턴스</span>
                    <p>영화 - 정서극/공포(호러)</p>
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
                    <span>서브스턴스</span>
                    <p>영화 - 정서극/공포(호러)</p>
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
                    <span>서브스턴스</span>
                    <p>영화 - 정서극/공포(호러)</p>
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
                    <span>서브스턴스</span>
                    <p>영화 - 정서극/공포(호러)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
