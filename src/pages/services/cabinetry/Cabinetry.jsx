import { Link, ScrollRestoration } from 'react-router-dom';
import './cabinetry.css';

export default function Cabinetry() {

  // import images in dir
  // const modules = import.meta.glob(
  //   '../../assets/images/cabinetry/*',
  //   { eager: true, query: 'url' }
  // );

  // const gallery = Object.values(import.meta.glob('/*', { eager: true, query: 'url'}));
  // for (const path in modules) {
  //   const p = new URL(path, import.meta.url).href;
  //   gallery.push(p);
  // }

  const modules = import.meta.glob('/src/assets/images/cabinetry/*', { eager: true });
  const images = Object.values(modules).map((path, index) => {
    return <img key={index} src={path.default} />;
  });

  return (
    <main className='cabinetry-container'>
      <h1>Cabinetry</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <section className='cabinetry'>
        <p>Our cabinetry division is the perfect answer for everything from face-frame and European-style cabinetry, to custom finishes and solid surfaces. We offer cabinets with a full selection of styles, materials, accessories, and finishes, allowing you to take the guess work out of ordering by delivering exactly what you need.</p>
        <div className='cabinetry-images'>
          {images}
        </div>
      </section>
    </main>
  );
}