import { useParams, Link } from 'react-router-dom';
import './catalog.css';
import { getModules, getImages, getFileNameFromPath } from '../../../../utils.jsx';

export default function Catalog() {
  const params = useParams();

  const modules = getModules(params.moldingTrimType);
  console.log('modules', Object.values(modules));

  const images = getImages(Object.values(modules)).map((image, index) => {
    return (
      <div key={index}>
        <img src={image.imagePath} />
        <p>{image.imageName}</p>
      </div>
    );
  });

  // use the URL to construct the page title
  const pageTitle = params.moldingTrimType[0].toUpperCase() + params.moldingTrimType.replaceAll('-', ' ').slice(1);

  return (
    <main>
      <h1>{pageTitle}</h1>
      <Link to='..' relative='path'>← Back to Molding and Trim</Link>
      <div className='molding-trim-container'>
        {images}
      </div>
    </main>
  );
}