import Link from "next/link";
import { ReactNode } from "react";
import { MdMovie, MdTv, MdSearch, MdHome } from "react-icons/md";

function Menu({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="flex flex-col items-center gap-[2px]">
      {children}
      <span className="text-[12px]">{title}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="py-2 bg-[#1C1C1C] text-gray-300">
      <nav>
        <ul className="flex justify-around items-center ">
          <Link href={"/"}>
            <Menu title="home">
              <MdHome className="w-6 h-6" />
            </Menu>
          </Link>
          <Link href={"/search"}>
            <Menu title="search">
              <MdSearch className="w-6 h-6" />
            </Menu>
          </Link>
          <Link href={"/movie"}>
            <Menu title="movie">
              <MdMovie className="w-6 h-6" />
            </Menu>
          </Link>
          <Link href={"/tv"}>
            <Menu title="tv">
              <MdTv className="w-6 h-6" />
            </Menu>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}
