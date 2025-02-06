import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import { Root } from './layouts/Root';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages';
import { ServicePage } from './pages/ServicePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryDetail } from './pages/GalleryDetail';
import { ProductPage } from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/room-and-suite',
        element: <ProductPage />,
      },
      {
        path: '/spots-gallery',
        element: <GalleryPage />,
      },
      {
        path: '/our-services',
        element: <ServicePage />,
      },
      {
        path: '/contact-us',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '/gallery-detail/:id',
    element: <GalleryDetail />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
