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
		<div className="min-h-[96vh] flex flex-col items-center no-scrollbar">
			<div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full overflow-auto no-scrollbar">
				<div className="flex flex-col w-full md:w-[82%] h-[92vh] justify-center items-center sticky">
					<div id="video" className="w-full sticky top-20">
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className="react-player"
							controls
							width="full"
							height="60vh"
						/>
						<h1 className=" text-xl font-bold p-4">{title}</h1>
						<div className="flex justify-between  py-2 px-4">
							<Link to={`/channel/${channelId}`} className="flex items-center">
								<h2 className="text-lg font-medium">{channelTitle}</h2>
								<CheckCircleIcon className="w-4 h-4  ml-1" />
							</Link>
							<div className="flex gap-4 items-center">
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
				<div
					id="relations"
					className="px-4 py-6 md:py-2 w-full md:w-[18%] flex justify-center items-center overflow-auto no-scrollbar"
				>
					<Videos videos={videos} direction="column" />
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
