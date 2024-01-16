import { useState } from "react";
import { DELETE_USER_URL, FIND_ALL_USERS_URL } from "../../../utils/url";
import Modal from "../../../components/Modal/Modal.Jsx";
import useFetch from "../../../hook/useFetch";

const DeleteUser = ({ user, refetch }) => {
  const [isDeleteFurnitureOpen, setIsDeleteFurnitureOpen] = useState(false);

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(DELETE_USER_URL + "/" + user._id, {
        method: "DELETE",
        credentials: "include",
      });
      refetch();
      setIsDeleteFurnitureOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button className="bg-red" onClick={() => setIsDeleteFurnitureOpen(true)}>
        Supprimer
      </button>
      <Modal
        isOpen={isDeleteFurnitureOpen}
        setIsOpen={setIsDeleteFurnitureOpen}
      >
        <h2>
          Supprimer le collaborateur
          {user.lastname} {user.firstname}
        </h2>
        <button onClick={handleDeleteUser} className="bg-red">
          Supprimer
        </button>
      </Modal>
    </>
  );
};

export default DeleteUser;
