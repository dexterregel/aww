import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getFilteredBucketData,
  getImageUrl
} from '../../../utils.js';
import Loading from '../../../components/Loading.jsx';
import './woodturning.css';

export default function Woodturning() {
  // state
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const filteredBucketData = await getFilteredBucketData('woodturning');
      setImagePaths(filteredBucketData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  let images = [];
  if (imagePaths.length > 0) {
    images = imagePaths.map((path, index) => {
      return (
        <img key={index} src={getImageUrl(path)} />
      );
    });
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <h1 className='page-title'>Woodturning</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <section className='woodturning-container'>
        <p>Specializing in long turnings and large diameters, our machines can handle up to 14' in length and 24" in diameter. We also provide full-service ornamental turning with regards to straight and spiral fluting, rope twists, and other decorative treatments. Whether it's 1 piece or 1000, we can make it happen.</p>
        <div className='woodturning-images-container'>
          {images}
        </div>
      </section>
    </main>
  );
}