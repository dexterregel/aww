import { useState, useEffect } from 'react';
import './contact.css';

export default function Contact() {
  // states
  const [mapImgUrl, setMapImgUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const googleMapsBaseUrl = 'http://maps.googleapis.com/maps/api/staticmap';
      const googleMapsMarker = 'markers=color:red%7CArchitectural+Woodworking'; // %7C encodes to a pipe char
      const googleMapsSize = 'size=600x300';
      const googleMapsZoom = 'zoom=15';
      const googleMapsStyle = 'style=feature:poi|visibility:off';
      const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      const googleMapsUrl = `${googleMapsBaseUrl}?${googleMapsMarker}&${googleMapsZoom}&${googleMapsSize}&${googleMapsStyle}&key=${googleMapsApiKey}`;
      setMapImgUrl(googleMapsUrl);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <h1 className='page-title'>Contact us</h1>
      <div className='contact-container'>
        <img src={mapImgUrl} />
        <ul className='contact'>
          <li>Architectural Woodworking</li>
          <li>3291 40th Ave N</li>
          <li>St. Petersburg, FL 33714</li>
          <li>(727) 527-7400</li>
        </ul>
      </div>
    </main>
  );
}