import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({ closeModal, modalImage, alt }) {
    useEffect (() => {
        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    });

    const handleKeydown = (event) => {
        if (event.code === "Escape") {
            closeModal();
        }
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();  
        }
    };

    return createPortal(
        <div className="Overlay" onClick={handleBackdropClick}>
            <div className="Modal">
            <img src={modalImage} alt={alt} />
        </div>
        </div>,
    modalRoot
    );
}

Modal.propTypes = {
    modalImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};