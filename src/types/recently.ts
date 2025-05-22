export type Recently = (RecentlyMovie | RecentlySeries) & {
  title: string;
  name: string;
};

export interface RecentlySeries {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string; // YYYY-MM-DD 형식
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface RecentlyMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // YYYY-MM-DD 형식
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
