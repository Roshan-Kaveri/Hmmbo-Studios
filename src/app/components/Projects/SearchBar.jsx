"use-client";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar({ setCategory, setSearchTerm }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setCategory && setCategory(category);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearchClick = () => {
    setSearchTerm && setSearchTerm(searchQuery);
  };

  return (
    <div className="mt-20 flex h-10">
      <select
        className="bg-primary text-white px-4 border-r border-primary outline-none rounded-l-md"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="plugin">Plugin</option>
        <option value="bot">Bot</option>
        <option value="discord">Discord</option>
      </select>

      <input
        type="text"
        placeholder="Search"
        className="px-4 border text-black border-primary outline-none w-96"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <button
        className="flex items-center justify-center bg-[#20B478] text-white w-10 border-l border-primary rounded-r-md"
        onClick={handleSearchClick}
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
