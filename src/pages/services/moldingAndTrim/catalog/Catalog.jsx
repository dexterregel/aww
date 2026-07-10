import { useParams, Link } from 'react-router-dom';
import './catalog.css';
import {
  getMoldingTrimImgData,
  getFileNameFromPath
} from '../../../../utils.js';

export default function Catalog() {
  const params = useParams();

  // use the url param to construct the page title
  const pageTitle = params.moldingTrimType[0].toUpperCase() + params.moldingTrimType.replaceAll('-', ' ').slice(1);

  // get all molding and trim images, then filter them based on the url and build elements
  const filteredMoldingTrimImgData = getMoldingTrimImgData().filter(moldingTrim => {
    return moldingTrim.type.includes(params.moldingTrimType);
  });
  const moldingTrimEls = filteredMoldingTrimImgData[0].images.map((image, index) => {
    return (
      <div key={index} className='molding-trim-item'>
        <img src={image} />
        <p>{getFileNameFromPath(image, false).toUpperCase()}</p>
      </div>
    );
  });

  return (
    <main>
      <h1>{pageTitle}</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Molding and Trim</Link>
      <div className='molding-trim-container'>
        {moldingTrimEls}
      </div>
    </main>
  );
}