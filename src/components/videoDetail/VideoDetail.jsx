import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Videos } from "../index";
import useYouTubeStore from "../../zustand/store"; // Ajuste o caminho conforme necessário
import { CheckCircleIcon } from "@heroicons/react/solid";

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
		<div className="max-h-screen flex flex-col items-center overflow-hidden">
			<div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-10 px-2 md:px-4 w-full">
				<div className="flex flex-col w-full md:w-[82%] h-[92vh] justify-center items-center">
					<div
						id="video"
						className="w-full flex flex-col justify-center items-center"
					>
						<div className="flex relative aspect-video w-full max-w-full p-6">
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${id}`}
								style={{ borderRadius: "1rem", absolute: "top-0", left: "0" }}
								width="100%"
								height="100%"
								controls
							/>
						</div>
						<div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-8">
							<h1 className="text-lg md:text-xl font-bold p-2 md:p-4">
								{title}
							</h1>
							<div className="flex flex-col md:flex-row justify-between gap-2 md:gap-6 py-2 px-2 md:px-4">
								<Link
									to={`/channel/${channelId}`}
									className="flex items-center"
								>
									<h2 className="text-base md:text-lg font-medium">
										{channelTitle}
									</h2>
									<CheckCircleIcon className="w-4 h-4 ml-1" />
								</Link>
								<div className="flex gap-2 md:gap-4 items-center">
									<p className="text-sm opacity-70">
										{Number.parseInt(viewCount).toLocaleString()} views
									</p>
									<p className="text-sm opacity-70">
										{Number.parseInt(likeCount).toLocaleString()} likes
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					id="relations"
					className="px-2 md:px-4 mt-4 md:mt-28 md:py-2 md:w-[24%] flex justify-center items-center overflow-y-auto h-[calc(100vh-4rem)] pt-4"
				>
					<Videos videos={videos} direction="column" />
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
