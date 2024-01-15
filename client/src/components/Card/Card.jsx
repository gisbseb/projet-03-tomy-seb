import { NavLink } from "react-router-dom";

const Card = ({ user, handleDelete }) => {
  return (
    <div className="card">
      <h3>
        {user.lastname} {user.firstname}
      </h3>
      <p>{user.birthdate}</p>

      <div>
        user.isAdmin &&
        <NavLink to={"/update/" + user.id}>
          <button>Modifier</button>
        </NavLink>
        <button onClick={() => handleDelete(user)}>Supprimer</button>
      </div>
    </div>
  );
};
export default Card;
