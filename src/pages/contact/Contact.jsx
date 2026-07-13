import './contact.css';

export default function Contact() {
  const searchString = 'Architectural+Woodworking';
  const googleMapsApiKey = 'AIzaSyA-61VXRWb0qiWrZAcEd3385K7rJEfoSVE';
  const googleMapsUrl = `http://maps.googleapis.com/maps/api/staticmap?center=${searchString}&zoom=15&size=600x300&maptype=roadmap&key=${googleMapsApiKey}`;

  return (
    <main>
      <h1>Contact us</h1>
      <ul className='contact-container'>
        <img src={googleMapsUrl} />
        <li>Architectural Woodworking</li>
        <li>3291 40th Ave N</li>
        <li>St. Petersburg, FL 33714</li>
        <li>(727) 527-7400</li>
      </ul>
    </main>
  );
}