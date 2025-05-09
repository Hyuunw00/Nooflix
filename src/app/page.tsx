import SlideSwiper from "@/components/slide-swiper";
import { fetchTMDB } from "@/lib/fetch";

export default async function Home() {
  const { results } = await fetchTMDB("/trending/all/day?language=ko-KR");

  return <div>{<SlideSwiper results={results} />}</div>;
}
