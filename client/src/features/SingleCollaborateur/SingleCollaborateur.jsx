import Loader from "../../components/Loader/Loader";
import useFetch from "../../hook/useFetch";
import { FIND_USER_URL } from "../../utils/url";
import { useParams } from "react-router-dom";
const SingleCollaborateur = (id) => {
  const { id } = useParams();

  const { data: user, loading, error } = useFetch(FIND_USER_URL + "/" + id);

  let content;
  if (loading) content = <Loader />;
  if (data) content = <p>User charger</p>;
  if (error) content = <p>Error</p>;
  return <div>{content}</div>;
};

export default SingleCollaborateur;
