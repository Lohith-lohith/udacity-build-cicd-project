import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders movie list header', () => {
  render(<App />);
  const headerElement = screen.getByText(/movie list/i);
  expect(headerElement).toBeInTheDocument();
});
