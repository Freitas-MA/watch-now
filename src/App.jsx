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
		</BrowserRouter>
	);
};

export default App;
