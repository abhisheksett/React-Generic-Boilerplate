import React from 'react';
import clsx from 'clsx';
import { node, string, oneOf } from 'prop-types';
import './Label.scss';

function Label({ classname, htmlFor, children, size, ...props }) {
  return (
    <div className={clsx(classname, 'label-component', size)}>
      <label data-testid="label" htmlFor={htmlFor} {...props}>
        {children}
      </label>
    </div>
  );
}

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string,
  classname: string,
  size: oneOf(['medium', 'large', 'extra-large', 'small', 'extra-small'])
};

Label.defaultProps = {
  classname: '',
  htmlFor: '',
  size: 'medium'
};

export default Label;
