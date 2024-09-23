import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

/**
 * SearchBar component allows users to input a search term and navigate to a search results page.
 * 
 * @component
 * @example
 * return (
 *   <SearchBar />
 * )
 * 
 * @returns {JSX.Element} The rendered SearchBar component.
 * 
 * @description
 * - Uses `useState` to manage the search term and placeholder text.
 * - Uses `useNavigate` from `react-router-dom` to navigate to the search results page.
 * - Uses `useRef` to reference the input element.
 * - Uses `useEffect` to handle window resize events and adjust the placeholder text accordingly.
 * 
 * @function
 * @name SearchBar
 */
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