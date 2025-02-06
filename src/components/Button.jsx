import { forwardRef } from 'react';

export const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <button {...props} ref={ref}>
      {children}
    </button>
  );
});
