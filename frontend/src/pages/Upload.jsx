import { useState } from "react";
import "../styles/upload.css";
import smartSec from "../assets/smart-sec.png";

const Upload = () => {
  const [activeTab, setActiveTab] = useState("upload");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container upload">
      <div className="header">
        <div id="logo-img">
          <img src={smartSec} alt="smart security" />
        </div>
        <p>
          Analyze your smart contract to detect vulnerability, get automated
          fixes, <br /> and detailed reports on code quality and security
        </p>
      </div>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "upload" ? "active" : ""}`}
          onClick={() => handleTabClick("upload")}
        >
          Upload
        </button>
        <button
          className={`tab ${activeTab === "url" ? "active" : ""}`}
          onClick={() => handleTabClick("url")}
        >
          URL
        </button>
      </div>
      {activeTab === "upload" && (
        <div className="file-upload">
          <i className="fa-solid fa-file-arrow-up"></i>
          <label>
            Choose a file
            <input type="file" />
          </label>
        </div>
      )}
      {activeTab === "url" && (
        <div className="file-upload">
          <i className="fa-solid fa-globe"></i>
          <input type="url" placeholder="Enter URL here" />
        </div>
      )}
    </div>
  );
};

export default Upload;
