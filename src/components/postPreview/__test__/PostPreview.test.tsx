import { render, screen } from '@testing-library/react';
import { PostPreview } from '../PostPreview';

const title = 'Macarrones';
const photo = 'https://api.snapfork.me/static/mediaUtils/login/background.png';
const likes = 3;
const comments = 15;

describe('PostPreview', () => {
  describe('Render', () => {
    test('should render', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );
    });

    test('should render likes as text 3 ', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );

      const likesRender = screen.queryByText(likes);
      expect(likesRender).not.toBeNull();
    });

    test('should render a image', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );

      const image = screen.getByLabelText('Recipe Photo');
      expect(image).not.toBeNull();
    });

    test('should render a title text', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );

      const icons = screen.queryByText(title);
      expect(icons).not.toBeNull();
    });
  });
});
