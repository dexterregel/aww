import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils.js';

export default function GalleryPreview(props) {
  function getFormattedName(path) {
    return path.charAt(0).toUpperCase() + path.replaceAll('-', ' ').slice(1);
  }

  return (
    <Link to={props.galleryType} className='gallery-preview'>
      <img src={getImageUrl(props.imagePath)} />
      <h2>{getFormattedName(props.galleryType)}</h2>
    </Link>
  );
}