import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Tests in CounterApp', () => {
  const initialValue = 100;

  test('should do a match with the snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the initial value', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByTestId('test-counter').innerHTML).toBe(initialValue.toString());
  });

  test('should increase the value', () => {
    render(<CounterApp value={initialValue} />);
    const increaseBtn = screen.getByRole('button', { name: 'increase-btn' });
    fireEvent.click(increaseBtn);
    expect(screen.getByTestId('test-counter').innerHTML).toBe((initialValue + 1).toString());
  });

  test('should decrease the value', () => {
    render(<CounterApp value={initialValue} />);
    const decreaseBtn = screen.getByRole('button', { name: 'decrease-btn' });
    fireEvent.click(decreaseBtn);
    expect(screen.getByTestId('test-counter').innerHTML).toBe((initialValue - 1).toString());
  });

  test('should reset the value', () => {
    render(<CounterApp value={initialValue} />);
    const increaseBtn = screen.getByRole('button', { name: 'increase-btn' });
    const resetBtn = screen.getByRole('button', { name: 'reset-btn' });

    fireEvent.click(increaseBtn);
    fireEvent.click(increaseBtn);
    fireEvent.click(increaseBtn);
    fireEvent.click(resetBtn);

    expect(screen.getByTestId('test-counter').innerHTML).toBe(initialValue.toString());
  });
});
