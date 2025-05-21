"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { TrendingAll } from "@/types/trending-all";
import { IMAGE_BASE_URL } from "@/constants/urls";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "@/styles/swiper.css";

export default function DailySwiper({
  datas,
  genres,
  type,
}: {
  datas: TrendingAll[];
  genres: Record<number, string>;
  type: string;
}) {
  return (
    <div className="relative custom-swiper">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        speed={500}
        navigation={{
          prevEl: `.custom-prev-button-${type}`,
          nextEl: `.custom-next-button-${type}`,
        }}
      >
        <ul className="flex items-center gap-2  ">
          {datas.map((data) => (
            <SwiperSlide key={data.id}>
              <li className="flex flex-col gap-2 items-start">
                <Image
                  src={`${IMAGE_BASE_URL}original${data.poster_path}`}
                  width={154}
                  height={220}
                  alt={data.name || data.title}
                  className="rounded-xl max-w-[154px] max-h-[220px]"
                />
                <div className="flex flex-col text-[13px] text-gray-500">
                  <span className="text-[var(--gray-700)] text-[14px]">
                    {data.name || data.title}
                  </span>
                  <p className="test-[var(--gray-600)]">
                    {data.genre_ids.map((genre: number) => genres[genre])}
                  </p>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>

      {/* 좌우 버튼 */}

      <div>
        <button className={`swiper-button-prev custom-prev-button-${type}`}>
          <GrFormPrevious className="w-3 h-3" />
        </button>
        <button className={`swiper-button-next custom-next-button-${type}`}>
          <GrFormNext className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
