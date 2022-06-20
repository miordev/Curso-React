import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { AddCategory } from '../src/components/AddCategory';
import { useState } from 'react';

describe('Tests in <GifExpertApp />', () => {
  test('should add a new category if it is not repeated', () => {
    render(<GifExpertApp />);

    const form: HTMLFormElement = screen.getByRole('form');
    const input: HTMLInputElement = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Dragon Ball' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });

  test('should not add a new category if it is repeated', () => {
    render(<GifExpertApp />);

    const form: HTMLFormElement = screen.getByRole('form');
    const input: HTMLInputElement = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'One Punch' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });

  test('should not add a new category if it is empty', () => {
    render(<GifExpertApp />);

    const form: HTMLFormElement = screen.getByRole('form');
    const input: HTMLInputElement = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: '' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });
});
