import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import useFetch from "../../../hook/useFetch";
import { COLLABORATEURS_URL } from "../../../utils/url";

const Collaborateurs = () => {
  const { data: users, loading, error } = useFetch(COLLABORATEURS_URL);

  let content;

  if (loading) content = <p>Loading</p>;

  if (users)
    content = users.map((user, idx) => {
      return <Card key={idx} user={user} />;
    });
  if (error) content = <p>Error</p>;
  return <div>{content}</div>;
};

export default Collaborateurs;
