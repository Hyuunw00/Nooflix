import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function MoveTopBtn({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showScollButton, setShowScrollButton] = useState(false);

  // 스크롤 버튼(클릭 시 맨 위로 이동)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`fixed right-[33%] top-[720px] z-[5] ransition-all duration-500  ${
        showScollButton ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
