import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./card.scss";
import DeleteUser from "../../features/Users/DeleteUser/DeleteUser";
const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const formatDate = (birthdate) => {
  const date = new Date(birthdate);
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString("fr-FR", options);
};

const Card = ({ user, handleDelete }) => {
  const { isAdmin } = useAuth();
  const age = calculateAge(user.birthdate);
  const formattedBirthdate = formatDate(user.birthdate);

  return (
    <div className="card">
      <img
        className="card-image"
        src={user.photo}
        alt={`Portrait ${user.firstname} ${user.lastname}`}
      />
      <div className="card-content">
        <p className="card-cat">{user.category}</p>
        <h3>
          {user.lastname} {user.firstname}{" "}
          <span className="txt-light">(Age: {age} years)</span>
        </h3>
        <ul>
          <li>{user.email}</li>
          <li>{user.phone}</li>
          <li>Anniversaire: {formattedBirthdate}</li>
        </ul>

        {isAdmin && (
          <div>
            <NavLink to={"/collaborateurs/" + user._id}>
              <button className="bg-red">éditer</button>
            </NavLink>
            <DeleteUser />
            {/* <button className="bg-red" onClick={() => handleDelete(user)}>
              Supprimer
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
