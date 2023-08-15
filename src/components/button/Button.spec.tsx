import { render } from '@testing-library/react';
import React from 'react';
import Button from '.';

describe('Button Component', () => {
  it('should render', () => {
    const { getByRole } = render(<Button>Click Me</Button>);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render a primary button', () => {
    const { getByRole } = render(<Button variant='primary'>Click Me</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('bg-blue-500');
  });
});
