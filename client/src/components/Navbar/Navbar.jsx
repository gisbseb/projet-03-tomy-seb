import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
const Navbar = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <nav className="navbar">
      <div>logo</div>
      {isLoggedIn && (
        <ul>
          <li>
            <NavLink to="/home">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/add">add user</NavLink>
          </li>
          <li>
            <NavLink to="/collaborateurs">Collaborateurs</NavLink>
          </li>
        </ul>
      )}
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink to="/compte">Compte</NavLink>
            </li>
            <li>
              {/* Ajoutez ici la logique de déconnexion */}
              <NavLink to="/deconnexion">Déconnexion</NavLink>
            </li>
          </>
        ) : (
          <li>
            <button className="bg-red">
              <NavLink to="/" className="txt-white">
                Connexion
              </NavLink>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
