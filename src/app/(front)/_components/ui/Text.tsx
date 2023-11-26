import classNames from 'classnames';
import { createElement, HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  paragraph?: boolean;
}

export function Text({
  paragraph = false,
  children,
  className,
  ...props
}: TextProps) {
  return createElement(
    paragraph ? 'p' : 'span',
    {
      ...props,
      className: classNames('text-gray-800', className),
    },
    children
  );
}
