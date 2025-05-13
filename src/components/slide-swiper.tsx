"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IMAGE_BASE_URL } from "@/constants/urls";
import Image from "next/image";
import { TrendingAll } from "@/types/trending-all";

export default function SlideSwiper({ results }: { results: TrendingAll[] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500, // 지연 시간 (한 슬라이더에 머물르는 시간)
        disableOnInteraction: false, // 마우스 제어 이후 자동 재생을 막을지 말지
      }}
      speed={1000} // 슬라이더 넘어가는 속도
    >
      <ul>
        {results.map((data) => {
          return (
            <li key={data.id}>
              <SwiperSlide key={data.id}>
                <div className="relative">
                  <Image
                    className="max-w-[512px] max-h-[530px] "
                    src={`${IMAGE_BASE_URL}original${data.poster_path}`}
                    width={512}
                    height={530}
                    alt={`일별 트랜드 영화/tv : ${data.title}`}
                  />
                  <div className="absolute top-0 text-[20px] flex flex-col w-full p-2 text-[#fff]">
                    <span>{data.vote_average}</span>
                    <span>{data.title || data.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            </li>
          );
        })}
      </ul>
    </Swiper>
  );
}
