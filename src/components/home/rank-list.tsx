"use client";

import { ottItems } from "@/constants/ott";
import Image from "next/image";
import { useRef, useState } from "react";

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

  return (
    <ul
      ref={listRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`flex items-center gap-4 mb-10 overflow-x-auto scollbar-hidden px-4 `}
    >
      {ottItems.map((item, index) => (
        <li
          onClick={() => setCurrentTab(index)}
          key={index}
          className={`rounded-full px-3 py-2  flex items-center gap-2 shrink-0
      select-none cursor-pointer  border border-gray-100 selected
      ${currentTab == index ? "selected" : "not-selected"}`}
        >
          <Image src={item.icon} width={24} height={24} alt="넷플릭스 로고" />
          <span className="font-bold text-[14px] text-[vat(--gray-600)]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
