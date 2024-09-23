import React from "react";
import { categories } from "../../actions/constants";

/**
 * Sidebar component renders a list of categories as buttons.
 * Each button represents a category and can be selected to update the selected category state.
 *
 * @param {Object} props - The component props.
 * @param {string} props.selectedCategory - The currently selected category.
 * @param {Function} props.setSelectedCategory - Function to update the selected category.
 * @returns {JSX.Element} The rendered Sidebar component.
 */
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
	<div className="flex md:flex-col overflow-auto h-auto md:h-full sticky top-0 left-0 pl-4">
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
