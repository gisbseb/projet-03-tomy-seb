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

const getColor = (category) => {
  switch (category) {
    case "Technique":
      return "blue";
    case "Client":
      return "green";
    case "Marketing":
      return "pink";
    default:
      return "purple";
  }
};

const Card = ({ user, handleDelete, refetch }) => {
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
        <p
          className="card-cat little-txt"
          style={{ background: getColor(user.category) }}
        >
          {user.category}
        </p>
        <h3>
          {user.lastname} {user.firstname}{" "}
          <span className="txt-light">(Age: {age} years)</span>
        </h3>
        <ul>
          <li className="flex-li">
            <img className="icone" src="/icones/mail.png" />{" "}
            <p className="pink-txt little-txt">{user.email}</p>
          </li>
          <li className="flex-li">
            <img className="icone" src="/icones/phone.png" />{" "}
            <p className="pink-txt little-txt">{user.phone}</p>
          </li>
          <li className="flex-li">
            <img className="icone" src="/icones/cake.png" />{" "}
            <p className="little-txt">Anniversaire: {formattedBirthdate}</p>
          </li>
        </ul>

        {isAdmin && (
          <div className="btn-group">
            <NavLink to={"/collaborateur/" + user._id}>
              <button className="bg-red">éditer</button>
            </NavLink>
            <DeleteUser user={user} refetch={refetch} />
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
