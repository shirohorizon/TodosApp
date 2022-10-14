import { RouterProvider } from 'react-router-dom';

import GlobalStyle from '~/components/Global';

import router from './routes';

function App() {
  return (
    <GlobalStyle>
      <RouterProvider router={router} />
    </GlobalStyle>
  );
}

export default App;
