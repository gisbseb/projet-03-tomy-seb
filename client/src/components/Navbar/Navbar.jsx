import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
const Navbar = () => {
  const { isLoggedIn, isAdmin } = useAuth();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <nav className="navbar">
      <li className="flex-li">
        <img className="logo" src="/icones/logo.png" />
        {isLoggedIn ? <NavLink to="/home">Intranet </NavLink> : <p>Intranet</p>}
      </li>
      <ul>
        {isLoggedIn ? (
          <>
            <li className="flex-li">
              <img className="icone icone-liste" src="/icones/liste.png" />
              <NavLink to="/collaborateurs">Liste </NavLink>
            </li>

            {isAdmin && (
              <li className="flex-li">
                <img className="icone icone-user" src="/icones/user.png" />
                <NavLink to="/add">Ajouter</NavLink>
              </li>
            )}
            <li className="flex-li">
              <NavLink to="/compte">Compte</NavLink>
            </li>
            <li>
              {/* Ajoutez ici la logique de déconnexion */}
              <NavLink to="/deconnexion">
                <button className="bg-red btn-logout">
                  <img className="icone arrow-icone" src="/icones/arrow.png" />
                  Déconnexion
                </button>
              </NavLink>
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
