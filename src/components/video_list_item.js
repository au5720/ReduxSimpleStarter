import React from "react";


const VideoListItem = ({video, onChangeVideoItem}) => {
    console.log(video.etag);
    return (
        <li class="video-list-item" key={video.etag} onClick={onChangeVideoItem(video)} >{video.snippet.title}</li>
    );
};


export default VideoListItem;