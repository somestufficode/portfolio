import React from "react";

const DocumentModal = ({ content, onClose }) => {
    return (
      <div className="document-modal">
        {/* Display the document content here */}
        <div className="document-content">{content}</div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    );
  };

  export default DocumentModal;