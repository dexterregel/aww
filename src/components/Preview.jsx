import { Link } from 'react-router-dom';
import { getImageUrl, formatToTitle } from '../utils.js';

export default function Preview(props) {
  return (
    <Link to={props.title} className={props.className}>
      <img src={getImageUrl(props.imagePath)} />
      <h2>{formatToTitle(props.title)}</h2>
    </Link>
  );
}