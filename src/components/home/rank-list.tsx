"use client";

import { ReactNode, useRef, useState } from "react";
import {
  FaFire,
  FaCalendarAlt,
  FaDollarSign,
  FaStar,
  FaVoteYea,
  FaTrophy,
} from "react-icons/fa";

export default function RankList({
  currentTab,
  setCurrentTab,
}: {
  currentTab: number;
  setCurrentTab: (index: number) => void;
}) {
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

  interface Items {
    label: string;
    icon: ReactNode;
  }

  const items: Items[] = [
    { label: "종합", icon: <FaTrophy className="w-6 h-6 fill-black" /> },
    { label: "인기", icon: <FaFire className="w-6 h-6 fill-black" /> },
    { label: "개봉", icon: <FaCalendarAlt className="w-6 h-6 fill-black" /> },
    { label: "수익", icon: <FaDollarSign className="w-6 h-6 fill-black" /> },
    { label: "평점", icon: <FaStar className="w-6 h-6 fill-black" /> },
    { label: "투표", icon: <FaVoteYea className="w-6 h-6 fill-black" /> },
  ];

  return (
    <ul
      ref={listRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`flex items-center gap-4 mb-10 overflow-x-auto scollbar-hidden px-4 `}
    >
      {items.map((item, index) => (
        <li
          onClick={() => setCurrentTab(index)}
          key={index}
          className={`rounded-full px-3 py-2  flex items-center gap-2 shrink-0
      select-none cursor-pointer  border border-gray-100 selected
      ${currentTab == index ? "selected" : "not-selected"}`}
        >
          {item.icon}
          <span className="font-bold text-[14px] text-[vat(--gray-600)]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
