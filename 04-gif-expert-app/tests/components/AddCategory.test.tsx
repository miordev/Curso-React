import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests in <AddCategory />', () => {
  const mockInputValue = 'Saitama';

  test('should change the input value', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: mockInputValue } });
    expect(input.value).toBe(mockInputValue);
  });

  test('should call onNewCategory if the input has a value', () => {
    const mockOnNewCategory = jest.fn();
    render(<AddCategory onNewCategory={mockOnNewCategory} />);

    const input: HTMLInputElement = screen.getByRole('textbox');
    const form: HTMLFormElement = screen.getByRole('form');
    fireEvent.input(input, { target: { value: mockInputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(mockOnNewCategory).toBeCalledWith(mockInputValue);
  });

  test('should not call onNewCategory if the input is empty', () => {
    const mockOnNewCategory = jest.fn();
    render(<AddCategory onNewCategory={mockOnNewCategory} />);

    const form: HTMLFormElement = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockOnNewCategory).not.toBeCalled();
  });
});
