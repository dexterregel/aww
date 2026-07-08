import { useParams, Link } from 'react-router-dom';
import './catalog.css';

function getModules(dir) {
  const modules = import.meta.glob('/src/assets/images/molding-and-trim/**', { eager: true });
  // convert to an array and filter based on dir
  const filteredModules = Object.entries(modules).filter(
    module => module[0].includes(dir)
  );

  // convert back to an object and return
  return Object.fromEntries(filteredModules);
}

function getImagesWithCaption(modules) {
  const images = Object.values(modules).map((path, index) => {
    const caption = (path.default.split('/')[path.default.split('/').length - 1]).split('.')[0].toUpperCase();
    return (
      <div key={index} className='img-with-caption'>
        <img key={index} src={path.default} />
        <p>{caption}</p>
      </div>
    );
  });
  return images;
}

export default function Catalog() {
  const params = useParams();

  const modules = getModules(params.type);
  const images = getImagesWithCaption(modules);

  const pageTitle = params.type[0].toUpperCase() + params.type.replaceAll('-', ' ').slice(1);

  return (
    <main>
      <h1>{pageTitle}</h1>
      <Link to='..' relative='path'>← Back to Molding and Trim</Link>
      <div className='img-container'>
        {images}
      </div>
    </main>
  );
}