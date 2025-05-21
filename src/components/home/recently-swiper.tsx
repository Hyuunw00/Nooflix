"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/constants/urls";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "@/styles/swiper.css";
import { Recently } from "@/types/recently";

export default function RecentlySwiper({
  datas,
  type,
}: {
  datas: Recently[]; // 영화 & 시리즈
  type: string;
}) {
  return (
    <div className="relative custom-swiper">
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        speed={500}
        navigation={{
          prevEl: `.custom-prev-button-${type}`,
          nextEl: `.custom-next-button-${type}`,
        }}
      >
        <ul className="flex gap-2">
          {datas.map((data) => (
            <SwiperSlide key={data.id}>
              <li className="flex flex-col rounded-[6px] overflow-hidden">
                <Image
                  src={`${IMAGE_BASE_URL}original${data.poster_path}`}
                  width={231}
                  height={140}
                  alt={data.name || data.title}
                  className="rounded-xl max-w-[231px] max-h-[140px]"
                />
                <div className="flex flex-col gap-2 pt-4 px-[12px] pb-[20px] bg-[var(--gray-050)]">
                  <h6 className="font-bold text-[14px] text-[var(--gray-800)]">
                    {data.name || data.title}
                  </h6>
                  <p className="text-[13px] text-[var(--gray-600)]  line-clamp-2 ">
                    {data.overview}
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
