import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/solid";
import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoChannelTitle,
} from "../../actions/constants";
import "../../index.css";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => (
	<div className="video-card rounded-lg overflow-hidden">
		<Link to={videoId ? `/video/${videoId}` : "/video/cV2gBU6hKfY"}>
			<img
				src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
				alt={snippet?.title}
				className="video-card-image h-auto object-cover"
			/>
		</Link>
		<div className="video-card-info">
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<p className="video-card-title text-lg font-semibold">
					{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
				</p>
			</Link>
			<Link
				to={
					snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
				}
			>
				<p className="video-card-channel text-sm text-gray-600 flex items-center p-4">
					{snippet?.channelTitle || demoChannelTitle}
					<CheckCircleIcon className="video-card-channel-icon ml-1 w-4 h-4" />
				</p>
			</Link>
		</div>
	</div>
);

export default VideoCard;
