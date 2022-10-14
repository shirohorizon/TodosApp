import { createBrowserRouter } from 'react-router-dom';

import { publicLayouts } from './layouts';
import { publicRoutes } from './routes';

let browserRouter = publicLayouts.map(({ element, path, name }) => {
  return {
    path,
    element,
    children: publicRoutes
      .filter((route) => route.layout === name)
      .map(({ element, path }) => ({
        path,
        element,
      })),
  };
});

const router = createBrowserRouter(browserRouter);

export default router;
