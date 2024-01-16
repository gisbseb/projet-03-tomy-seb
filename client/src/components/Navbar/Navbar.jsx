import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
const Navbar = () => {
  const { isLoggedIn, isAdmin, currentUser } = useAuth();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <nav className="navbar">
      <li className="flex-li">
        {isLoggedIn ? (
          <NavLink to="/home">
            <img className="logo" src="/icones/logo.png" />
            Intranet
          </NavLink>
        ) : (
          <li className="flex-li">
            <img className="logo" src="/icones/logo.png" /> <p>Intranet</p>
          </li>
        )}
      </li>
      <ul>
        {isLoggedIn ? (
          <>
            <li className="flex-li">
              <NavLink to="/collaborateurs">
                <img className="icone icone-liste" src="/icones/liste.png" />
                Liste{" "}
              </NavLink>
            </li>

            {isAdmin && (
              <li className="flex-li">
                <NavLink to="/add">
                  <img className="icone icone-user" src="/icones/user.png" />
                  Ajouter
                </NavLink>
              </li>
            )}
            <li className="flex-li">
              <NavLink to="/compte">
                {currentUser?.photo ? (
                  <img src={currentUser.photo} />
                ) : (
                  "Mon compte"
                )}
              </NavLink>
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
