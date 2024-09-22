import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "../channel/channelCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
	if (!videos?.length) return <Loader />;

	return (
		<div
			className={"flex flex-row flex-wrap justify-center items-center gap-4"}
		>
			{videos?.map((item) => (
				<div key={item.id.videoId} className="custom-bg-secondary p-1 rounded-lg">
					{item.id?.videoId && <VideoCard video={item} />}
					{item.id?.channelId && <ChannelCard channelDetail={item} />}
				</div>
			))}
		</div>
	);
};

export default Videos;
