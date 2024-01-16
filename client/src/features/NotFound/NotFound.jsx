import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page">
      <h1>404</h1>
      <NavLink to="/">Revenir en lieu sur</NavLink>
    </div>
  );
};

export default NotFound;
