import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test.skip('renders For Sponsors link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('For Sponsors');
  expect(linkElement).toBeInTheDocument();
});