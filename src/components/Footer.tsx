import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <nav className="abosolute bottom-0 z-20  px-8 py-2">
        <ul className="flex justify-between items-center">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/search">SEARCH</NavLink>
          </li>
          <li>
            <NavLink to="/movie/list/0">MOVIE</NavLink>
          </li>
          <li>
            <NavLink to="/tv/list">TV</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
