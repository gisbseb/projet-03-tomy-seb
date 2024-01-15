import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Loader from "../../components/Loader/Loader";
import { FIND_CURRENT_USER_URL } from "../../utils/url";

const Account = () => {
  const { id } = useParams();

  const { data: user, loading, error } = useFetch(FIND_CURRENT_USER_URL);

  let content;
  if (loading) content = <Loader />;
  if (user) content = <p>User charger</p>;
  if (error) content = <p>Error</p>;
  return <div>{content}</div>;
};

export default Account;
