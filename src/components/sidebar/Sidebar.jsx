import React from "react";
import { categories } from "../../actions/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
	<div className="flex md:flex-col overflow-auto h-auto md:h-full sticky">
		{categories.map((category) => (
			<button
				key={category.name}
				type="button"
				className={`flex items-center p-2 mb-2 rounded-lg transition-all duration-300 ${
					category.name === selectedCategory ? "bg-red-600 " : "bg-transparent "
				}`}
				onClick={() => setSelectedCategory(category.name)}
			>
				<span
					className={`mr-3 transition-all duration-300 ${
						category.name === selectedCategory ? "" : ""
					}`}
				>
					{category.icon}
				</span>
				<span
					className={`transition-opacity duration-300 ${
						category.name === selectedCategory ? "opacity-100" : "opacity-50"
					}`}
				>
					{category.name}
				</span>
			</button>
		))}
	</div>
);

export default Sidebar;
