import { useEffect } from "react";
import UpdateUser from "../Users/UpdateUser/UpdateUser";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { FIND_USER_URL } from "../../utils/url";
import Loader from "../../components/Loader/Loader";
const SingleCollaborateur = () => {
  const { id } = useParams();

  const { data: user, loading, error } = useFetch(FIND_USER_URL + "/" + id);

  let content;
  if (loading) content = <Loader />;
  if (user) content = <UpdateUser user={user} showPassword={false} />;
  if (error) content = <p>Error</p>;

  useEffect(() => {
    console.log("ici");
  }, []);
  return (
    <div className="page">
      <h1>Modifier le collaborateurs</h1>

      {content}
    </div>
  );
};

export default SingleCollaborateur;
