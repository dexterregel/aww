import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import Home from './pages/home/Home.jsx';
import Services from './pages/services/index.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/contact/Contact.jsx';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: 'services', element: <Services />},
      {path: 'services/cabinetry', element: <Services.Cabinetry />},
      {path: 'services/millwork', element: <Services.Millwork />},
      {path: 'services/molding-and-trim', element: <Services.MoldingAndTrim />},
      {path: 'services/woodturning', element: <Services.Woodturning />},
      {path: 'gallery', element: <Gallery /> },
      {path: 'contact', element: <Contact />}
    ]
  }
];

const router = createBrowserRouter(routes);

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<RouterProvider router={router} />);