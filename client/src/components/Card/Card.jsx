import { NavLink } from "react-router-dom";
import useAutorize from "../../hook/useAutorise";

const Card = ({ user, handleDelete }) => {
  const { isAdmin } = useAutorize();

  return (
    <div className="card">
      <img
        className="card-image"
        src={user.photo}
        alt={`Portrait ${user.firstname} ${user.lastname}`}
      />
      <div className="card-content">
        <h3>
          {user.lastname} {user.firstname}
        </h3>
        <p>{user.birthdate}</p>
        {isAdmin && (
          <div>
            <NavLink to={"/update/" + user.id}>
              <button>Modifier</button>
            </NavLink>
            <button onClick={() => handleDelete(user)}>Supprimer</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
