import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { axiosInstance } from "../../apis/axiosInstance";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// 스와이퍼 CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IMAGE_BASE_URL } from "../../constants/urls";
import DataByGenre from "../../components/DataByGenre";
import WeeklyData from "../../components/WeeklyData";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [trendingData, setTrendingData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleSlideClick = (data: DataProps) => {
    navigate(`/${data.media_type}/${data.id}`, { state: data });
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const trendData = await axiosInstance.get("/trending/all/day");
        const top10 = trendData.data.results.slice(0, 10);
        setTrendingData(top10);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  if (loading) return <span>Loading...</span>;
  return (
    <>
      {/* trending top 10 */}
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
        speed={500} // 슬라이더 넘어가는 속도
      >
        <ul>
          {trendingData.map((data) => {
            const ratingOutOf5 = Math.round(data.vote_average / 2); // 10점 만점을 5점으로 변환
            const stars =
              "★".repeat(ratingOutOf5) + "☆".repeat(5 - ratingOutOf5); // 별점 생성

            return (
              <li key={data.id}>
                <SwiperSlide
                  key={data.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSlideClick(data)}
                >
                  <div className="relative">
                    <img
                      className="w-full bg-cover "
                      src={`${IMAGE_BASE_URL}original${data.poster_path}`}
                      style={{ height: "600px" }}
                    />
                    <div className="absolute top-0 text-[20px] flex flex-col  w-full p-2 text-[#fff] ">
                      <span>{stars}</span>
                      <span>{data.title || data.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
            );
          })}
        </ul>
      </Swiper>

      {/* movie관련 */}
      <div>
        <WeeklyData kind="movie" />

        <DataByGenre
          title="영화 / 에니메이션"
          uniquekey="movieani"
          genreNum={16}
          kind="movie"
        />

        <DataByGenre
          title="영화 / 음악"
          uniquekey="moviemusic"
          genreNum={10402}
          kind="movie"
        />

        <DataByGenre
          title="영화 / 다큐멘터리"
          uniquekey="moviedocu"
          genreNum={99}
          kind="movie"
        />
      </div>

      {/* tv관련 */}
      <div>
        <WeeklyData kind="tv" />

        <DataByGenre
          title="tv / 에니메이션"
          uniquekey="tvani"
          genreNum={16}
          kind="tv"
        />

        <DataByGenre
          title="tv / 액션"
          uniquekey="tvaction"
          genreNum={10759}
          kind="tv"
        />

        <DataByGenre
          title="tv / 다큐멘터리"
          uniquekey="tvdocu"
          genreNum={99}
          kind="tv"
        />
      </div>
    </>
  );
}
