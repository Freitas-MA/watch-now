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
  <div className="video-card ">
    <Link to={videoId ? `/video/${videoId}` : "/video/cV2gBU6hKfY"}>
      <img
        src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        className="video-card-image rounded-lg"
      />
    </Link>
    <div className="video-card-info contentBlock">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <p className="video-card-title">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </p>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <p className="video-card-channel">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon className="video-card-channel-icon" />
        </p>
      </Link>
    </div>
  </div>
);

export default VideoCard;
