import { useState } from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function SearchBar ({ onSearch, onRegionChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
      <input
        type="text"
        placeholder="Search for a country..."
        className="px-4 py-2 rounded-lg shadow-sm w-full sm:max-w-md text-black"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
      />

      <select
        className="px-4 py-2 rounded-lg shadow-sm text-black"
        onChange={(e) => onRegionChange(e.target.value)}
        defaultValue=""
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
