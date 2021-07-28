import React from 'react';
import PropTypes from 'prop-types';

import StyledLogo from './logo.style';
import theme from '../../theme';

const { logo: { height } } = theme.default;

const Logo = ({
  ...props
}) => (
  <StyledLogo
    {...props}
    preview={false}
    data-cy="logo"
  />
);

Logo.propTypes = {
  /**
     * The URL of the image
     */
  src: PropTypes.string.isRequired,
  /**
     * Set the height of the button.
     */
  height: PropTypes.string,
};

Logo.defaultProps = {
  height,
};

export default Logo;
