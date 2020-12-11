import { Header } from '../Header';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  describe('render', () => {
    test('should render component', () => {
      render(
        <Router>
          <Header/>
        </Router>
      );
    });

    test('should render Brand', () => {
            render(
        <Router>
          <Header/>
        </Router>
      );

      const brans = screen.getAllByRole('banner');
      expect(brans).toHaveLength(1);
    });

    test('should render a title', () => {
            render(
        <Router>
          <Header/>
        </Router>
      );

      const paragraph = screen.getByText('SnapFork');
      expect(paragraph).toBeInTheDocument();
    });

    test('should render a SearchInput', () => {
            render(
        <Router>
          <Header/>
        </Router>
      );

      const input = screen.getAllByRole('textbox');
      expect(input).toHaveLength(1);
    });

    test('should render a icons', () => {
            render(
        <Router>
          <Header/>
        </Router>
      );

      const icons = screen.getAllByRole('navigation');
      expect(icons).toHaveLength(1);
    });
  });
});
