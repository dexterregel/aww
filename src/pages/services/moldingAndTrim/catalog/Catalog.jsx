import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  getFilteredBucketData,
  getFileNameFromPath,
  getImageUrl,
  formatToTitle
} from '../../../../utils.js';
import Loading from '../../../../components/Loading.jsx';
import './catalog.css';

export default function Catalog() {
  const params = useParams();

  // states
  const [imagePaths, setImagePaths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const filteredBucketData = await getFilteredBucketData(params.moldingTrimType);
      setImagePaths(filteredBucketData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // use the url param to construct the page title
  const pageTitle = formatToTitle(params.moldingTrimType);

  let moldingTrimItems = [];
  if (imagePaths.length > 0) {
    moldingTrimItems = imagePaths.map((path, index) => {
      return (
        <div key={index} className='molding-trim-item'>
          <img src={getImageUrl(path)} />
          <p>{getFileNameFromPath(path, false).toUpperCase()}</p>
        </div>
      );
    })
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <h1 className='page-title'>{pageTitle}</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Molding and Trim</Link>
      <div className='molding-trim-container'>
        {moldingTrimItems}
      </div>
    </main>
  );
}