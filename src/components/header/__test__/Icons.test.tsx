import { render, screen } from '@testing-library/react';
import { Icons } from '../subcomponents/Icons';

describe('Icons', () => {
  describe('render', () => {
    test('should render component', () => {
      render(<Icons/>);
    });

    test('should render 6 images', () => {
      render(<Icons/>);

      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(6);
    });

    test('should get a image by alt text "AddCircle"', () => {
      render(<Icons/>);

      const images = screen.queryByAltText('AddCircle');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Notifications"', () => {
      render(<Icons/>);

      const images = screen.queryByAltText('Notifications');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Bookmark"', () => {
      render(<Icons/>);

      const images = screen.queryByAltText('Bookmark');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Account"', () => {
      render(<Icons/>);

      const images = screen.queryByAltText('Account');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "AddCircle"', () => {
      render(<Icons/>);

      const images = screen.queryByAltText('AddCircle');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Chat"', () => {
      render(<Icons/>);

      const images = screen.queryByAltText('Chat');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Home"', () => {
      render(<Icons/>);

      const images = screen.queryByAltText('Home');
      expect(images).not.toBeNull();
    });
  });
});
