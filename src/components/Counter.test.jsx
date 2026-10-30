import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Counter from './Counter';

describe('Counter component', () => {
  it('starts at zero', () => {
    render(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /increment/i })).toBeEnabled();
  });

  it('increases by one when the button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('stops at ten and disables the button', () => {
    render(<Counter />);

    for (let click = 0; click < 10; click += 1) {
      fireEvent.click(screen.getByRole('button', { name: /increment/i }));
    }

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /increment/i })).toBeDisabled();
    expect(screen.getByText(/maximum value reached: 10/i)).toBeInTheDocument();
  });
});
