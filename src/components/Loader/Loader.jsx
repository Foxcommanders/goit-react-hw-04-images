import { Discuss } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <Discuss
        visible={true}
        height="800"
        width="800"
        ariaLabel="comment-loading"
        wrapperClass="comment-wrapper"
        colors={['#2db93d', '#2db93d']}
        wrapperStyle={{}}
        backgroundColor="#2db93d"
      />
    </StyledLoader>
  );
};

export default Loader;
