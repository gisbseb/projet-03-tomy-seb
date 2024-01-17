import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { REGEX } from "../../utils/regex";
import UserErr from "./UserErr.jsx";
const UserForm = ({ userData, handleChange, handleSubmit, showPassword }) => {
  const { isAdmin } = useAuth();

  const cityError =
    !REGEX.city.regex.test(userData.city) && userData.city.length > 0;
  const lastnameError =
    !REGEX.name.regex.test(userData.lastname) && userData.lastname.length > 0;
  const firstnameError =
    !REGEX.name.regex.test(userData.firstname) && userData.firstname.length > 0;
  const phoneError =
    !REGEX.phoneNumber.regex.test(userData.phone) && userData.phone.length > 0;
  const countryError =
    !REGEX.country.regex.test(userData.country) && userData.country.length > 0;
  const emailError =
    !REGEX.email.regex.test(userData.email) && userData.email.length > 0;
  const passwordError =
    !REGEX.password.regex.test(userData.password) &&
    showPassword &&
    userData.password.length > 0;

  const canSubmit = [
    !countryError,
    !lastnameError,
    !cityError,
    !firstnameError,
    !phoneError,
    !passwordError,
  ].every(Boolean);

  useEffect(() => {
    console.log(
      "country" + countryError,
      "lastname" + lastnameError,
      "city" + cityError,
      "first" + firstnameError,
      "phone" + phoneError,
      "pwd" + passwordError,
      "canSub" + canSubmit
    );
  }, [
    countryError,
    lastnameError,
    cityError,
    firstnameError,
    phoneError,
    passwordError,
    canSubmit,
  ]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      {isAdmin && (
        <div className="form-group">
          <div className="flex">
            <label>Administrateur:</label>
            <select
              name="isAdmin"
              value={userData.isAdmin}
              onChange={handleChange}
            >
              <option value={true}>Oui</option>
              <option value={false}>Non</option>
            </select>
          </div>
        </div>
      )}

      <div className="form-group">
        <div className="flex">
          <label>Civilité:</label>
          <select name="gender" value={userData.gender} onChange={handleChange}>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="flex">
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
      </div>
      <div className="form-group">
        <div className="flex">
          <label>Nom :</label>
          <input
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
          />
        </div>
        <UserErr isError={lastnameError} errMsg={REGEX.name.err} />
      </div>
      <div className="form-group">
        <div className="flex">
          <label>Prénom :</label>
          <input
            type="text"
            name="firstname"
            value={userData.firstname}
            onChange={handleChange}
          />
        </div>
        <UserErr isError={firstnameError} errMsg={REGEX.name.err} />
      </div>

      <div className="form-group">
        <div className="flex">
          <label>Email :</label>
          <input
            type="text"
            placeholder="ex: owen.lopez@example.com"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <UserErr isError={emailError} errMsg={REGEX.email.err} />
      </div>
      {showPassword && (
        <>
          <div className="form-group">
            <div className="flex">
              <label>Mot de passe :</label>
              <div>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <UserErr isError={passwordError} errMsg={REGEX.password.err} />
          </div>
        </>
      )}
      <div className="form-group">
        <div className="flex">
          <label>Téléphone :</label>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
        </div>
        <UserErr isError={phoneError} errMsg={REGEX.phoneNumber.err} />
      </div>
      <div className="form-group">
        <div className="flex">
          <label>Date de naissance :</label>
          <input
            type="date"
            name="birthdate"
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                .toISOString()
                .split("T")[0]
            }
            value={userData.birthdate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="flex">
          <label>Ville :</label>
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleChange}
          />
        </div>
        <UserErr isError={cityError} errMsg={REGEX.city.err} />
      </div>

      <div className="form-group">
        <div className="flex">
          <label>Pays :</label>
          <input
            type="text"
            name="country"
            value={userData.country}
            onChange={handleChange}
          />{" "}
        </div>
        <UserErr isError={countryError} errMsg={REGEX.country.err} />
      </div>
      <div className="form-group">
        <div className="flex">
          <label>Photo URL :</label>
          <input
            type="text"
            name="photo"
            value={userData.photo}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <button type="submit" className="bg-red" disabled={!canSubmit}>
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default UserForm;
