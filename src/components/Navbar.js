import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
      <Logo/>
      <ul className="nav__items">
        <li className="nav__link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav__link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav__link">
          <NavLink to="/envios">Envios</NavLink>
        </li>
      </ul>
      </nav>
    </header>
  );
}
