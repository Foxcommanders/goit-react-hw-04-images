import { StyledModal, StyledOverlay } from './Modal.styled';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Modal({ onClose, modalData }) {
  const handlerOnClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <StyledOverlay onClick={handlerOnClick}>
      <StyledModal>
        <img src={modalData.modalUrl} alt={modalData.alt} />
      </StyledModal>
    </StyledOverlay>
  );
}

Modal.propTypes = {
  modalData: PropTypes.shape({
    modalUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
