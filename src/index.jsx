import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import ServicesLayout from './components/ServicesLayout.jsx';
import Home from './pages/home/Home.jsx';
import Services from './pages/services/index.jsx';
import Catalog from './pages/services/moldingAndTrim/catalog/Catalog.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/contact/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services' element={<ServicesLayout />}>
            <Route index element={<Services />} />
            <Route path='cabinetry' element={<Services.Cabinetry />} />
            <Route path='millwork' element={<Services.Millwork />} />
            <Route path='molding-and-trim' element={<Services.MoldingAndTrim />} />
            <Route path='molding-and-trim/:moldingTrimType' element={<Catalog />} />
            <Route path='woodturning' element={<Services.Woodturning />} />
          </Route>
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// leaving the following commented in order to later implement ScrollRestoration

// const routes = [
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {index: true, element: <Home />},
//       {path: 'services', element: <ServicesLayout />},
//       {path: 'services/cabinetry', element: <Services.Cabinetry />},
//       {path: 'services/millwork', element: <Services.Millwork />},
//       {path: 'services/molding-and-trim', element: <Services.MoldingAndTrim />},
//       {path: 'services/woodturning', element: <Services.Woodturning />},
//       {path: 'gallery', element: <Gallery /> },
//       {path: 'contact', element: <Contact />}
//     ]
//   }
// ];

// const router = createBrowserRouter(routes);

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);