import { render } from '@testing-library/react';
import { PostPreview } from '../PostPreview';

describe('PostPreview', () => {
  describe('Render', () => {
    test('should render', () => {
      render(<PostPreview likes={3} comments={15} title="Macarrones"/>);
    });
  });
});
