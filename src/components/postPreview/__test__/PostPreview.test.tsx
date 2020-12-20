import { fireEvent, render, screen } from '@testing-library/react';
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

    test('should render a NoLike img', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );

      const noLike = screen.queryByLabelText('NoLike');
      expect(noLike).not.toBeNull();
    });

    test('should render a Like img', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );

      const likeGroup = screen.getByLabelText('LikeGroup');
      fireEvent.click(likeGroup);
      const likeIcon = screen.getByLabelText('Like');
      expect(likeIcon).not.toBeNull();
    });

    test('should add a new like', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );

      const likeGroup = screen.getByLabelText('LikeGroup');
      fireEvent.click(likeGroup);
      const likeCounter = screen.queryByText(likes + 1);
      expect(likeCounter).not.toBeNull();
    });

    test('should render a Saved img', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );

      const saveIcon = screen.getByLabelText('NoSaved');
      expect(saveIcon).not.toBeNull();
    });

    test('should mark as saved', () => {
      render(
        <PostPreview
          likes={likes}
          comments={comments}
          title={title}
          photo={photo}
        />
      );

      const saveGroup = screen.getByLabelText('SaveGroup');
      fireEvent.click(saveGroup);
      const savedIcon = screen.getAllByAltText('Saved');
      expect(savedIcon).not.toBeNull();
    });
  });
});
