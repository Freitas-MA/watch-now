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
