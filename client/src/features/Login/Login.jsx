import { useState } from "react";
import "./login.scss";
import { REGEX } from "../../utils/regex";
import { useAuth } from "../../context/AuthContext";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { handleLogin } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const canSubmit =
    REGEX.email.regex.test(userData.email) &&
    REGEX.password.regex.test(userData.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <div className="login">
      <h1>Connexion</h1>
      <span className="line"></span>
      <p>
        Pour vous connecter à l'intranet, entrez votre identifiant et mot de
        passe
      </p>
      <form className="login-form form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email :</label>
          <input
            type="text"
            placeholder="ex: owen.lopez@example.com"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn-submit bg-red"
            disabled={!canSubmit}
          >
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
