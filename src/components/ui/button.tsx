
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
