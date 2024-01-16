import { useEffect, useState } from "react";
import UserForm from "../../../components/UserForm/userForm";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_USER_URL } from "../../../utils/url";

const UpdateUser = ({ user, showPassword }) => {
  const [userData, setUserData] = useState({
    ...(user.user ? user.user : user),
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(UPDATE_USER_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
        credentials: "include",
      });

      navigate(-1);
    } catch (err) {}
    console.log("update");
  };

  return (
    <UserForm
      userData={userData}
      handleChange={handleChange}
      handleSubmit={handleUpdateUser}
      showPassword={showPassword}
    />
  );
};

export default UpdateUser;
