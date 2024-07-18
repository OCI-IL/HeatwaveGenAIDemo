import React, { useState } from "react";

export default function Welcome() {
  return (
    <div style={{ margin: 50, fontSize: "20px" }}>
      <div style={{ margin: 50, textAlign: "center", fontSize: "20px" }}>
        Welcome To Heatwave GenAI Demo!
      </div>
      <div style={{ margin: 40 }}>
        This demo demonstrate the power of RAG inside Heatwave with no GPU
      </div>
      <div style={{ margin: 40, textAlign: "center" }}>
        <li>Upload public domain PDF file to using the UI to Object Storage</li>
        <li>Run embed to update the AI Vector store</li>
        <li>Ask your question about the document domain</li>
        <li>Heatwave RAG model will answer questions based on the document</li>
      </div>
    </div>
  );
}
