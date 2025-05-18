"use client";

import { useRef, useState } from "react";
import RankItem from "./rank-item";
import {
  FaFire,
  FaCalendarAlt,
  FaDollarSign,
  FaStar,
  FaVoteYea,
  FaTrophy,
} from "react-icons/fa";

export default function RankList() {
  const listRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(listRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !listRef.current) return;
    const walk = e.clientX - startX;
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <ul
      ref={listRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`flex items-center gap-4 mb-10 overflow-x-auto scollbar-hidden px-4 `}
    >
      <RankItem standard="종합">
        <FaTrophy className="w-6 h-6 fill-black" />
      </RankItem>

      <RankItem standard="인기">
        <FaFire className="w-6 h-6 fill-black" />
      </RankItem>

      <RankItem standard="개봉">
        <FaCalendarAlt className="w-6 h-6 fill-black" />
      </RankItem>

      <RankItem standard="수익">
        <FaDollarSign className="w-6 h-6 fill-black" />
      </RankItem>

      <RankItem standard="평점">
        <FaStar className="w-6 h-6 fill-black" />
      </RankItem>

      <RankItem standard="투표">
        <FaVoteYea className="w-6 h-6 fill-black" />
      </RankItem>

      <RankItem standard="종합">
        <FaTrophy className="w-6 h-6 fill-black" />
      </RankItem>
    </ul>
  );
}
