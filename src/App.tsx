import { Route, Routes } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/home/HomePage";
import DataDetailsPage from "./pages/details/DataDetailsPage";
import MoviePage from "./pages/movie/MoviePage";
import MovieDetailPage from "./pages/movie/MovieDetailPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/playing" element={<PlayingMoviePage />} />
          <Route path="/popular" element={<PopularMoviePage />} />
          <Route path="/year" element={<YearPage />} />
          <Route path="/trendingDay" element={<TrendingDayMoviePage />} />
          <Route path="/trendingWeek" element={<TrendingWeekMoviePage />} />
          <Route path="/genres/:genre" element={<GenrePage />} /> */}
          <Route path="/movie/:movieId" element={<DataDetailsPage />} />
          <Route path="/tv/:tvId" element={<DataDetailsPage />} />
          <Route path="/movie/list/:genreNum" element={<MoviePage />} />
          <Route
            path="/movie/list/:genreNum/:movieId"
            element={<MovieDetailPage />}
          />
        </Route>
      </Routes>
    </>
  );
}
