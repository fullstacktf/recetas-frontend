import { Header } from '../Header';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Header', () => {
  describe('render', () => {
    test('should render component', () => {
      render(<Header/>);
    });

    test('should render Brand', () => {
      render(<Header/>);

      const brans = screen.getAllByRole('banner');
      expect(brans).toHaveLength(1);
    });

    test('should render a title', () => {
      render(<Header/>);

      const paragraph = screen.getByText('SnapFork');
      expect(paragraph).toBeInTheDocument();
    });

    test('should render a SearchInput', () => {
      render(<Header/>);

      const input = screen.getAllByRole('textbox');
      expect(input).toHaveLength(1);
    });

    test('should render a icons', () => {
      render(<Header/>);

      const icons = screen.getAllByRole('IconGroup');
      expect(icons).toHaveLength(1);
    });
  });
});
