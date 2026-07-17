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
  const [imageIndex, setImageIndex] = useState(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

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

  /*
  when an image is clicked, a state should change
  that state should control whether the image has an "enlarged" class name on it
    i need to be able to know what index of the image was clicked
      i can set the image's id, and access that
    that way when they're rendered again after the state is changed, i know which one to add the enlarge class to
  that enlarged class will make it so that the image is centered on the page
  and a backdrop is displayed over everything else
  clicking the backdrop and/or the image again toggles the state again, removing the enlarged class from the image
  this also makes the backdrop disappear
  */
  function zoomImage(e) {
    if (imageIndex !== null) {
      setImageIndex(null);
      setShowBackdrop(false);
    } else {
      setImageIndex(Number(e.target.id));
      setShowBackdrop(true);
    }
  }

  const galleryTypeEls = imagePaths.map((path, index) => {
    return (
      <div key={index} className='gallery'>
        <img src={`${bucketUrl}/${path}`} id={index} className={index === imageIndex ? 'enlarged' : null} onClick={zoomImage} />
      </div>
    );
  });

  if (isLoading) {
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main>
      <h1>{params.galleryType.charAt(0).toUpperCase() + params.galleryType.replaceAll('-', ' ').slice(1)}</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Gallery</Link>
      <div className='gallery-container'>
        {galleryTypeEls}
      </div>
      { showBackdrop ? <div className='backdrop' onClick={zoomImage} /> : null}
    </main>
  );
}