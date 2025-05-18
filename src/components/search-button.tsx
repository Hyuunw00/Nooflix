import Link from "next/link";
import { MdSearch } from "react-icons/md";

export default function SearchBtn() {
  return (
    <Link href={"/search"}>
      <div className="mt-5 px-4 ">
        <div className="px-2 py-3 text-gray-300 bg-[var(--gray-100)] w-full flex items-center gap-1 rounded-[10px] cursor-pointer">
          <MdSearch className="w-6 h-6" />
          <span className="text-[var(--gray-400)]">무엇이 궁금하신가요?</span>
        </div>
      </div>
    </Link>
  );
}
