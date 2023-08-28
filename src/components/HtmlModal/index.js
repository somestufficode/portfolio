import React, { useState, useEffect } from 'react';
import './DocumentModal.css';

const TextModal = ({ onClose, textContent }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(textContent.file)
            .then(response => response.text())
            .then(text => setContent(text))
            .catch(error => console.error('Error fetching text content:', error));
    }, [textContent]);

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h1>{textContent.name}</h1>
                <pre>{content}</pre>
            </div>
        </div>
    );
};

export default TextModal;
