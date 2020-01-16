// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const StyledButton = ({
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
    <Button
      id={id}
      name={name}
      variant={variant}
      disabled={disabled}
      size={size}
      type={type}
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
    </Button>
  );
};

StyledButton.defaultProps = {
  disabled: false,
  size: '',
  block: false,
  icon: null,
};

StyledButton.propTypes = {
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

export default StyledButton;
