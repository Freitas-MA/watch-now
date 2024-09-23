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

/**
 * VideoCard component renders a video card with a thumbnail, title, and channel information.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.video - The video object containing video details.
 * @param {Object} props.video.id - The video ID object.
 * @param {string} props.video.id.videoId - The unique identifier for the video.
 * @param {Object} props.video.snippet - The snippet object containing video metadata.
 * @param {string} props.video.snippet.thumbnails.high.url - The URL of the high-resolution thumbnail.
 * @param {string} props.video.snippet.title - The title of the video.
 * @param {string} props.video.snippet.channelId - The unique identifier for the channel.
 * @param {string} props.video.snippet.channelTitle - The title of the channel.
 * @returns {JSX.Element} The rendered video card component.
 */
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
