import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Loader from "../../components/Loader/Loader";
import { FIND_CURRENT_USER_URL } from "../../utils/url";
import UpdateUser from "../Users/UpdateUser/UpdateUser";

const Account = () => {
  return (
    <div className="form-page">
      <UpdateUser />;
    </div>
  );
};

export default Account;
