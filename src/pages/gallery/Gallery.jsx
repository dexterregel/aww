import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getFilteredBucketData,
  getFirstImagePaths
} from '../../utils.js';
import Preview from '../../components/Preview.jsx';
import './gallery.css';

export default function Gallery() {
  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // values derived from states
  let firstImagePaths = [];
  if (imagePaths.length > 0) {
    firstImagePaths = getFirstImagePaths('gallery', imagePaths);
  }

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const filteredBucketData = await getFilteredBucketData('gallery');
      setImagePaths(filteredBucketData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  let galleryPreviews = [];
  if (firstImagePaths.length > 0) {
    galleryPreviews = firstImagePaths.map((firstImagePath, index) => {
      return (
        <Preview
          key={index}
          className='gallery-preview'
          imagePath={firstImagePath.absPath}
          title={firstImagePath.dir}
        />
      );
    });
  }

  // early return for when page content is loading
  if (isLoading) {
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main>
      <h1>Gallery</h1>
      <p>View our work:</p>
      <div className='gallery-preview-container'>
        {galleryPreviews}
      </div>
    </main>
  );
}