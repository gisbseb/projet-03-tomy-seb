import { useAuth } from "../../context/AuthContext";

const UserForm = ({ userData, handleChange, handleSubmit, showPassword }) => {
  const { isAdmin } = useAuth();
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* {isAdmin && ( */}
      <div className="form-group">
        <label>Administrateur:</label>
        <select name="isAdmin" value={userData.isAdmin} onChange={handleChange}>
          <option value="1">Oui</option>
          <option value="0">Non</option>
        </select>
      </div>
      {/* )} */}

      <div className="form-group">
        <label>Civilité:</label>
        <select name="gender" value={userData.gender} onChange={handleChange}>
          <option value="Male">Homme</option>
          <option value="Female">Femme</option>
        </select>
      </div>
      <div className="form-group">
        <label>Categorie:</label>
        <select
          name="category"
          value={userData.category}
          onChange={handleChange}
        >
          <option value="Marketing">Marketing</option>
          <option value="Client">Client</option>
          <option value="Technique">Technique</option>
        </select>
      </div>
      <div className="form-group">
        <label>Nom :</label>
        <input
          type="text"
          name="lastname"
          value={userData.lastname}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Prénom :</label>
        <input
          type="text"
          name="firstname"
          value={userData.firstname}
          onChange={handleChange}
        />
      </div>

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
      {showPassword && (
        <>
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
            <label>Confirmer le mot de passe :</label>
            <input
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      <div className="form-group">
        <label>Téléphone :</label>
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Date de naissance :</label>
        <input
          type="date"
          name="birthdate"
          value={userData.birthdate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Ville :</label>
        <input
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Pays :</label>
        <input
          type="text"
          name="country"
          value={userData.country}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Photo URL :</label>
        <input
          type="text"
          name="photo"
          value={userData.photo}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <button type="submit" className="bg-red">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default UserForm;
