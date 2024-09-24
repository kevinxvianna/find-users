import React, { type ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTER_PATHS } from './constants';
import { Home } from './pages/Home';

const Router = (): ReactElement => {
  const routes = createBrowserRouter([
    {
      path: ROUTER_PATHS.HOME,
      element: <Home />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;
