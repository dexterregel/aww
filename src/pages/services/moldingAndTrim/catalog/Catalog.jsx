import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './catalog.css';
import {
  getChildDirs,
  getBucketContents,
  getFilteredBucketContents,
  getFileNameFromPath
} from '../../../../utils.js';

export default function Catalog() {
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
      const filteredBucketContents = await getFilteredBucketContents(bucketContents, params.moldingTrimType);
      setImagePaths(filteredBucketContents);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  console.log(imagePaths);

  // use the url param to construct the page title
  const pageTitle = params.moldingTrimType[0].toUpperCase() + params.moldingTrimType.replaceAll('-', ' ').slice(1);

  function getMoldingTrimEls(imagePaths) {
    // exit early if imagePaths doesn't have data
    if (imagePaths.length === 0) {
      return;
    }
    const moldingTrimEls = imagePaths.map((path, index) => {
      return (
        <div key={index} className='molding-trim-item'>
          <img src={`${bucketUrl}/${path}`} />
          <p>{getFileNameFromPath(path, false).toUpperCase()}</p>
        </div>
      );
    })
    return moldingTrimEls;
  };
  const moldingTrimEls = getMoldingTrimEls(imagePaths);

  if (isLoading) {
    return <h1 style={{textAlign: 'center'}}>Loading...</h1>;
  }

  return (
    <main>
      <h1>{pageTitle}</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Molding and Trim</Link>
      <div className='molding-trim-container'>
        {moldingTrimEls}
      </div>
    </main>
  );
}