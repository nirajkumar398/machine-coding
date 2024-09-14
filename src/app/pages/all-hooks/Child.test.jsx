import React from 'react';
import { render } from '@testing-library/react';
import Child from './Child';

test('renders Child component', () => {
  const { getByText } = render(<Child />);
  const linkElement = getByText(/Child/i);
  expect(linkElement).toBeInTheDocument();
});