import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Movie({ movie }: { movie: MovieProps }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className=" overflow-hidden  transform hover:translate-y-[-10px] transition-all duration-5000 ease-in-out)"
    >
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="m-auto rounded-md"
          />
        </div>
        <div className="mt-4 text-center">
          <h1>
            {movie.title}({movie.release_date})
          </h1>
          <div>{movie.genres}</div>
          <div>
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
      </div>
    </Link>
  );
}
