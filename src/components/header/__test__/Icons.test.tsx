import { render, screen } from '@testing-library/react';
import { Icons } from '../subcomponents/Icons';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Icons', () => {
  describe('render', () => {
    test('should render component', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );
    });

    test('should render 6 "buttons"', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );

      const images = screen.getAllByRole('button');
      expect(images).toHaveLength(6);
    });
  });
});
