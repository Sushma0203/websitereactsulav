import React from 'react';

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="image-modal-overlay" onClick={onClose}>
            <div className="image-modal-content" onClick={e => e.stopPropagation()}>
                <button className="image-modal-close" onClick={onClose}>&times;</button>
                <img src={imageSrc} alt="Full View" />
            </div>
        </div>
    );
};

export default ImageModal;
