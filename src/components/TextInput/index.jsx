// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

// Labels
import Labels from '../../utils/Labels';

import './text-input.styles.pcss';

const TextInput = ({
  ref,
  as,
  id,
  name,
  classInput,
  classLabel,
  label,
  placeholder,
  defaultValue,
  value,
  disabled,
  isInvalid,
  textInvalid,
  isValid,
  textValid,
  handleChange,
  plainText,
  readOnly,
  size,
  type,
  maxLength,
  minLength,
  handleBlur,
  handleKeyPress,
}) => {
  return (
    <>
      {label && (
        <Form.Label className={classLabel}>
          {label}
          &nbsp;
        </Form.Label>
      )}
      <Form.Control
        ref={ref}
        as={as}
        id={id}
        name={name}
        className={classInput}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        isInvalid={isInvalid}
        isValid={isValid}
        onChange={handleChange}
        plaintext={plainText}
        readOnly={readOnly}
        size={size}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
      <Form.Control.Feedback>
        {textValid || Labels.Commons.rightMessage}
      </Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        {textInvalid || Labels.Commons.requiredField}
      </Form.Control.Feedback>
    </>
  );
};

TextInput.propTypes = {
  ref: PropTypes.func,
  as: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  classInput: PropTypes.string,
  classLabel: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  textInvalid: PropTypes.string,
  isValid: PropTypes.bool,
  textValid: PropTypes.string,
  handleChange: PropTypes.func,
  plainText: PropTypes.bool,
  readOnly: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  handleBlur: PropTypes.func,
  handleKeyPress: PropTypes.func,
};

export default TextInput;
