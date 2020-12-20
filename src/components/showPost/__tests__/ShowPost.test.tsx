import { render, screen } from '@testing-library/react';
import { ShowPost } from '../ShowPost';

describe('Test ShowPost', () => {
  test('should render', () => {
    render(<ShowPost/>);
  });
});
