import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Navbar } from '../components/navbar';
import { Footer } from './Footer';

export const Root = () => {
  const location = useLocation();

  return (
    <div className="container">
      <Navbar />

      {useEffect(() => {
        window.scrollTo(0, 0);
      }, [location])}

      <Outlet />

      <Footer />
    </div>
  );
};
