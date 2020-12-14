import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
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

    test('should get a image by alt text "AddCircle"', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );

      const images = screen.queryByAltText('AddCircle');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Notifications"', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );

      const images = screen.queryByAltText('Notifications');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Bookmark"', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );

      const images = screen.queryByAltText('Bookmark');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Account"', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );

      const images = screen.queryByAltText('Account');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "AddCircle"', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );

      const images = screen.queryByAltText('AddCircle');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Chat"', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );

      const images = screen.queryByAltText('Chat');
      expect(images).not.toBeNull();
    });

    test('should get a image by alt text "Home"', () => {
      render(
        <Router>
          <Icons/>
        </Router>
      );

      const images = screen.queryByAltText('Home');
      expect(images).not.toBeNull();
    });
  });
});
