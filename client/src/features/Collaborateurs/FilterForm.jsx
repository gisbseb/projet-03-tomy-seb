import React from "react";

const FilterForm = ({ filters, setFilters, filterOptions }) => {
  const handleFitlerChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filter-form">
      <input
        type="text"
        name="string"
        placeholder="Recherche"
        value={filters.string}
        onChange={handleFitlerChange}
      />
      <label>
        Rechercher par :
        <select
          name="property"
          value={filters.property}
          onChange={handleFitlerChange}
        >
          <option value="">All</option>
          <option value="city">Ville</option>
          <option value="lastname">Nom</option>
        </select>
      </label>
      <label>
        Catégorie :
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
      </label>
    </div>
  );
};

export default FilterForm;
