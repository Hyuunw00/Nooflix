import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./src/components/Header";
import MovieDetails from "./src/pages/details/DataDetails";
import Home from "./src/pages/home/Home";
import YearPage from "./src/components/YearPage";
import PlayingMoviePage from "./src/components/PlayingMoviePage";
import PopularMoviePage from "./src/components/PopularMoviePage";
import TrendingDayMoviePage from "./src/components/TrendingDayMoviePage";
import TrendingWeekMoviePage from "./src/components/TrendingWeekMoviePage";
import RootLayout from "./src/layout/RootLayout";
import DataDetails from "./src/pages/details/DataDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/playing" element={<PlayingMoviePage />} />
          <Route path="/popular" element={<PopularMoviePage />} />
          <Route path="/year" element={<YearPage />} />
          <Route path="/trendingDay" element={<TrendingDayMoviePage />} />
          <Route path="/trendingWeek" element={<TrendingWeekMoviePage />} />
          <Route path="/genres/:genre" element={<GenrePage />} /> */}
          <Route path="/movie/:movieId" element={<DataDetails />} />
          <Route path="/tv/:tvId" element={<DataDetails />} />
        </Route>
      </Routes>
    </>
  );
}
