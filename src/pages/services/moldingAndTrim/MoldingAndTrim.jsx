
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './molding-and-trim.css';
import {
  getChildDirs,
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
  function getMoldingTrimPreviewEls(imagePaths) {
    // exit early if imagePaths doesn't have data
    if (imagePaths.length === 0) {
      return;
    }
    // get a corresponding image for each child dir
    const dirs = getChildDirs(imagePaths, 'molding-trim');
    const images = [];
    for (const dir of dirs) {
      const image = {}
      // get the image's type for setting the url
      image.type = dir;
      image.path = imagePaths.filter(path => path.includes(dir))[0];
      images.push(image);
    }
    const moldingTrimPreviewEls = images.map((image, index) => {
      return (
        <Link key={index} to={image.type} className='molding-trim-item'>
          <img src={`${bucketUrl}/${image.path}`} />
          {image.type.charAt(0).toUpperCase() + image.type.replaceAll('-', ' ').slice(1)}
        </Link>
      );
    });
    return moldingTrimPreviewEls;
  }
  const moldingTrimPreviewEls = getMoldingTrimPreviewEls(imagePaths);

  // early return for if still fetching data
  if (isLoading) {
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main>
      <h1>Molding and Trim</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <p>Explore our catalog:</p>
      <div className='molding-trim-container'>
        {moldingTrimPreviewEls}
      </div>
    </main>
  );
}