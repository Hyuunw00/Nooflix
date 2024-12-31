import { useEffect, useState } from "react";
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function YearPage() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [movieCount, setMovieCount] = useState(0);
  const [page, setPage] = useState(1);

  const handlePrevPage = () =>
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  const handleNextPage = () =>
    setPage((prevPage) =>
      prevPage < Math.ceil(movieCount / 20) ? prevPage + 1 : prevPage
    );
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://yts.mx/api/v2/list_movies.json?&minimum_rating=8.5&page=${page}&sort_by=year`
        );
        if (!response.ok) throw new Error("fetch Error!");
        const datas = await response.json();
        setLoading(false);
        setMovies(datas.data.movies);
        setMovieCount(datas.data.movie_count);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [page]);

  return loading ? (
    <div className="text-red-500 flex justify-center items-center text-[30px] min-h-screen ">
      loading...
    </div>
  ) : (
    <>
      <div className="flex justify-center gap-4 items-center px-10 mt-[50px]">
        <button onClick={handlePrevPage}>
          <FontAwesomeIcon className="p-2" icon={faChevronLeft} />
        </button>
        <span className="text-xl">{page > 0 && page}</span>
        <button onClick={handleNextPage}>
          <FontAwesomeIcon className="p-2" icon={faChevronRight} />
        </button>
      </div>
      <div className=" p-7 grid grid-cols-5 gap-y-10 gap-x-5">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
