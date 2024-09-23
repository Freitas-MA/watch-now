/**
 * Entry point for the React application.
 * 
 * This file imports necessary modules and renders the main App component
 * into the root DOM element.
 * 
 * @file /d:/Projetos/youtube_clone_app/src/index.jsx
 * @module index
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

ReactDOM.render(
	<React.StrictMode>
		<main>
			<App />
		</main>
	</React.StrictMode>,
	document.getElementById("root"),
);
