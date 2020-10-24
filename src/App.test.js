import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

// need to mock the useEffect hooks 
test.skip('renders For Sponsors link', () => {
  act(() => {
    const { getByText } = render(<App />);
  const linkElement = getByText('For Sponsors');
  expect(linkElement).toBeInTheDocument();
  });

});