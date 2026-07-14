import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBucketContents, getFilteredBucketContents } from '../../../utils.js';

export default function Woodturning() {
  // vars
  const bucketName = 'aww-assets-961743401958-us-east-1-an';
  const bucketRegion = 'us-east-1';
  const bucketUrl = `http://${bucketName}.s3.${bucketRegion}.amazonaws.com`;

  // state
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getBucketContents(bucketName);
      const filteredData = await getFilteredBucketContents(data, 'woodturning');
      setImagePaths(filteredData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  function getWoodturningImages(imagePaths) {
    if (imagePaths.lenth === 0) {
      return;
    }

    return imagePaths.map((path, index) => {
      return (
        <img key={index} src={`${bucketUrl}/${path}`} />
      );
    });
  }
  const woodturningImages = getWoodturningImages(imagePaths);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <h1>Woodturning</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <section>
        <p>From one-of-a-kind pieces, to full production runs. Specializing in large diameter and long turnings, our "BIG BERTHA" can handle up to 14' in length and 24" in diameter. We also provide full-service ornamental turning with regards to straight and spiral fluting, rope twists, and other decorative treatments. Whether it's 1 piece or 1000, we can make it happen.</p>
        {woodturningImages}
      </section>
    </main>
  );
}