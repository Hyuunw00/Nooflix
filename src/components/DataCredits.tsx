import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// // 스와이퍼 CSS
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IMAGE_BASE_URL } from "../constants/urls";
import { useNavigate } from "react-router-dom";

export default function DataCredits({
  datas,
  title,
  uniquekey,
}: {
  datas: CreditProps[];
  title: string;
  uniquekey: string;
}) {
  console.log(datas);
  const navigate = useNavigate();
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center p-4 text-[14px]">
        <h3>{title}</h3>
        <div className="flex gap-2">
          <button
            className={` text-gray-300   swiper-button-prev-${uniquekey}`}
            aria-label={`Previous ${uniquekey} slide`}
          >
            이전
          </button>
          <button
            className={` text-gray-300   swiper-button-next-${uniquekey}`}
            aria-label={`Next ${uniquekey} slide`}
          >
            다음
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Mousewheel]}
        slidesPerView={5}
        slidesPerGroup={4}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: `.swiper-button-prev-${uniquekey}`,
          nextEl: `.swiper-button-next-${uniquekey}`,
        }}
      >
        {datas.map((data, index) => {
          return (
            <SwiperSlide
              onClick={() => navigate(`/person/${data.id}`)}
              className="p-3 flex flex-col gap-2 cursor-pointer"
              key={`${data.credit_id}-${index}`}
            >
              <div className="relative rounded-md overflow-hidden">
                <img
                  className="w-full h-[144px] object-cover "
                  src={`${
                    data.profile_path
                      ? `${IMAGE_BASE_URL}w92${data.profile_path}`
                      : "/user.png"
                  }`}
                />
              </div>
              <div>
                <p className="text-[12px]">
                  {data.character || data.department}
                </p>
                <p className="text-[16px]">{data.original_name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
