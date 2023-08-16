import './App.css';
import About from './components/About';
import Main from './components/Main';
import Layout from './Layout';
import Services from './components/Services';
import Contact from './components/Contact';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout component={<Main />} />
    },
    {
      path: '/about',
      element: <Layout component={<About />} />
    },
    {
      path: '/services',
      element: <Layout component={<Services />} />
    },
    {
      path: '/contact',
      element: <Layout component={<Contact />} />
    }
  ])
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
