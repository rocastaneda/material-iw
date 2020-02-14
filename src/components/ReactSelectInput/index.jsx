import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

// Utils
import Utils from '../../utils/Utils';

// Labels
import Labels from '../../utils/Labels';

// Styles
import './react-select.styles.pcss';

const ReactSelectInput = ({
  name,
  value,
  label,
  placeholder,
  options,
  disabled,
  clearable,
  searchable,
  textValid,
  isValid,
  textInvalid,
  isInvalid,
  handleChange,
}) => {
  const data = [{ value: '', label: Labels.ReactSelectInput.SelectOption }];
  options.forEach(option => {
    data.push({ value: option.value, label: option.label });
  });

  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Select
        name={name}
        id={name}
        value={value ? Utils.getItem(data, { value }) : value}
        placeholder={placeholder || Labels.ReactSelectInput.SelectOption}
        isClearable={clearable}
        isDisabled={disabled}
        onChange={(inputValue, action) =>
          handleChange({
            target: { name, value: inputValue.value, type: action },
          })
        }
        options={data}
        searchable={searchable}
        noOptionsMessage={() => Labels.ReactSelectInput.NoAvailableOptions}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: '#883682',
          },
        })}
        className={`Select${isValid ? ' is-valid' : ''}${
          isInvalid ? ' is-invalid' : ''
        }`}
        classNamePrefix="Select"
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

ReactSelectInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  searchable: PropTypes.bool,
  textValid: PropTypes.string,
  isValid: PropTypes.bool,
  textInvalid: PropTypes.string,
  isInvalid: PropTypes.bool,
};

export default ReactSelectInput;
