import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "../../apis/axiosInstance";
import { IMAGE_BASE_URL } from "../../constants/urls";
import { useInView } from "react-intersection-observer";
import LoadingScreen from "../../components/LoadingScreen";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function MoviePage() {
  const { genreNum } = useParams();

  const [datas, setDatas] = useState<DataProps[]>([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showScollButton, setShowScrollButton] = useState(false);

  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [activeGenre, setActiveGrenre] = useState<number>(Number(genreNum));

  const { ref, inView } = useInView({
    triggerOnce: false, // 요소가 다시 보일 때마다 호출되도록 설정
    threshold: 0.5, // 요소가 50% 이상 보일 때 트리거되도록 설정
  });

  const genreRefs = useRef<(HTMLLIElement | null)[]>([]); // 각 li 요소를 참조하는 배열

  // scrollintoView 적용
  const handleScrollToGenre = (index: number) => {
    if (genreRefs.current[index]) {
      genreRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center", // 가로축 기준 중앙으로 이동
      });
    }
  };

  // 스크롤 버튼(클릭 시 맨 위로 이동)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getData = async (pageNum: number) => {
    // if (loading) return; // 로딩 중일 때는 요청을 보내지 않도록
    try {
      const response = await axiosInstance.get(
        `/discover/movie?language=ko&region=kr&sort_by=vote_count.desc&page=${pageNum}
        ${genreNum !== "0" ? `&with_genres=${genreNum}` : ""}` // genre 번호가 0이아닐때만 추가
      );
      setTotalPages(response.data.total_pages);
      setDatas((prev) =>
        pageNum === 1
          ? response.data.results
          : [...prev, ...response.data.results]
      );
    } catch (error) {
      console.error(error);
    }
    // setLoading(false); // 데이터 요청이 끝난 후 로딩 상태를 false로 설정
  };

  const getGenres = async () => {
    try {
      const response = await axiosInstance.get(`/genre/movie/list?language=ko`);
      setGenres(response.data.genres);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // 데이터 요청이 끝난 후 로딩 상태를 false로 설정
    }
  };

  useEffect(() => {
    getData(1);
    getGenres();
  }, []);

  useEffect(() => {
    if (pages > 1) {
      getData(pages); // 페이지가 바뀔 때마다 데이터를 가져옵니다.
    }
  }, [pages]);

  useEffect(() => {
    // 장르 변경 시 페이지 초기화 후 데이터 불러오기
    setPages(1);
    getData(1);
  }, [genreNum]); // genreNum 변경 시 실행

  // 스크롤 이벤트 감지하여 버튼 상태 변경
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // 스크롤이 200px 이상 내려가면 버튼 표시
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 무한 스크롤
  useEffect(() => {
    if (inView && !loading) {
      setPages((prev) => prev + 1); // `inView`가 true이면 페이지 증가
    }
  }, [inView, loading]); // `inView`와 `loading`이 바뀔 때마다 페이지를 증가시킴

  if (loading) return <LoadingScreen />;
  return (
    <div className="relative">
      {/* 맨위화면으로 올려주는 버튼 */}
      <div
        className={`fixed right-[10%] translate-x-[-10%] top-[670px] z-[5] transition-all duration-500  ${
          showScollButton ? "opacity-70" : "opacity-0"
        }`}
      >
        <button
          type="button"
          className={`bg-gray-300 text-black w-[45px] h-[45px] text-center border rounded-full shadow-custom  `}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>

      {/* 현재 페이지 */}
      <div
        className="flex justify-center items-center gap-1 fixed  left-[50%] transform translate-x-[-50%] h-[35px] top-[670px] z-[5]
       bg-gray-300 text-black py-2 px-4 rounded-[30rem] shadow-custom opacity-70"
      >
        <i>{pages} </i>
        <i>/</i>
        <i>{totalPages}</i>
      </div>
      {/* 장르 */}
      <div className=" flex flex-nowrap items-center fixed z-[5] left-[50%] w-full max-w-[600px] transform translate-x-[-50%] top-[735px] bg-[#242525] overflow-x-auto scroll-smooth opacity-[0.95]">
        <ul className="flex p-2 items-center gap-2 text-[14px]">
          <li
            data-index="0"
            ref={(el) => (genreRefs.current[0] = el)} // 첫 번째 요소 참조
            onClick={() => handleScrollToGenre(0)}
          >
            <Link
              // 현재 보여지는 장르 번호 변경
              onClick={() => setActiveGrenre(0)}
              className={`whitespace-nowrap border-[#3c3c3c] px-4 py-2 bg-[#1c1c1c] rounded-full inline-flex 
                ${
                  activeGenre === 0 &&
                  "text-[#fff] border-[#2c3a58] bg-[#273c5a]"
                }`}
              to={`/movie/list/0`}
            >
              전체
            </Link>
          </li>
          {genres.map((genre, index) => (
            <li
              key={`${genre.id}-${index}`}
              data-index={`${index + 1}`}
              ref={(el) => (genreRefs.current[index + 1] = el)} // 나머지 요소들 참조
              onClick={() => handleScrollToGenre(index + 1)}
            >
              <Link
                onClick={() => setActiveGrenre(genre.id)}
                className={`whitespace-nowrap border-[#3c3c3c] px-4 py-2 bg-[#1c1c1c] rounded-full inline-flex
                     ${
                       activeGenre === genre.id &&
                       "text-[#fff] border-[#2c3a58] bg-[#273c5a]"
                     }
                    `}
                to={`/movie/list/${genre.id}`}
              >
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4 relative z-0">
        {datas.map((data, index) => {
          const ratingOutOf5 = Math.round(data.vote_average / 2); // 10점 만점을 5점으로 변환
          const stars = "★".repeat(ratingOutOf5) + "☆".repeat(5 - ratingOutOf5); // 별점 생성

          return (
            <div
              key={`${data.id}-${index}`}
              className="w-full flex flex-col justify-center items-center gap-2 relative"
            >
              <Link to={`/movie/list/${genreNum}/${data.id}`}>
                <img
                  className="w-[120px] h-[180px]"
                  src={`${IMAGE_BASE_URL}original${data.poster_path}`}
                  alt={data.title}
                />
                {/* 말줄임표 */}
                <h1 className="w-[120px] text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {data.title}
                </h1>
                <div className="absolute bottom-5  left-1 text-sky-300 ">
                  <span>{stars}</span>
                </div>
              </Link>
            </div>
          );
        })}

        {/* 로딩 중일 때만 로딩 애니메이션 표시 */}
        {loading && <LoadingScreen />}

        {/* 관찰 대상 요소 */}
        {!loading && <div ref={ref} />}
      </div>
    </div>
  );
}
