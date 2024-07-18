import React, { useState } from "react";

import Timer from "./Timer";
import { YouTubePlayer } from "./YouTubePlayer";

export interface EmbeddProps {
  onDone: (count: number) => void;
}

export const Embedd: React.FC<EmbeddProps> = ({ onDone }) => {
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState("");

  const onEmbedClicked = async () => {
    setRunning(true);
    const response = await fetch(
      `http://${window.location.hostname}:3003/embedPdf`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    console.log(data);
    setCount(data.count);
    onDone(data.count);
  };
  return (
    <div>
      {running && (
        <div style={{ textAlign: "center" }}>
          Embedding... Please wait
          <br />
          <YouTubePlayer />
          <Timer start={true} />
        </div>
      )}
      {!running && (
        <div style={{ margin: 40, textAlign: "center" }}>
          <h1>Embed your PDF (update the vector store)</h1>
          <p>Click the button below to embed your PDF</p>
          <button className="register-button" onClick={onEmbedClicked}>
            Embed Now!
          </button>
        </div>
      )}
    </div>
  );
};
