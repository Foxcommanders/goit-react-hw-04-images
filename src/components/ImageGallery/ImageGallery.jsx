import { StyledImageGallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, handlerClick }) => {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            alt={tags}
            modalUrl={largeImageURL}
            handlerClick={handlerClick}
          />
        );
      })}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  handlerClick: PropTypes.func.isRequired,
};
export default ImageGallery;
