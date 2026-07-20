import { useState, useEffect } from 'react';
import {
  getFilteredBucketData,
  getImageUrl
} from '../../utils.js';
import './home.css';

export default function Home() {
  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const filteredBucketData = await getFilteredBucketData('home');
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
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main className='home-container'>
      <h1>Premier Woodworking Specialists</h1>
      <section className='home'>
        <p>We manufacture wood products for a wide variety of clients. Our industrial manufacturing facility, located in St. Petersburg, FL, encompasses 19,000 square feet. Take a moment to learn how our commitment to quality and service can put a signature of success on your woodworking products.</p>
        {images[0]}
      </section>
      <section className='home'>
        {images[1]}
        <p>Our operation is built upon the knowledge and skills that our dedicated staff bring to the table (whether your boardroom table or our saw tables). When you work with us, you're working with people who have a long tenure of craftsmanship backed by industry certifications and awards.</p>
      </section>
    </main>
  );
}