import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { node, string, bool, func, oneOf } from 'prop-types';
import './Textbox.scss';

const REGEX = {
  EMAIL: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  NUMBER: /-?[0-9]\d*(\.\d+)?$/
};

function Textbox({
  classname,
  children,
  readOnly,
  value,
  handleChange,
  handleClearValue,
  type,
  ariaLabel,
  isRequired,
  canClear,
  placeHolder,
  validateOnBlur,
  ...props
}) {
  /* re-assignment of the initial value passed as prop.
   * To be used onChange of input.
   */
  const [textValue, setTextValue] = useState(value);
  useEffect(() => {
    if (textValue !== value) {
      setTextValue(value);
    }
  }, [value]);

  const textInput = useRef(null); //  reference to the input field

  /**
   * Update `textValue` and call the event handler `handleChange` passed as prop
   * @param {*} e changed input value
   */
  const updateTextValue = e => {
    setTextValue(e.target.value);
    handleChange(e);
  };

  /**
   * Triggered on click of CLEAR icon.
   * Clears the input field and sets the focus on the input field.
   */
  const clearField = () => {
    setTextValue('');
    handleClearValue();
    textInput.current.focus();
  };

  const isFieldValid = () => {
    let isValid = true;
    if (textValue.trim() !== '') {
      switch (type) {
        case 'email':
          isValid = REGEX.EMAIL.test(String(textValue).toLowerCase());
          break;
        case 'number':
          isValid = REGEX.NUMBER.test(String(textValue));
          break;
        default:
          isValid = true;
      }
    }
    textInput.current.classList.remove('invalid');
    textInput.current.classList.remove('valid');
    textInput.current.classList.add(isValid ? 'valid' : 'invalid');
    return isValid;
  };

  function onBlur() {
    if (validateOnBlur) {
      isFieldValid();
    }
  }

  return (
    <div
      className={clsx(classname, 'textbox-component', { disabled: readOnly })}
    >
      <input
        type={type}
        value={textValue}
        onChange={updateTextValue}
        readOnly={readOnly}
        aria-label={ariaLabel}
        required={isRequired}
        aria-required={isRequired}
        placeholder={placeHolder}
        data-testid="textbox"
        ref={textInput}
        className={clsx({ disabled: readOnly })}
        onBlur={onBlur}
        {...props}
      />
      {/**
       * Show CLEAR (X) icon only when when
       * `canClear` is true (default)
       * AND the input is not blank
       * AND the field is NOT read-only/disabled.
       */
      canClear && textValue.length > 0 && !readOnly && (
        <div
          className="clear"
          role="button"
          tabIndex="0"
          aria-pressed="false"
          aria-label="clear-textbox"
          onClick={clearField}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              clearField(e);
            }
          }}
          data-testid="clear-textbox"
        >
          {/* eslint-disable-next-line */}
          <span className="clear__icon">&times;</span>
        </div>
      )}
      {children}
    </div>
  );
}

Textbox.propTypes = {
  children: node,
  handleChange: func,
  handleClearValue: func,
  readOnly: bool,
  classname: string,
  value: string,
  type: oneOf(['text', 'email', 'password', 'number', 'time']),
  ariaLabel: string,
  isRequired: bool,
  canClear: bool,
  placeHolder: string,
  validateOnBlur: bool
};

Textbox.defaultProps = {
  children: null,
  handleChange: () => {},
  handleClearValue: () => {},
  readOnly: false,
  classname: '',
  value: '',
  type: 'text',
  ariaLabel: 'textbox',
  isRequired: false,
  canClear: true,
  placeHolder: '',
  validateOnBlur: false
};

export default Textbox;
