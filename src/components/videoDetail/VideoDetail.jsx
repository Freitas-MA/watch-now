import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Videos } from "../index";
import useYouTubeStore from "../../zustand/store"; // Ajuste o caminho conforme necessário
import { CheckCircleIcon } from "@heroicons/react/solid";

/**
 * VideoDetail component fetches and displays the details of a YouTube video along with related videos.
 *
 * @component
 * @example
 * return (
 *   <VideoDetail />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @description
 * This component uses the `useParams` hook to get the video ID from the URL, and the `useYouTubeStore` hook to fetch video details and related videos. It displays the video using `ReactPlayer` and shows the video title, channel information, view count, and like count. Related videos are displayed in a scrollable section.
 *
 * @requires useState
 * @requires useEffect
 * @requires useParams
 * @requires useYouTubeStore
 * @requires ReactPlayer
 * @requires Link
 * @requires CheckCircleIcon
 * @requires Videos
 */
const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null);
	const [videos, setVideos] = useState(null);
	const { id } = useParams();
	const { fetchVideoDetails, fetchRelatedVideos } = useYouTubeStore();

	useEffect(() => {
		const loadVideoData = async () => {
			const videoData = await fetchVideoDetails(id);
			setVideoDetail(videoData);

			const relatedVideos = await fetchRelatedVideos(id);
			setVideos(relatedVideos);
		};

		loadVideoData();
	}, [id, fetchVideoDetails, fetchRelatedVideos]);

	if (!videoDetail?.snippet) return "<Loader />";

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	return (
		<div className="min-h-screen md:max-h-screen flex flex-col items-center md:overflow-hidden">
			<div className="flex flex-col md:flex-row items-start justify-between gap-2 md:gap-10 pt-20 px-2 md:px-4 h-full w-full">
				<div className="flex flex-col w-full h-full md:w-[82%] md:h-[92vh] justify-start items-center">
					<div
						id="video"
						className="w-full md:w-[80%] flex flex-col justify-center items-center"
					>
						<div className="flex relative aspect-video w-full max-w-full rounded-sm overflow-hidden">
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${id}`}
								style={{
									borderRadius: "5rem",
									absolute: "top-0",
									left: "0",
								}}
								width="100%"
								height="100%"
								controls
							/>
						</div>
						<div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-0">
							<h1 className="text-sm md:text-lg font-bold p-2 md:py-4">
								{title}
							</h1>
							<div className="flex flex-col md:flex-row justify-between gap-2 md:gap-6 py-2 px-2 md:px-4">
								<Link
									to={`/channel/${channelId}`}
									className="flex flex-row items-center"
								>
									<h2 className="text-base md:text-sm font-medium text-nowrap">
										{channelTitle}
									</h2>
									<CheckCircleIcon className="w-4 h-4 ml-1" />
								</Link>
								<div className="flex gap-2 md:gap-4 items-center">
									<p className="text-sm opacity-70 text-nowrap">
										{Number.parseInt(viewCount).toLocaleString()} 👀 
									</p>
									<p className="text-sm opacity-70 text-nowrap">
										{Number.parseInt(likeCount).toLocaleString()} 👍
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					id="relations"
					className="px-2 mb-16 md:px-4 md:mt-0 md:py-2 md:w-[24%] flex justify-center items-center md:overflow-y-auto md:h-[calc(100vh-4rem)] md:pt-4"
				>
					<Videos videos={videos} direction="column" />
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
