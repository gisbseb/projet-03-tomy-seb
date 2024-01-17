import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import FilterForm from "./FilterForm";

const CollaborateursList = ({ users, refetch }) => {
  const [filters, setFilters] = useState({
    string: "",
    category: "",
    property: "",
  });

  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    setFilteredUsers(getFilteredUsers());
  }, [filters, users]);

  const getFilteredUsers = () => {
    let filteredUsers = [...users];

    if (filters.category) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user?.category?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.property && filters.string) {
      filteredUsers = filteredUsers.filter((user) =>
        user[filters.property]
          .toLowerCase()
          .includes(filters.string.toLowerCase())
      );
    } else if (filters.string) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.firstname.toLowerCase().includes(filters.string.toLowerCase()) ||
          user.lastname.toLowerCase().includes(filters.string.toLowerCase()) ||
          user.city.toLowerCase().includes(filters.string.toLowerCase())
      );
    }

    return filteredUsers;
  };

  return (
    <>
      <FilterForm filters={filters} setFilters={setFilters} />
      <div className="grid-container">
        {filteredUsers &&
          filteredUsers.map((user, idx) => (
            <Card key={idx} user={user} refetch={refetch} />
          ))}
      </div>
    </>
  );
};

export default CollaborateursList;
