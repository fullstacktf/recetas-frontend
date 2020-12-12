import { render, screen } from '@testing-library/react';
import { PostMaker } from '../PostMaker';

describe('Test PostMaker', () => {
  test('should render', () => {
    render(<PostMaker/>);
  });

  test('should render a droparea', () => {
    render(<PostMaker/>);

    const droparea = screen.queryByLabelText('dropzone');
    expect(droparea).not.toBeNull();
  });
});
