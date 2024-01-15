import { useEffect } from "react";
import UpdateUser from "../Users/UpdateUser/UpdateUser";
const SingleCollaborateur = () => {
  // const { id } = useParams();

  // const { data: user, loading, error } = useFetch(FIND_USER_URL + "/" + id);

  // let content;
  // if (loading) content = <Loader />;
  // if (data) content = <p>User charger</p>;
  // if (error) content = <p>Error</p>;
  // return <div>{content}</div>;

  useEffect(() => {
    console.log("ici");
  }, []);
  return (
    <div className="page">
      <h1>Modifier le collaborateurs</h1>

      <UpdateUser />
    </div>
  );
};

export default SingleCollaborateur;
