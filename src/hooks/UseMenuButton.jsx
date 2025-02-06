import { useEffect, useRef, useState } from 'react';

export const UseButtonMenu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const buttonMenuRef = useRef(null);

  const buttonMenuClick = (e) => {
    e.stopPropagation();
    document.body.classList.toggle('overlay');
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const closeMenuOutsideButton = (e) => {
      if (buttonMenuRef.current && !buttonMenuRef.current.contains(e.target)) {
        document.body.classList.remove('overlay');
        setMenuActive(false);
      }
    };

    document.addEventListener('click', closeMenuOutsideButton);

    return () => {
      document.removeEventListener('click', closeMenuOutsideButton);
    };
  }, []);

  return { menuActive, buttonMenuClick, buttonMenuRef };
};
