import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getFilteredBucketData,
  getImageUrl
} from '../../../utils.js';
import Loading from '../../../components/Loading.jsx';
import './cabinetry.css';

export default function Cabinetry() {
  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const filteredBucketData = await getFilteredBucketData('cabinetry');
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
    })
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <h1 className='page-title'>Cabinetry</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <div className='cabinetry-container'>
        <section className='cabinetry-item'>
          <p>Our cabinetry division is the perfect answer for everything from face-frame and European-style cabinetry, to custom finishes and solid surfaces. We offer cabinets with a full selection of styles, materials, accessories, and finishes, allowing you to take the guess work out of ordering by delivering exactly what you need.</p>
          <div className='cabinetry-images'>
            {images}
          </div>
        </section>
      </div>
    </main>
  );
}