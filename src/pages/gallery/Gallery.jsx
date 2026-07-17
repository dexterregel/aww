import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getFilteredBucketData,
  getImageUrl,
  getChildDirs
} from '../../utils.js';
import './gallery.css';

export default function Gallery() {
  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  // create gallery type preview elements
  function getGallerySections(imagePaths) {
    // exit early if imagePaths doesn't have data
    if (imagePaths.length === 0) {
      return;
    }
    // get a corresponding image for each child dir
    const dirs = getChildDirs(imagePaths, 'gallery');
    const images = [];
    for (const dir of dirs) {
      const image = {}
      // get the image's type for setting the url
      image.type = dir;
      image.path = imagePaths.filter(path => path.includes(dir))[0];
      images.push(image);
    }
    const gallerySections = images.map((image, index) => {
      return (
        <Link key={index} to={image.type} className='gallery'>
          <img src={getImageUrl(image.path)} />
          <h2>→ {image.type.charAt(0).toUpperCase() + image.type.replaceAll('-', ' ').slice(1)}</h2>
        </Link>
      );
    });
    return gallerySections;
  }
  const gallerySections = getGallerySections(imagePaths);

  if (isLoading) {
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main>
      <h1>Gallery</h1>
      <p>View our work:</p>
      <div className='gallery-container'>
        {gallerySections}
      </div>
    </main>
  );
}