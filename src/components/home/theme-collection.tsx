import { fetchTMDB } from "@/lib/fetch";
import { Discover } from "@/types/discover";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import ThemeItem from "./theme-item";

export default async function ThemeCollection() {
  const [reality, family] = await Promise.all([
    fetchTMDB("/discover/tv", {
      with_genres: "10764", // Reality 장르
      sort_by: "popularity.desc",
    }),
    fetchTMDB("/discover/movie", {
      with_genres: "10751", // Family
      sort_by: "popularity.desc",
    }),
  ]);

  const realityResults: Discover[] = reality.results.slice(0, 4);
  const familyResults: Discover[] = family.results.slice(0, 4);

  console.log(realityResults);

  return (
    <div className="mt-10 p-4">
      <div className="mb-5  flex justify-between  items-start">
        <div className="">
          <h4 className="text-lg font-bold">작품 모음집</h4>
          <span className="text-sm text-[var(--gray-500)]">
            Nooflix에서 엄선한 추천 작품 모음집
          </span>
        </div>
        <div>
          <Link href={"/"}>
            <FaChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div>
        <ul className="flex flex-col gap-3">
          <ThemeItem
            data={realityResults}
            title="밥 먹으면서 보면 딱 좋은 리얼리티!"
            subtitle="당신의 한끼를 책임져드려요~"
          />

          <ThemeItem
            data={familyResults}
            title="세상에는 다양한 형태의 가족이 있다!"
            subtitle="5월 가정의 달 맞이, 가족애를 다룬 이야기"
          />
        </ul>
      </div>
    </div>
  );
}
