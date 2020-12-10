import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../utils/Input';

describe('Test Input', () => {
  test('should render', () => {
    render(<Input name="email" type="email"/>);
  });

  test('should be a input', () => {
    render(<Input name="email" type="email"/>);

    const input = screen.queryByRole('textbox');
    expect(input).not.toBeNull();
  });

  test('should not show an error', () => {
    const errorMessage = 'Email invalido';
    render(<Input name="email" type="email"/>);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'valid@email.com' } });
    const error = screen.queryByText(errorMessage);
    expect(error).toBeNull();
  });

  test('should show an error', () => {
    const errorMessage = 'El campo no puede estar vacío';
    render(<Input name="email" type="email"/>);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'invalidEmail' } });
    const error = screen.queryByText(errorMessage);
    expect(error).not.toBeNull();
  });
});
