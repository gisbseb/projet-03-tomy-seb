import { NavLink } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>logo</div>
      <ul>
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
      <ul>
        <li>
          <button className="bg-red">
            <NavLink to="/" className="txt-white">
              Connexion
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
