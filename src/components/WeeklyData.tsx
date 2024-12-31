import { useEffect, useState } from "react";
import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_BASE_URL } from "../constants/urls";
import { axiosInstance } from "../apis/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function WeeklyData({ kind }: { kind: string }) {
  const [weeklyData, setWeeklyData] = useState<DataProps[]>([]);

  const navigate = useNavigate();
  const handleSlideClick = (data: DataProps) => {
    navigate(`/${data.media_type}/${data.id}`, { state: data });
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const dataWeekly = await axiosInstance.get(`/trending/${kind}/week`);
        const top10 = dataWeekly.data.results.slice(0, 10);
        setWeeklyData(top10);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center p-4 text-[18px]">
        <h2>Weekly {kind} TOP 10</h2>
        <div className="flex gap-2">
          <button
            className={` text-gray-300   swiper-button-prev-weekly${kind}`}
            aria-label="Previous slide"
          >
            이전
          </button>
          <button
            className={` text-gray-300   swiper-button-next-weekly${kind}`}
            aria-label="Next slide"
          >
            다음
          </button>
        </div>
      </div>

      {/* top10 */}
      <Swiper
        modules={[Navigation, Mousewheel]}
        slidesPerView={5}
        slidesPerGroup={2}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: `.swiper-button-prev-weekly${kind}`,
          nextEl: `.swiper-button-next-weekly${kind}`,
        }}
      >
        {weeklyData.map((data, index) => {
          return (
            <SwiperSlide
              className="p-2 cursor-pointer"
              key={index}
              onClick={() => handleSlideClick(data)}
            >
              <div className="relative">
                <img src={`${IMAGE_BASE_URL}w185${data.poster_path}`} />
                <div className="absolute top-1 left-1 text-[25px] text-gray-200">
                  {index + 1}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
