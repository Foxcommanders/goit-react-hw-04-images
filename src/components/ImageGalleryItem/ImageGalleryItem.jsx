import { StyledImageGalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt, modalUrl, handlerClick }) => {
  return (
    <StyledImageGalleryItem>
      <img
        src={url}
        alt={alt}
        loading="lazy"
        onClick={() => {
          handlerClick({ modalUrl, alt });
        }}
      />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  modalUrl: PropTypes.string.isRequired,
  handlerClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
