import Link from "next/link";

export default function Header() {
  return (
    <header
      className="h-15 font-bold text-lg leading-15 pl-2 backdrop-blur-sm fixed z-20
    max-w-lg w-full "
    >
      <Link href={"/"}>🍿 Nooflix</Link>
    </header>
  );
}
