import './contact.css';

export default function Contact() {
  // google maps vars
  const googleMapsBaseUrl = 'http://maps.googleapis.com/maps/api/staticmap';
  const googleMapsMarker = 'markers=color:red%7CArchitectural+Woodworking'; // %7C encodes to a pipe char
  const googleMapsZoom = 'zoom=15';
  const googleMapsApiKey = 'AIzaSyA-61VXRWb0qiWrZAcEd3385K7rJEfoSVE';
  const googleMapsUrl = `${googleMapsBaseUrl}?${googleMapsMarker}&${googleMapsZoom}&style=feature:poi|visibility:off&size=600x300&key=${googleMapsApiKey}`;

  return (
    <main>
      <h1>Contact us</h1>
      <img src={googleMapsUrl} />
      <ul className='contact-container'>
        <li>Architectural Woodworking</li>
        <li>3291 40th Ave N</li>
        <li>St. Petersburg, FL 33714</li>
        <li>(727) 527-7400</li>
      </ul>
    </main>
  );
}