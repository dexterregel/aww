import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getFilteredBucketData,
  getFirstImagePaths
} from '../../utils.js';
import Loading from '../../components/Loading.jsx';
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <h1 className='page-title'>Gallery</h1>
      <p className='page-descript'>View our work:</p>
      <div className='gallery-preview-container'>
        {galleryPreviews}
      </div>
    </main>
  );
}