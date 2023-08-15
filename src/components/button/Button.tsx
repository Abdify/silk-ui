import React, { ReactNode } from 'react';

type ButtonPros = {
  children: ReactNode;
  variant?: 'primary' | 'danger';
};

const Button = ({ children, variant = 'primary' }: ButtonPros) => {
  const variants = {
    primary: 'bg-blue-500',
    danger: 'bg-red-500',
  };

  return <button className={`rounded px-3 py-1 ${variants[variant]}`}>{children}</button>;
};

export default Button;
