import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../hook/useFetch";
import { FIND_USER_URL } from "../../utils/url";

const Homepage = () => {
  const { data: user, loading, error } = useFetch(FIND_USER_URL);

  let content;
  if (loading) content = <Loader />;
  if (user) content = <Card user={user.user} />;
  if (error) content = <p>error</p>;

  return (
    <>
      <h1>Homepage</h1> {content}
    </>
  );
};

export default Homepage;
