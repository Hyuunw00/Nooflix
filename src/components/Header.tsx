import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [blur, setBlur] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY; // 현재 스크롤 위치
    const headerHeight = 72; // 헤더 높이
    const blurAmount = Math.min((scrollY / headerHeight) * 10, 10); // 최대 10px까지 blur 적용
    setBlur(blurAmount);
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`py-4 px-2 flex items-center justify-between gap-8 w-full bg-black bg-opacity-50 transition-all duration-200 ease-in-out`}
      style={{ backdropFilter: `blur(${blur}px)` }}
    >
      <Link to="/" className="text-[30px] h-10 leading-10">
        Nooflix
      </Link>
      {/* <nav>
          <ul className="flex items-center gap-4">
            <li className="group  relative">
              분류기준
              <ul className="absolute  list-hover">
                <li className=" listItem-hover">
                  <Link to="/popular" className="block w-full h-full">
                    인기 영화
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/playing" className="block w-full h-full">
                    최신 영화
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/trendingDay" className="block w-full h-full">
                    일별 트렌드 영화
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/trendingWeek" className="block w-full h-full">
                    주별 트렌드 영화
                  </Link>
                </li>
              </ul>
            </li>

            <li className="group  relative">
              장르별
              <ul className=" absolute list-hover">
                <li className="listItem-hover">
                  <Link to="/genres/Romance" className=" block w-full h-full">
                    로맨스
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Comedy" className="block w-full h-full">
                    코미디
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Thriller" className="block w-full h-full">
                    스릴러
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link
                    to="/genres/Documentary"
                    className="block w-full h-full"
                  >
                    다큐
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Music" className="block w-full h-full">
                    뮤직
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Action" className="block w-full h-full">
                    엑션
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Horror" className="block w-full h-full">
                    호러
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav> */}
    </div>
  );
}
