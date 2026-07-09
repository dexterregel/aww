import { Link } from 'react-router-dom';
import './molding-and-trim.css';
import { getChildDirs } from '../../../utils.js';

// gets the modules of all files under the molding-and-trim dir
function getMoldingTrimModules() {
  const moldingTrimModules = import.meta.glob(
    '/src/assets/images/molding-and-trim/**/*',
    { eager: true }
  );
  return moldingTrimModules;
}

// gets data for all of the images under the molding-and-trim dir
function getMoldingTrimImgData() {
  const moldingTrimModules = getMoldingTrimModules();
  // this is a large array of abs paths to all files under the molding-and-trim dir
  const moldingTrimImgAbsPaths = Object.keys(moldingTrimModules);
  const moldingTrimChildDirs = getChildDirs(moldingTrimImgAbsPaths, 'molding-and-trim');

  const moldingTrimArr = [];
  for (const moldingTrimType of moldingTrimChildDirs) {
    const moldingTrimObj = {}
    moldingTrimObj.type = moldingTrimType;
    moldingTrimObj.images = moldingTrimImgAbsPaths.filter(absPath => {
      return absPath.includes(moldingTrimType);
    });
    moldingTrimArr.push(moldingTrimObj);
  }
  return moldingTrimArr;
}

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
      <p>Explore our catalog:</p>
      {moldingTrimEls}
    </main>
  );
}