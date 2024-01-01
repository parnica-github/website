import classNames from 'classnames';
import { createElement, HTMLAttributes } from 'react';

export interface TitleProps extends HTMLAttributes<HTMLElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Title({
  level = 1,
  children,
  className,
  ...props
}: TitleProps) {
  const levelStyles = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  return createElement(
    `h${level}`,
    {
      ...props,
      className: classNames(
        'font-medium text-gray-800',
        levelStyles[level],
        className
      ),
    },
    children
  );
}
