import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  getBucketContents,
  getFilteredBucketContents,
  getChildDirs
} from '../../utils.js';
import './gallery.css';

export default function Gallery() {
  // vars
  const bucketName = 'aww-assets-961743401958-us-east-1-an';
  const bucketRegion = 'us-east-1';
  const bucketUrl = `http://${bucketName}.s3.${bucketRegion}.amazonaws.com`;

  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const bucketContents = await getBucketContents(bucketName);
      const filteredBucketContents = getFilteredBucketContents(bucketContents, 'gallery');
      setImagePaths(filteredBucketContents);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // create gallery type preview elements
  function getGalleryTypePreviewEls(imagePaths) {
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
    const galleryTypePreviewEls = images.map((image, index) => {
      return (
        <Link key={index} to={image.type} className='molding-trim-item'>
          <img src={`${bucketUrl}/${image.path}`} />
          {image.type.charAt(0).toUpperCase() + image.type.replaceAll('-', ' ').slice(1)}
        </Link>
      );
    });
    return galleryTypePreviewEls;
  }
  const galleryTypePreviewEls = getGalleryTypePreviewEls(imagePaths);

  if (isLoading) {
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main>
      <h1>Gallery</h1>
      <p>View our work:</p>
      {galleryTypePreviewEls}
    </main>
  );
}