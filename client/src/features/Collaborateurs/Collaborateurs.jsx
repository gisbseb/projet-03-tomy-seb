import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import Loader from "../../components/Loader/Loader";
import useFetch from "../../hook/useFetch";
import { FIND_ALL_USERS_URL } from "../../utils/url";
import "./collaborateurs.scss";
import CollaborateursList from "./CollaborateursList";
const Collaborateurs = () => {
  const { data: users, loading, error, refetch } = useFetch(FIND_ALL_USERS_URL);

  let content;
  if (loading) content = <Loader />;
  if (users)
    content = <CollaborateursList refetch={refetch} users={users.users} />;
  if (error) content = <p>Error</p>;
  return (
    <div className="page">
      <h1>Liste des collaborateurs</h1>
      <span className="line"></span>
      {content}
    </div>
  );
};

export default Collaborateurs;
