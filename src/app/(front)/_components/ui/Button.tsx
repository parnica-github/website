import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        'rounded bg-sky-600 px-4 py-2 text-white transition ease-in-out hover:bg-sky-700',
        className
      )}
    >
      {label}
    </button>
  );
}
