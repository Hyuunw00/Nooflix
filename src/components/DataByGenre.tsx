import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axiosInstance";

// // 스와이퍼 CSS
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IMAGE_BASE_URL } from "../constants/urls";
import { data, useNavigate } from "react-router-dom";

export default function DataByGenre({
  title,
  uniquekey,
  genreNum,
  kind,
}: {
  title: string;
  uniquekey: string;
  genreNum: number;
  kind: string;
}) {
  const [datas, setDatas] = useState<DataProps[]>([]);

  const navigate = useNavigate();
  const handleSlideClick = (data: DataProps) => {
    navigate(`/${kind}/${data.id}`, { state: { data, kind } });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/discover/${kind}`, {
          params: {
            with_genres: `${genreNum}`,
            include_adult: "false",
            include_video: "false",
            language: "ko-KR",
            page: "1",
            sort_by: "popularity.desc",
          },
        });
        const top20 = response.data.results.slice(0, 20);
        setDatas(top20);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
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
              className="p-2 cursor-pointer"
              key={`${uniquekey}-${index}`}
              onClick={() => handleSlideClick(data)}
            >
              <div className="relative">
                <img src={`${IMAGE_BASE_URL}w92${data.poster_path}`} />
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
