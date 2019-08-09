/* eslint react/jsx-no-literals: 0 */

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

afterEach(cleanup);

it('should render the passed props as content body', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <Button handleClick={handleClick}>Primary</Button>
  );
  expect(getByTestId('button').textContent).toBe('Primary');
});

it('should invoke the click handler', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <Button handleClick={handleClick}>Primary</Button>
  );
  fireEvent.click(getByTestId('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('should disable the button', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <Button handleClick={handleClick} disabled>
      Primary
    </Button>
  );
  expect(getByTestId('button')).toHaveAttribute('disabled');
});

it('should accept size and appearance attributes', () => {
  const handleClick = jest.fn();
  const { container } = render(
    <Button handleClick={handleClick} size="medium" appearance="primary">
      Primary
    </Button>
  );
  expect(container.firstChild).toHaveClass('primary');
  expect(container.firstChild).toHaveClass('medium');
});
