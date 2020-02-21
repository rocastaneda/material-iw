// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

import './button.styles.pcss';

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
  className,
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
      className={className}
    >
      {icon && (
        <>
          {icon}
          &nbsp;
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
  onClick: null,
};

StyledButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export { StyledButton as Button, ButtonToolbar };
