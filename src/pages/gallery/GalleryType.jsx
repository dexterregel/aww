import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  getBucketContents,
  getFilteredBucketContents,
  getChildDirs
} from '../../utils.js';

export default function GalleryType() {
  // vars
  const bucketName = 'aww-assets-961743401958-us-east-1-an';
  const bucketRegion = 'us-east-1';
  const bucketUrl = `http://${bucketName}.s3.${bucketRegion}.amazonaws.com`;

  const params = useParams();

  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const bucketContents = await getBucketContents(bucketName);
      const filteredBucketContents = getFilteredBucketContents(bucketContents, params.galleryType);
      setImagePaths(filteredBucketContents);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const galleryTypeEls = imagePaths.map((path, index) => {
    return (
      <div key={index} className='molding-trim-item'>
        <img src={`${bucketUrl}/${path}`} />
      </div>
    );
  });

  if (isLoading) {
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main>
      <h1>{params.galleryType}</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Gallery</Link>
      <div className='molding-trim-container'>
        {galleryTypeEls}
      </div>
    </main>
  );
}