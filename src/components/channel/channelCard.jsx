import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../actions/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
	return (
		<div
			className={`flex justify-center items-center w-full md:w-80 h-full md:h-80 mx-auto mt-${marginTop} rounded-3xl`}
		>
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<div className="flex flex-col justify-center items-center ">
					<img
						src={
							channelDetail?.snippet?.thumbnails?.medium?.url ||
							demoProfilePicture
						}
						alt={channelDetail?.snippet?.title || "Channel Name"}
						className="w-44 h-44 rounded-full mx-auto"
					/>
					<h6 className="font-bold mt-4">
						{channelDetail?.snippet?.title || "Channel Name"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4  ml-2"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<title>svg</title>
							<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.697.736V13a1 1 0 100 2a1 1 0 001 .732v2.516a2 2 0 01-.694 1.442C5.437 15.082 4 13.517 4 11.484V9.354a1 1 0 00-.559-.935l-2-1A1 1 0 000 9V5a1 1 0 012 0v2.672l2.513.857a1 1 0 00.694-.323V7a1 1 0 00-1-1z" />
						</svg>
					</h6>
					{channelDetail?.statistics?.subscriberCount && (
						<p className="mt-2">
							{Number.parseInt(
								channelDetail?.statistics?.subscriberCount,
							).toLocaleString()}{" "}
							subscribers
						</p>
					)}
				</div>
			</Link>
		</div>
	);
};

export default ChannelCard;
