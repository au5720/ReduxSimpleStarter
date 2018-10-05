import React from 'react';

const VideoDetails = ({video}) => {
  console.log(video);
  if(!video) {
    return <div>Loading ....</div>;
  }
  console.log("here", video.id.videoId);

  const url=`https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <iframe className="video-detail" width="600" height="315" src={url}></iframe>
      <p>{video.snippet.title}</p>
      <p>{video.snippet.description}}</p>
    </div>
  );
};

export default VideoDetails;
