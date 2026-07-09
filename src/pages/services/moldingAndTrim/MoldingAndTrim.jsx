import { Link } from 'react-router-dom';
import './molding-and-trim.css';
import { getModules, getImages, getFileNameFromPath } from '../../../utils.jsx';

function getImgDirNames() {
  // get the modules under the molding-and-trim dir
  // this is a large array of absolute paths to the image files
  const imgDirNames = Object.keys(import.meta.glob('/src/assets/images/molding-and-trim/**/*'));
  // get the dir names using molding-and-trim as their parent
  const parentDirIndex = imgDirNames[0].split('/').indexOf('molding-and-trim');
  const set = new Set();
  for (const path of imgDirNames) {
    set.add((path.split('/')[parentDirIndex + 1]));
  }
  // this is a small array of the different molding and trim types
  const moldingTrimTypes = Array.from(set);

  // for each of those molding and trim types, you want to filter imgDirNames based on the dir to get all of the images under that dir
  const someArr = [];

  // for each molding and trim type,
  for (const type of moldingTrimTypes) {
    // create a new object to store the type and its images
    const someObj = {}
    // set the molding and trim type
    someObj.type = type;
    // for the molding and trim type, filter the array of paths for just the relevant ones
    someObj.images = imgDirNames.filter(dir => {
      return dir.includes(type)
    });

    someArr.push(someObj);
  }
  return someArr;
}

export default function MoldingAndTrim() {

  const previewEls = getImgDirNames().map((type, index) => {
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
      {previewEls}
    </main>
  );
}