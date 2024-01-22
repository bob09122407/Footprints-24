import React, { useEffect, useRef } from "react";

const VideoBox = ({ url }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [url]);
  return (
    <div className="video_main">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        width="100%"
      >
        <source src={`${url}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBox;
