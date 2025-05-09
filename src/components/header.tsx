import Link from "next/link";

export default function Header() {
  return (
    <header className="h-15 font-bold text-lg leading-15 pl-2 bg-transparent backdrop-blur-2xl">
      <Link href={"/"}>🍿 Nooflix</Link>
    </header>
  );
}
