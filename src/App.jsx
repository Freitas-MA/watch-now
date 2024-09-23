import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Feed,
	Navbar,
	VideoDetail,
	ChannelDetail,
	SearchFeed,
} from "./components/index";
import "./index.css";
import AppFooter from "./components/footer/footer";

/**
 * The main application component that handles theme management and routing.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 *
 * @returns {JSX.Element} The rendered application component.
 *
 * @description
 * This component initializes the theme based on user preference or system settings,
 * and provides a toggle function to switch between light and dark themes. It also
 * sets up the main routes for the application using React Router.
 */
const App = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const savedTheme = Cookies.get("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		} else {
			const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
			setTheme(darkThemeMq.matches ? "dark" : "light");
			Cookies.set("theme", darkThemeMq.matches ? "dark" : "light");
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		Cookies.set("theme", newTheme);
	};

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Feed />} />
				<Route path="/video/:id" element={<VideoDetail />} />
				<Route path="/channel/:id" element={<ChannelDetail />} />
				<Route path="/search/:searchTerm" element={<SearchFeed />} />
			</Routes>
			<AppFooter />
		</BrowserRouter>
	);
};

export default App;
