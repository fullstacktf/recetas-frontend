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

  test('should render a input text', () => {
    render(<PostMaker/>);

    const titleArea = screen.queryByLabelText('title-input');

    expect(titleArea).not.toBeNull();
  });

  test('should render a input text by placeholder', () => {
    render(<PostMaker/>);

    const titleArea = screen.queryByPlaceholderText('Título de la receta...');

    expect(titleArea).not.toBeNull();
  });

  test('should render 6 images', () => {
    render(<PostMaker/>);

    const images = screen.getAllByRole('img');

    expect(images.length).toBe(6);
  });

  test('should render 1 button', () => {
    render(<PostMaker/>);

    const button = screen.getAllByRole('button');

    expect(button.length).toBe(1);
  });

  test('should render 4 collapse', () => {
    render(<PostMaker/>);

    const collapse = screen.getAllByLabelText('collapse-div');

    expect(collapse.length).toBe(4);
  });

  test('should render 4 collapse', () => {
    render(<PostMaker/>);

    const collapse = screen.getAllByLabelText('collapse-div');

    expect(collapse.length).toBe(4);
  });
});
