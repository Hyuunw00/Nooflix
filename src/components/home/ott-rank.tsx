"use client";

import Image from "next/image";
import RankList from "./rank-list";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getRankData } from "@/lib/getRankData";
import { TrendingAll } from "@/types/trending-all";
import { IMAGE_BASE_URL } from "@/constants/urls";

export default function OttRank() {
  const [currentTab, setCurrentTab] = useState(0);
  const [rankData, setRankData] = useState<TrendingAll[]>([]);

  const loadData = async (currentTab: number) => {
    try {
      const data = await getRankData(currentTab);
      setRankData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData(currentTab);
  }, [currentTab]);

  return (
    <section>
      <div className=" flex justify-between items-center mt-10 mb-5 px-3 ">
        <h4 className="text-lg font-bold">OTT 랭킹</h4>
        <div className="text-[var(--gray-400)] text-sm">
          {new Date().toLocaleDateString("ko-KR")} 기준
        </div>
      </div>

      {/* 탭 */}
      <RankList currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* 탭 결과 */}
      <ul className="flex flex-col gap-4 p-4">
        {rankData.map((data, index) => (
          <li key={data.id} className="flex items-center  justify-between p-2">
            <div className="flex items-start gap-5">
              <div className="font-bold">{index + 1}</div>
              <div className="flex items-center gap-1">
                <Image
                  src={`${IMAGE_BASE_URL}original${data.poster_path}`}
                  width={32}
                  height={48}
                  alt={data.title || data.name}
                  className="max-w-[32px] max-h-[48px]"
                />
                <span className="text-sm">{data.title || data.name}</span>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <FaStar className="w-4 h-4" />
              <span className="text-sm">{data.vote_average.toFixed(1)}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
