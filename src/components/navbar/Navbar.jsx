import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../actions/constants";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	useEffect(() => {
		const savedTheme = getThemeFromCookie();
		if (savedTheme) {
			setDarkTheme(savedTheme === "dark");
			handleDataTheme(savedTheme);
		} else {
			const systemTheme = handleSystemTheme() ? "dark" : "light";
			setDarkTheme(systemTheme === "dark");
			handleDataTheme(systemTheme);
			handleCookieTheme(systemTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = !darkTheme;
		setDarkTheme(newTheme);
		const theme = newTheme ? "dark" : "light";
		handleDataTheme(theme);
		handleCookieTheme(theme);
	};

	const handleDataTheme = (theme) => {
		document.body.setAttribute("data-theme", theme);
	};

	const handleSystemTheme = () => {
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	};

	const handleCookieTheme = (theme) => {
		document.cookie = `theme=${theme}; max-age=31536000; path=/`;
	};

	const getThemeFromCookie = () => {
		const themeCookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith("theme="));
		return themeCookie ? themeCookie.split("=")[1] : null;
	};

	return (
		<nav className="absolute flex top-0 left-0 md:px-10 justify-between items-center w-full max-w-[100vw] h-14 z-10 custom-bg-primary p-2 shadow-lg">
			<Link to="/" className="flex items-center md:pl-6">
				<img src={logo} alt="logo" height={75} width={75} />
			</Link>
			<div className="flex flex-row w-[80%] justify-end items-center">
				<SearchBar />
				<label className="relative inline-flex items-center cursor-pointer scale-50">
					<input
						className="sr-only peer"
						value=""
						type="checkbox"
						onClick={toggleTheme}
					/>
					<div className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0" />
				</label>
			</div>
		</nav>
	);
};

export default Navbar;
