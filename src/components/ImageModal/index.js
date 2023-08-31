import React from 'react';
import './ImageModal.css';

const ImageModal = ({ imageSrc, onClose }) => {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content">
        <img src={imageSrc} alt="enlarged" className="enlarged-image" />
      </div>
    </div>
  );
};

export default ImageModal;
