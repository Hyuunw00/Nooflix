export interface Discover {
  adult: boolean;
  backdrop_path: string | null;
  first_air_date?: string; // TV 전용
  release_date?: string; // Movie 전용
  genre_ids: number[];
  id: number;
  name?: string; // TV 전용
  title?: string; // Movie 전용
  original_language: string;
  original_name?: string; // TV 전용
  original_title?: string; // Movie 전용
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
  origin_country?: string[]; // TV 전용
}
