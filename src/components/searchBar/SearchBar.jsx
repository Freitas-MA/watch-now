import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const onhandleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm("");
		}
	};

	return (
		<form
			onSubmit={onhandleSubmit}
			className="flex items-center border border-gray-300 rounded-full pl-4 shadow-none sm:mr-5 h-full focus-within:bg-slate-100"
		>
			<input
				className="bg-transparent outline-none  placeholder-gray-400 flex-grow"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button type="submit" className="p-2 " aria-label="search">
				<SearchIcon className="h-6 w-6" />
			</button>
		</form>
	);
};

export default SearchBar;
