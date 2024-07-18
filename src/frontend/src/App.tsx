import React from "react";
import logo from "./images/ORBR_BANNER.png";
import "./App.css";
import Welcome from "./comps/Welcome";
import { UploadPdf } from "./comps/UploadPdf";
import { Embedd } from "./comps/Embed";
import Search from "./comps/Search";

function App() {
  const [isShowUpload, setIsShowUpload] = React.useState(false);
  const [isShowEmbed, setIsShowEmbed] = React.useState(false);
  const [isShowWelcome, setIsShowWelcome] = React.useState(true);
  const [isShowSearch, setIsShowSearch] = React.useState(false);
  const [isShowSearchBtn, setIsShowSearchBtn] = React.useState(true);

  const onUploadDocument = () => {
    setIsShowUpload(true);
    setIsShowWelcome(false);
    setIsShowSearchBtn(false);
  };

  const onPdfUploaded = () => {
    console.log("pdf uploaded");
    setIsShowEmbed(true);
    setIsShowUpload(false);
  };

  const onEmbedDone = (count: any) => {
    alert("Embedding done: " + count);

    setIsShowEmbed(false);
    setIsShowSearch(true);
  };

  const onShowSearch = () => {
    setIsShowSearch(true);
    setIsShowWelcome(false);
    setIsShowSearchBtn(false);
  };

  return (
    <div className="App">
      <img src={logo} className="image-banner" alt="logo" />

      {isShowWelcome && <Welcome />}

      {isShowWelcome && (
        <button className="register-button" onClick={onUploadDocument}>
          Upload PDF
        </button>
      )}
      {isShowUpload && <UploadPdf onPdfUploadEd={onPdfUploaded} />}

      {isShowEmbed && <Embedd onDone={onEmbedDone} />}
      {isShowSearch && <Search />}

      {isShowSearchBtn && (
        <button className="register-button" onClick={onShowSearch}>
          Search KB
        </button>
      )}
    </div>
  );
}

export default App;
