import React from "react";

export function YouTubePlayer() {
  return (
    <iframe
      id="ytplayer"
      width="1000"
      height="500"
      src="https://www.youtube.com/embed/gVcW_FQczxc?autoplay=1&origin=http://example.com"
      allow="autoplay"
    ></iframe>
  );
}
