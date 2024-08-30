import "../styles/profile.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Profile = ({ user, address, balance }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 500);
  };

  const getShortenedAddress = (addr) => {
    if (addr && addr.length > 10) {
      return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    }
    return addr;
  };

  // Sample array of objects for the history
  const uploadHistory = [
    { fileName: "document1.pdf", uploadDate: "2024-08-01" },
    { fileName: "image1.png", uploadDate: "2024-08-02" },
    { fileName: "report.docx", uploadDate: "2024-08-03" },
    { fileName: "document1.pdf", uploadDate: "2024-08-01" },
    { fileName: "image1.png", uploadDate: "2024-08-02" },
    { fileName: "report.docx", uploadDate: "2024-08-03" },
    { fileName: "document1.pdf", uploadDate: "2024-08-01" },
  ];

  return (
    <div className="container profile">
      {!user && <p>Loading...</p>}
      {user && (
        <div className="row">
          <div className="card">
            <img src={user.profileImage} alt="profile" />
            <div className="names">
              <h5>{user.name}</h5>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-file-invoice"></i>
            <div className="names">
              <h5>Wallet address</h5>
              <div className="w-add">
                <p>{getShortenedAddress(address)}</p>
                <i
                  className={`fa-regular fa-copy copy-icon ${
                    isCopied ? "copied" : ""
                  }`}
                  onClick={copyToClipboard}
                  title={isCopied ? "Copied!" : "Copy to clipboard"}
                ></i>
              </div>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-wallet"></i>
            <div className="names">
              <h5>Balance</h5>
              <p>{balance} HBAR</p>
            </div>
          </div>
        </div>
      )}
      <div className="history">
        <h3>History</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Upload Date</th>
            </tr>
          </thead>
          <tbody>
            {uploadHistory.map((item, index) => (
              <tr key={index}>
                <td>{item.fileName}</td>
                <td>{item.uploadDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  address: PropTypes.string,
  balance: PropTypes.number,
};

export default Profile;
