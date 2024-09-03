import { useState } from "react";
import "../styles/upload.css";
import smartSec from "../assets/smart-sec.png";
import { main } from "../scripts/callVarious";
import Loading from "./Loading"; // New loading component
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const Upload = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analyzeText, setAnalyzeText] = useState("");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setAnalyzeText(`Analyze ${selectedFile.name}`);
    }
  };

  const handleAnalyse = async () => {
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const response = await main(e.target.result);
        setIsLoading(false);
        navigate("/result", { state: { response } }); // Navigate to result page with response
      };
      reader.readAsText(file);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="container upload">
      <div className="header">
        <div id="logo-img">
          <img src={smartSec} alt="smart security" />
        </div>
        <p>
          Analyze your smart contract to detect vulnerabilities, get automated
          fixes, <br /> and detailed reports on code quality and security.
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
            <input type="file" onChange={handleFileChange} />
          </label>
          {file && (
            <button className="analyze-btn" onClick={handleAnalyse}>
              {analyzeText}
            </button>
          )}
        </div>
      )}
      {activeTab === "url" && (
        <div className="file-upload">
          <i className="fa-solid fa-globe"></i>
          <input type="url" placeholder="Enter URL here" />
        </div>
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default Upload;
