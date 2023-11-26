import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, children, ...rest }: InputProps) {
  return (
    <input
      className={classNames(
        'block w-full rounded border border-gray-300 bg-gray-50 p-3 text-gray-900 ',
        'focus:border-sky-600 focus:ring-sky-600',
        className
      )}
      {...rest}
    >
      {children}
    </input>
  );
}
