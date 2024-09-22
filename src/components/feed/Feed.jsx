import React, { useState, useEffect } from "react";
import { Sidebar, Videos } from "../index";
import useYouTubeStore from "../../zustand/store"; // Ajuste o caminho conforme necessário
import AppFooter from "../footer/footer";

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
