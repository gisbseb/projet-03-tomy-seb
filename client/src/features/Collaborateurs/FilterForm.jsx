import React from "react";

const FilterForm = ({ filters, setFilters, filterOptions }) => {
  const handleFitlerChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="string"
        placeholder="Search"
        value={filters.string}
        onChange={handleFitlerChange}
      />
      <select
        name="property"
        value={filters.property}
        onChange={handleFitlerChange}
      >
        <option value="">All</option>
        <option value="city">Ville</option>
        <option value="lastname">Nom</option>
      </select>
      <select
        name="category"
        value={filters.category}
        onChange={handleFitlerChange}
      >
        <option value="">All</option>
        <option value="client">Client</option>
        <option value="marketing">Marketing</option>
        <option value="technique">Technique</option>
      </select>
    </div>
  );
};

export default FilterForm;
