/* eslint-disable react/jsx-curly-newline */
// eslint-disable-next-line react/jsx-curly-newline
import React from 'react';
import PropTypes from 'prop-types';
import { Button as Btn } from 'react-bootstrap';

const Button = ({
  id,
  name,
  variant,
  disabled,
  onClick,
  size,
  label,
  block,
  type,
  icon,
}) => {
  return (
    <Btn
      id={id}
      name={name}
      variant={variant}
      disabled={disabled}
      size={size}
      type={type}
      // eslint-disable-next-line prettier/prettier
      onClick={onClick}
      block={block}
    >
      {icon && (
        <>
          {icon}
          &emsp;
        </>
      )}
      {label}
    </Btn>
  );
};

Button.defaultProps = {
  disabled: false,
  size: '',
  block: false,
  icon: null,
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  icon: PropTypes.node,
};

export default Button;
