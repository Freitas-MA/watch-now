import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "../index";
import useYouTubeStore from "../../zustand/store"; // Ajuste o caminho conforme necessário

const SearchFeed = () => {
	const [videos, setVideos] = useState(null);
	const { searchTerm } = useParams();
	const fetchVideos = useYouTubeStore((state) => state.fetchVideos);

	useEffect(() => {
		const loadVideos = async () => {
			const fetchedVideos = await fetchVideos(searchTerm);
			setVideos(fetchedVideos);
		};

		loadVideos();
	}, [searchTerm, fetchVideos]);

	return (
		<div className="p-4 min-h-[95vh]">
			<h1 className="text-2xl font-bold  mb-4 ml-4 sm:ml-24">
				Search Results for <span className="">{searchTerm}</span> videos
			</h1>
			<div className="flex">
				<div className="mr-0 sm:mr-24" />
				{videos ? (
					<Videos videos={videos} />
				) : (
					<p className="">No videos found</p>
				)}
			</div>
		</div>
	);
};

export default SearchFeed;
