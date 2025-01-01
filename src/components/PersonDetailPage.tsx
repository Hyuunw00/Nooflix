import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMAGE_BASE_URL } from "../constants/urls";
import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import {
  faGlobe,
  faLocationDot,
  faXmark,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";

export default function PersonDetailPage() {
  const navigate = useNavigate();

  const [personInfo, setPersonInfo] = useState(Object);
  const [loading, setLoading] = useState(true);

  const [tvCredits, setTvCredits] = useState<CreditProps[]>([]);
  const [movieCredits, setMovieCredits] = useState<CreditProps[]>([]);

  console.log(movieCredits);

  const { personId } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get(
          `person/${personId}?language=ko-KR`
        );
        const tvCreditsResponse = await axiosInstance.get(
          `/person/${personId}/tv_credits?language=ko-KR`
        );
        const movieCreditsResponse = await axiosInstance.get(
          `/person/${personId}/movie_credits?language=ko-KR`
        );
        setPersonInfo(response.data);

        setTvCredits(tvCreditsResponse.data.cast);
        setMovieCredits(movieCreditsResponse.data.cast);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <div className="p-4 bg-[#111111]  rounded-lg">
      {/* 닫기 */}
      <div className="text-white text-right text-[25px]">
        <button type="button" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      {/* 상세 정보 */}
      <div className="flex gap-4 p-4">
        <div className="rounded-md overflow-hidden">
          <img
            src={`${IMAGE_BASE_URL}original${personInfo.profile_path}`}
            alt="인물 이미지"
            style={{ width: "200px" }}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[20px]">{personInfo.name}</h1>
          <h2 className="text-[14px]">
            {personInfo.also_known_as.length > 0 && personInfo.also_known_as[0]}
          </h2>
          <p>{personInfo.known_for_department}</p>
          <ul className="text-[15px]">
            <li className="text-sky-300 flex items-center gap-3">
              <FontAwesomeIcon icon={faStar} />
              <span>{personInfo.popularity.toFixed(1)} / 100</span>
            </li>
            <li className="text-sky-300 flex items-center gap-3">
              <FontAwesomeIcon icon={faCakeCandles} />
              <span>{personInfo.birthday}</span>
            </li>
            <li className="text-sky-300 flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{` ${personInfo.place_of_birth}`}</span>
            </li>

            {personInfo.homepage && (
              <li className="text-sky-300 flex items-center gap-3">
                <FontAwesomeIcon icon={faGlobe} />
                <Link to={personInfo.homepage}>{personInfo.homepage}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* tv  출연작 */}
      <div className="mt-4">
        <div className="flex justify-between items-center p-4 text-[14px]">
          <h3>tv 출연작</h3>
          <div className="flex gap-2">
            <button
              className={` text-gray-300   swiper-button-prev-tv`}
              aria-label={`Previous tv slide`}
            >
              이전
            </button>
            <button
              className={` text-gray-300   swiper-button-next-tv`}
              aria-label={`Next tv slide`}
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
            prevEl: `.swiper-button-prev-tv`,
            nextEl: `.swiper-button-next-tv`,
          }}
        >
          {tvCredits.map((data, index) => {
            return (
              <SwiperSlide
                onClick={() =>
                  navigate(`/tv/${data.id}`, { state: { data, kind: "tv" } })
                }
                className="p-3 flex flex-col gap-2 cursor-pointer"
                key={`${data.credit_id}-${index}`}
              >
                <div className="relative rounded-md overflow-hidden">
                  <img
                    className="w-full h-[144px] object-cover "
                    src={`${
                      data.poster_path
                        ? `${IMAGE_BASE_URL}w92${data.poster_path}`
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

      {/* 영화  출연작 */}
      <div className="mt-4">
        <div className="flex justify-between items-center p-4 text-[14px]">
          <h3>영화 출연작</h3>
          <div className="flex gap-2">
            <button
              className={` text-gray-300   swiper-button-prev-movie`}
              aria-label={`Previous movie slide`}
            >
              이전
            </button>
            <button
              className={` text-gray-300   swiper-button-next-movie`}
              aria-label={`Next movie slide`}
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
            prevEl: `.swiper-button-prev-movie`,
            nextEl: `.swiper-button-next-movie`,
          }}
        >
          {movieCredits.map((data, index) => {
            return (
              <SwiperSlide
                onClick={() =>
                  navigate(`/movie/${data.id}`, {
                    state: { data, kind: "movie" },
                  })
                }
                className="p-3 flex flex-col gap-2 cursor-pointer"
                key={`${data.credit_id}-${index}`}
              >
                <div className="relative rounded-md overflow-hidden">
                  <img
                    className="w-full h-[144px] object-cover "
                    src={`${
                      data.poster_path
                        ? `${IMAGE_BASE_URL}w92${data.poster_path}`
                        : "/user.png"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-[12px]">
                    {data.character || data.department}
                  </p>
                  <p className="text-[16px]">{data.original_title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* 제작참여 */}
      {/* 사진들 */}
    </div>
  );
}
