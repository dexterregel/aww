
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getFilteredBucketData,
  getFirstImagePaths
} from '../../../utils.js';
import Preview from '../../../components/Preview.jsx';
import './molding-and-trim.css';

export default function MoldingAndTrim() {
  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // values derived from states
  let firstImagePaths = [];
  if (imagePaths.length > 0) {
    firstImagePaths = getFirstImagePaths('molding-trim', imagePaths);
  }

  // effects
  useState(() => {
    async function fetchData() {
      setIsLoading(true);
      const filteredBucketData = await getFilteredBucketData('molding-trim');
      setImagePaths(filteredBucketData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  let previews = [];
  if (firstImagePaths.length > 0) {
    previews = firstImagePaths.map((firstImagePath, index) => {
      return (
        <Preview
          key={index}
          className='molding-trim-item'
          imagePath={firstImagePath.absPath}
          title={firstImagePath.dir}
        />
      );
    });
  }

  if (isLoading) {
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main>
      <h1>Molding and Trim</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <p>Explore our catalog:</p>
      <div className='molding-trim-container'>
        {previews}
      </div>
    </main>
  );
}