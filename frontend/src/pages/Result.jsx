import { useLocation } from "react-router-dom";
import "../styles/result.css";

const Result = () => {
  const location = useLocation();
  const { response } = location.state || {};

  // Helper function to format JSON with indentation and syntax highlighting
  const formatJson = (json) => {
    if (typeof json !== "string") {
      json = JSON.stringify(json, null, 2);
    }
    return json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        (match) => {
          let cls = "number";
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = "key";
            } else {
              cls = "string";
            }
          } else if (/true|false/.test(match)) {
            cls = "boolean";
          } else if (/null/.test(match)) {
            cls = "null";
          }
          return `<span class="${cls}">${match}</span>`;
        }
      );
  };

  return (
    <div className="result-container">
      <h2>Analysis Result</h2>
      <pre
        dangerouslySetInnerHTML={{ __html: formatJson(response) }}
        className="json-result"
      ></pre>
    </div>
  );
};

export default Result;
