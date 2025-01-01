interface DataProps {
  title: string;
  name: string;
  release_date: string;
  genres: string[];
  vote_average: number;
  id: number;
  backdrop_path: string;
  poster_path: string;
  media_type: string;
}

interface DataDetailsProps {
  id: number;
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  release_date: string;
  first_air_date: string;
  last_air_date: string;
  number_of_seasons: string;
  number_of_episodes: string;
  overview: string;
  popularity: number;
  runtime: number;
  backdrop_path: string;
  poster_path: string;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  genres: { id: string; name: string }[];
  budget: number;
  revenue: number;
  vote_average: number;
  vote_count: number;
  homepage: string;
}

interface CreditProps {
  title: string;
  name: string;
  backdrop_path: string;
  credit_id: number;
  profile_path: string;
  poster_path: string;
  character: string;
  original_name: string;
  original_title: string;
  department: string;
  id: number;
}
