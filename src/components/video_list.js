import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = ({videos, onChangeVideoItem}) => {
  const videoListItems = videos.map( video => <VideoListItem key={video.etag} video={video} onChangeVideoItem={onChangeVideoItem}/> );
  return (
    <ul className="video-list"> 
      { videoListItems } 
    </ul>
  );
};


export default VideoList;
