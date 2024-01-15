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
    <UserForm
      userData={userData}
      handleChange={handleChange}
      handleSubmit={handleUpdateUser}
      showPassword={true}
    />
  );
};

export default UpdateUser;
