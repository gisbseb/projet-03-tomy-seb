import { useState } from "react";
import { REGISTER_URL } from "../../../utils/url";
import UserForm from "../../../components/UserForm/userForm";
import { useAuth } from "../../../context/AuthContext";

const AddUser = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    firstname: "",
    lastname: "",
    phone: "",
    birthdate: "",
    city: "",
    country: "",
    isAdmin: 0,
    photo: "",
    category: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
        credentials: "include",
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-user page">
      <h1>Créer un utilisateur</h1>
      <span className="line"></span>
      <UserForm
        showPassword={true}
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleAddUser}
      />
    </div>
  );
};

export default AddUser;
