import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 bg-gray-500">
      <nav>
        <ul className="flex justify-between items-center px-4 py-2 text-white">
          <Link href={"/"}>
            <li>HOME</li>
          </Link>
          <Link href={"/search"}>
            <li>SEARCH</li>
          </Link>
          <Link href={"/movie"}>
            <li>MOVIE</li>
          </Link>
          <Link href={"/tv"}>
            <li>TV</li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}
