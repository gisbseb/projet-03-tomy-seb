import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Loader from "../../components/Loader/Loader";
import { FIND_CURRENT_USER_URL } from "../../utils/url";
import UpdateUser from "../Users/UpdateUser/UpdateUser";
import { useAuth } from "../../context/AuthContext";

const Account = () => {
  const { currentUser } = useAuth();
  return (
    <div className="page">
      <h1>Modifier mon profil</h1>
      <UpdateUser user={currentUser} showPassword={true} />;
    </div>
  );
};

export default Account;
