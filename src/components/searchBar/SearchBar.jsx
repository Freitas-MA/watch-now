import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Search...");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) { // Ajuste o valor conforme necessário
        setPlaceholder("🔎");
      } else {
        setPlaceholder("Search...");
      }
    };

    handleResize(); // Set placeholder on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <form
      onSubmit={onhandleSubmit}
      className="flex h-8 w-14 md:w-60 max-w-full items-center border border-gray-300 rounded-full pl-4 shadow-none focus-within:bg-slate-100 focus-within:shadow-md focus-within:text-gray-800 md:focus-within:flex md:focus-within:relative focus-within:absolute focus-within:z-10 focus-within:w-60 overflow-hidden"
    >
      <input
        ref={inputRef}
        className="bg-transparent outline-none placeholder-gray-400 flex-grow"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="p-2" aria-label="search">
        <SearchIcon className="h-6 w-6 hidden md:flex" />
      </button>
    </form>
  );
};

export default SearchBar;