import { render, screen } from '@testing-library/react';
import { Icons } from '../subcomponents/Icons';

describe('Icons', () => {
  describe('render', () => {
    test('should render component', () => {
      render(<Icons/>);
    });

    test('should render 6 "buttons"', () => {
      render(<Icons/>);

      const images = screen.getAllByRole('button');
      expect(images).toHaveLength(6);
    });
  });
});
