import { fireEvent, render, screen } from '@testing-library/react';
import { SearchInput } from '../subcomponents/SearchInput';

describe('SearchInput', () => {
  describe('Render', () => {
    test('should render a input', () => {
      render(<SearchInput/>);
    });

    test('should render a input with role textbox', () => {
      render(<SearchInput/>);

      const input = screen.queryByRole('textbox');
      expect(input).not.toBeNull();
    });
  });

  test('should render a input with text User', () => {
    render(<SearchInput/>);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'User' } });
    expect(input.value).toBe('User');
  });
});
