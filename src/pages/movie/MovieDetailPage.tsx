import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faClock,
  faFilm,
  faGlobe,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { IMAGE_BASE_URL } from "../../constants/urls";
import DataCredits from "../../components/DataCredits";
import LoadingScreen from "../../components/LoadingScreen";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const [dataDetails, setDataDetails] = useState<DataDetailsProps>(Object);
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // 뒤로 가기 버튼 클릭 시 이전 페이지로 이동
  const handleBack = () => {
    navigate(-1); // -1은 뒤로 가기
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get(
          `/movie/${movieId}?language=ko`
        );
        setDataDetails(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    if (loading) return;
    const getData = async () => {
      try {
        const creditResponse = await axiosInstance.get(
          `/movie/${dataDetails.id}/credits?language=ko`
        );
        setCasts(creditResponse.data.cast);
        setCrews(creditResponse.data.crew);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [dataDetails]);

  const ratingOutOf5 = Math.round(dataDetails.vote_average / 2); // 10점 만점을 5점으로 변환
  const stars = "★".repeat(ratingOutOf5) + "☆".repeat(5 - ratingOutOf5); // 별점 생성

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}original${dataDetails.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "100%",
          filter: "brightness(0.3)", // 배경이 콘텐츠와 구분되도록 어둡게
          zIndex: 0, // 콘텐츠 뒤에 위치
        }}
      ></div>
      {/* 콘텐츠 */}
      <div className=" relative z-[1]">
        <div className="px-4 py-2">
          <button
            onClick={handleBack}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" color="gray" />
          </button>
        </div>

        {/* 상세 정보 */}
        <div className="flex gap-4 p-4">
          <div className="rounded-md overflow-hidden">
            <img
              src={`${IMAGE_BASE_URL}original${dataDetails.poster_path}`}
              alt="포스터 이미지"
              style={{ width: "200px" }}
            />
          </div>
          <div className="flex flex-col gap-4 text-[25px]">
            <h1>{dataDetails.title || dataDetails.name}</h1>
            <h2 className="text-[16px]">
              {dataDetails.original_title || dataDetails.original_name}
            </h2>
            <span className="text-sky-400">{stars}</span>
            <ul className="flex items-center gap-2 text-[14px]">
              {dataDetails.genres.map((genre, index) => (
                <li
                  className=" rounded-md bg-sky-400 p-1 text-[12px]"
                  key={index}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            <ul className="text-[15px]">
              <li className="text-sky-300 flex items-center gap-3">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>평점: {dataDetails.vote_average.toFixed(1)} / 10</span>
              </li>
              <li className="text-sky-300 flex items-center gap-3">
                <FontAwesomeIcon icon={faFilm} />
                <span>{`개봉: ${dataDetails.release_date}`}</span>
              </li>

              <li className="text-sky-300 flex items-center gap-3">
                <FontAwesomeIcon icon={faClock} />
                <span>시간: {dataDetails.runtime} 분</span>
              </li>
              {dataDetails.homepage && (
                <li className="text-sky-300 flex items-center gap-3">
                  <FontAwesomeIcon icon={faGlobe} />
                  <Link to={dataDetails.homepage}>{dataDetails.homepage}</Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="p-4">
          <p>{dataDetails.overview}</p>
        </div>
      </div>

      {/* 출연진 */}
      <DataCredits datas={casts} title="출연진" uniquekey="casts" />

      {/* 제작진 */}
      <DataCredits datas={crews} title="제작진" uniquekey="crews" />

      {/* 영상 */}
      <div></div>
    </div>
  );
}
