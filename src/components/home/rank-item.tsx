import { ReactNode } from "react";

export default function RankItem({
  children,
  standard,
}: {
  children: ReactNode;
  standard: string;
}) {
  return (
    <li
      className="bg-[#4DCA9A] rounded-full px-3 py-2 text-white flex items-center gap-2 shrink-0
    select-none cursor-pointer"
    >
      {children}
      <span className="font-bold text-[14px] text-[vat(--gray-600)]">
        {standard}
      </span>
    </li>
  );
}
