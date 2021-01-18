import * as React from 'react';

export const useDetectOutsideClick = (elementRef, initialState = false) => {
  const [isActive, setIsActive] = React.useState(initialState);

  React.useEffect(() => {
    const pageClickEvent = (event) => {
      if (elementRef.current !== null && !elementRef.current.contains(event.target)) {
        console.log(event);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, elementRef]);

  return [isActive, setIsActive];
};
