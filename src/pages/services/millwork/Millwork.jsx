import { Link } from 'react-router-dom';

export default function Millwork() {
  return (
    <main>
      <h1>Millwork</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <section>
        <h2>Commercial Woodworking</h2>
        <p>We specialize in providing custom woodworking to a variety of commercial organizations. We bring a wide variety of experiences, including retail stores, banks, reception areas, work stations, libraries, restaurants, and boardrooms. Take a moment to view some of our work located in <Link to='/gallery/mill-work'>the gallery</Link>.</p>
      </section>
      <section>
        <h2>Residential Woodworking</h2>
        <p>Our residential service provides experienced craftsmanship to work on projects ranging from outfitting multi-million dollar homes to accentuating current surroundings with furniture and decorative woodwork. You can put our manufacturing facility into action for you!</p>
      </section>
      <section>
        <h2>Custom Woodworking</h2>
        <p>Combining custom woodworking with industrial manufacturing provides us with the ability to deliver your exact requirements on schedule. We have time-tested experience working on a variety of commercial and residential projects.</p>
      </section>
    </main>
  );
}