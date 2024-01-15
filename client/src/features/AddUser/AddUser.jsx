import { useState } from "react";
import { REGISTER_URL } from "../../utils/url";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    email: "sebastien@gmail.com",
    password: "password",
    gender: "male",
    firstname: "seb",
    lastname: "gisb",
    phone: "0466214852",
    birthdate: new Date("27/09/1994"),
    city: "grenoble",
    country: "france",
    isAdmin: 1,
    photo: "tt",
    category: "Client",
  });

  const handleAddUser = async () => {
    try {
      const res = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newUser }),
        credentials: "include",
      });

      const responseData = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 onClick={handleAddUser}>AddUser</h1>
    </div>
  );
};

export default AddUser;
