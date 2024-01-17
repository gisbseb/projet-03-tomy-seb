import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../hook/useFetch";
import { FIND_USER_URL } from "../../utils/url";

const Homepage = () => {
  const { data: user, loading, error, refetch } = useFetch(FIND_USER_URL);

  let content;
  if (loading) content = <Loader />;
  if (user) content = <Card user={user.user} refetch={refetch} />;
  if (error) content = <p>error</p>;

  return (
    <div className="page">
      <h1 className="">Bienvenue sur l'intranet</h1>
      <h2>
        La plate-forme de l'entreprise qui vous permet de retrouver tous vos
        collaborateurs
      </h2>
      <p>Avez vous dit bonjour à</p>
      {content}
      <button className="bg-red" onClick={refetch}>
        Dire bonjour à quelqu'un d'autre
      </button>
    </div>
  );
};

export default Homepage;
