import { StyledSection } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
