import React, { useState, useEffect } from "react";
import { Sidebar, Videos } from "../index";
import useYouTubeStore from "../../zustand/store"; // Ajuste o caminho conforme necessário

/**
 * Feed component that displays a list of videos based on the selected category.
 * 
 * @component
 * @example
 * return (
 *   <Feed />
 * )
 * 
 * @returns {JSX.Element} The rendered Feed component.
 * 
 * @description
 * This component fetches and displays videos from YouTube based on the selected category.
 * It uses the `useYouTubeStore` hook to fetch videos and manages the selected category and videos state.
 * 
 * @function
 * @name Feed
 * 
 * @property {string} selectedCategory - The currently selected category for fetching videos.
 * @property {function} setSelectedCategory - Function to update the selected category.
 * @property {Array} videos - Array of videos fetched from YouTube.
 * @property {function} fetchVideos - Function to fetch videos from YouTube.
 * 
 * @hook
 * @name useEffect
 * @description Fetches videos whenever the selected category changes.
 * 
 * @returns {JSX.Element} The rendered Feed component.
 */
const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState([]);
	const fetchVideos = useYouTubeStore((state) => state.fetchVideos);

	useEffect(() => {
		const loadVideos = async () => {
			const fetchedVideos = await fetchVideos(selectedCategory, true); // Note o 'true' aqui
			setVideos(fetchedVideos);
		};

		loadVideos();
	}, [selectedCategory, fetchVideos]);

	return (
		<div className="flex flex-col md:flex-row relative max-h-screen pt-14 h-[96vh]">
			{/* Sidebar */}
			<div className="h-auto md:w-[200px]  custom-bg-secondary">
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</div>

			{/* Videos Section */}
			<div className="flex-1 p-4 overflow-y-auto h-[90vh]">

				{/* Componente Videos que renderiza a lista de vídeos */}
				<Videos videos={videos} />
			</div>
		</div>
	);
};

export default Feed;
