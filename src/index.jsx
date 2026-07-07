import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import ServicesLayout from './components/ServicesLayout.jsx';
import Home from './pages/home/Home.jsx';
import Services from './pages/services/index.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/contact/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='services/cabinetry' element={<Services.Cabinetry />} />
          <Route path='services/millwork' element={<Services.Millwork />} />
          <Route path='services/molding-and-trim' element={<Services.MoldingAndTrim />} />
          <Route path='services/woodturning' element={<Services.Woodturning />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);