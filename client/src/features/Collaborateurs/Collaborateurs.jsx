import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import Loader from "../../components/Loader/Loader";
import useFetch from "../../hook/useFetch";
import { FIND_ALL_USERS_URL } from "../../utils/url";

const Collaborateurs = () => {
  const { data: users, loading, error } = useFetch(FIND_ALL_USERS_URL);

  let content;
  if (loading) content = <Loader />;
  if (users)
    content = users.users.map((user, idx) => {
      return <Card key={idx} user={user} />;
    });
  if (error) content = <p>Error</p>;
  return <div>{content}</div>;
};

export default Collaborateurs;
