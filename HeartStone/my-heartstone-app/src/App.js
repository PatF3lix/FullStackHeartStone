import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PagePrincipale from './Pages/PagePrincipale';
import PageErreur from './Pages/PageErreur';
import RootLayout from './Pages/Root';
import PageHearthStone2 from './Pages/PageHearthStone2';
import "bootstrap/dist/css/bootstrap.min.css";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageErreur />,
    children: [
      {
        index: true,
        element: <PagePrincipale />
      },
      {
        path: '/HearthStone',
        element: <PageHearthStone2 />
      },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
