import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "../channel/channelCard";
import Loader from "./Loader";

/**
 * Videos component renders a list of video or channel cards.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.videos - An array of video or channel objects to be displayed.
 * @param {string} [props.direction] - The direction in which the videos should be displayed.
 * @returns {JSX.Element} The rendered Videos component.
 */
const Videos = ({ videos, direction }) => {
	if (!videos?.length) return <Loader />;

	return (
		<div
			className={
				"flex flex-row w-full flex-wrap justify-center items-center gap-4 px-4 h-full"
			}
		>
			{videos?.map((item) => (
				<div
					key={item.id.videoId}
					className="custom-bg-secondary p-1 rounded-lg "
				>
					{item.id?.videoId && <VideoCard video={item} />}
					{item.id?.channelId && <ChannelCard channelDetail={item} />}
				</div>
			))}
		</div>
	);
};

export default Videos;
