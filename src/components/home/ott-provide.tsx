import { fetchTMDB } from "@/lib/fetch";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default async function OttProvide() {
  const data = await Promise.all([
    fetchTMDB("/discover/movie", {
      with_watch_providers: 8,
      sort_by: "popularity.desc",
    }),
    fetchTMDB("/discover/movie", {
      with_watch_providers: 8,
      sort_by: "popularity.desc",
    }),
  ]);
  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-between  items-start">
        <div className="">
          <h4 className="text-lg font-bold">OTT 모음집 </h4>
          <span className="text-sm text-[var(--gray-500)]">
            OTT 작품 모음집
          </span>
        </div>
        <div>
          <Link href={"/"}>
            <FaChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 넷플릭스. 디즈니 2개만 우선적으로 보여주기 */}
      <div>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2 bg-[var(--gray-050)]">
            {/* 넷플릭스 로고 */}
            <Image
              src={"/ogimage.png"}
              width={108}
              height={108}
              alt="예비 이미지"
              className="rounded-[6px]"
            />
            <div className="py-5  flex flex-col gap-2">
              <div className="text-[14px] font-bold">
                넷플릭스에서 제공하는 영화/시리즈!
              </div>
              <h6 className="text-[13px]">
                밥 먹으면서 보면 더 맛있는 넷플릭스!
              </h6>
            </div>
          </li>

          <li className="flex items-center gap-2 bg-[var(--gray-050)]">
            {/* 넷플릭스 로고 */}
            <Image
              src={"/ogimage.png"}
              width={108}
              height={108}
              alt="예비 이미지"
              className="rounded-[6px]"
            />
            <div className="py-5  flex flex-col gap-2">
              <div className="text-[14px] font-bold">
                넷플릭스에서 제공하는 영화/시리즈!
              </div>
              <h6 className="text-[13px]">
                밥 먹으면서 보면 더 맛있는 넷플릭스!
              </h6>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
