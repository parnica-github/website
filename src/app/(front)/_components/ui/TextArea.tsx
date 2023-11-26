import classNames from 'classnames';
import { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ className, children, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={classNames(
        'block w-full rounded border border-gray-300 bg-gray-50 p-3 text-gray-900 ',
        'focus:border-sky-600 focus:ring-sky-600',
        className
      )}
      {...rest}
    >
      {children}
    </textarea>
  );
}
