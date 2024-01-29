import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ handlerClick, disabled }) => {
  return (
    <StyledButton
      onClick={handlerClick}
      disabled={disabled}
      className={disabled ? 'disabled' : 'active'}
    >
      Load more
    </StyledButton>
  );
};

Button.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
