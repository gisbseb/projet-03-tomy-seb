import { NavLink } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Connexion</NavLink>
        </li>
        <li>
          <NavLink to="/home">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/collaborateurs">Collaborateurs</NavLink>
        </li>
        <li>
          <NavLink to="/compte">Compte</NavLink>
        </li>
        <li>
          <NavLink>Deconnexion</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
