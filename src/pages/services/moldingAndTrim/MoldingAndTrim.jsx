import { Link } from 'react-router-dom';
import './molding-and-trim.css';
import {
  getChildDirs,
  getMoldingTrimImgData
} from '../../../utils.js';

export default function MoldingAndTrim() {

  const moldingTrimEls = getMoldingTrimImgData().map((type, index) => {
    return (
      <Link key={index} to={type.type} className='molding-trim-item'>
        <img src={type.images[0]} />
        {type.type.charAt(0).toUpperCase() + type.type.replaceAll('-', ' ').slice(1)}
      </Link>
    );
  });

  return (
    <main>
      <h1>Molding and Trim</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <img src='/assets/images/molding-and-trim/panel/awwab1.jpg?url' />
      <p>Explore our catalog:</p>
      <div className='molding-trim-container'>
        {moldingTrimEls}
      </div>
    </main>
  );
}