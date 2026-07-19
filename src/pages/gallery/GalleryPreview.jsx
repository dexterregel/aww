import { Link } from 'react-router-dom';
import { getImageUrl, formatToTitle } from '../../utils.js';

export default function GalleryPreview(props) {
  return (
    <Link to={props.galleryType} className='gallery-preview'>
      <img src={getImageUrl(props.imagePath)} />
      <h2>{formatToTitle(props.galleryType)}</h2>
    </Link>
  );
}