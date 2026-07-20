import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  getFilteredBucketData,
  getImageUrl,
  formatToTitle
} from '../../utils.js';
import Loading from '../../components/Loading.jsx';
import './gallery.css';

export default function GalleryType() {
  const params = useParams();

  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const filteredBucketData = await getFilteredBucketData(params.galleryType);
      setImagePaths(filteredBucketData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  function zoomImage(e) {
    if (imageIndex !== null) {
      setImageIndex(null);
      setShowBackdrop(false);
    } else {
      setImageIndex(Number(e.target.id));
      setShowBackdrop(true);
    }
  }

  const galleryImages = imagePaths.map((path, index) => {
    return (
      <div key={index} className='gallery-image'>
        <img
          id={index}
          src={getImageUrl(path)}
          className={index === imageIndex ? 'enlarged' : null}
          onClick={zoomImage}
        />
      </div>
    );
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <h1 className='page-title'>{formatToTitle(params.galleryType)}</h1>
      <Link to='..' relative='path' className='back-button'>
        ← Back to Gallery
      </Link>
      <div className='gallery-image-container'>
        {galleryImages}
      </div>
      {showBackdrop ? <div className='backdrop' onClick={zoomImage} /> : null}
    </main>
  );
}