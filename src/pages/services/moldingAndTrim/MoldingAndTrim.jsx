
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './molding-and-trim.css';
import {
  getChildDirs,
  getMoldingTrimImgData,
  getBucketContents,
  getFilteredBucketContents
} from '../../../utils.js';

export default function MoldingAndTrim() {
  // vars
  const bucketName = 'aww-assets-961743401958-us-east-1-an';
  const bucketRegion = 'us-east-1';
  const bucketUrl = `http://${bucketName}.s3.${bucketRegion}.amazonaws.com`;

  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useState(() => {
    async function fetchData() {
      setIsLoading(true);
      const bucketContents = await getBucketContents(bucketName);
      const filteredBucketContents = getFilteredBucketContents(bucketContents, 'molding-trim');
      setImagePaths(filteredBucketContents);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // create molding and trim preview elements
  function createPreviews(imagePaths) {
    if (!imagePaths.length > 0) {
      return;
    }
    const images = imagePaths.map(imagePath => {
      return 
    })
    // get all of the child dirs
    const childDirs = getChildDirs(imagePaths, 'molding-trim');
    // for each child dir, get 1 image path from all of the image paths
    const previewImgPaths = [];
    for (const childDir of childDirs) {
      const obj = {}
      obj.type = childDir;
      obj.path = imagePaths.filter(path => path.includes(childDir))[0];
      previewImgPaths.push(obj);
    }
    const previewEls = previewImgPaths.map((path, index) => {
      const imgSrc = `${bucketUrl}/${path.path}`;
      console.log(imgSrc);
      return (
        <Link key={index} to={path.type} className='molding-trim-item'>
          <img src={imgSrc} />
          {path.type.charAt(0).toUpperCase() + path.type.replaceAll('-', ' ').slice(1)}
        </Link>
      );
    });
    return previewEls;
  }

  const previewEls = createPreviews(imagePaths);

  // early return for if still fetching data
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <h1>Molding and Trim</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <p>Explore our catalog:</p>
      <div className='molding-trim-container'>
        {previewEls}
      </div>
    </main>
  );
}