/* eslint react/jsx-no-literals: 0 */

import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

it('should render the passed props as content body', () => {
  const { getByTestId } = render(<Label htmlFor="username">Primary</Label>);
  expect(getByTestId('label').textContent).toBe('Primary');
});
