import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hola mundo', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Hola Mundo/i);
  expect(linkElement).toBeInTheDocument();
});
