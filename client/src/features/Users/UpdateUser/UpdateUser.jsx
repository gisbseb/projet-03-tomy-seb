import { useState } from "react";
import UserForm from "../../../components/UserForm/userForm";

const UpdateUser = () => {
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

  const handleChange = () => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log("update");
  };

  return (
    <div>
      <h1>Modifier mon profil</h1>

      <UserForm
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleUpdateUser}
        showPassword={true}
      />
    </div>
  );
};

export default UpdateUser;
