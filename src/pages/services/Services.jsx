import { Link } from 'react-router-dom';
import './services.css';

export default function Services() {
  return (
    <main>
      <h1 className='page-title'>Services</h1>
      <p className='page-descript'>We offer the following services. Select one to view more details:</p>
      <div className='service-container'>
        <section className='service-item'>
          <Link to='cabinetry'>
            <h2>Cabinetry</h2>
          </Link>
          <p>We have a full in-house design and production facility to meet every kind of cabinetry demand. Whether you need a full office, home build, or one-of-a-kind piece, we can provide what you desire.</p>
        </section>
        <section className='service-item'>
          <Link to='millwork'>
            <h2>Millwork</h2>
          </Link>
          <p>Combining custom woodworking with industrial manufacturing provides us with the ability to deliver your exact requirements on schedule. We have time-tested experience working on a variety of commercial and residential projects.</p>
        </section>
        <section className='service-item'>
          <Link to='molding-and-trim'>
            <h2>Molding and Trim</h2>
          </Link>
          <p>Our molding division is backed by a certified expert and is powered by two high-speed molders. We offer a full line of industry-standard profiles and a wide selection of wood species to choose from.</p>
        </section>
        <section className='service-item'>
          <Link to='woodturning'>
            <h2>Woodturning</h2>
          </Link>
          <p>From one-of-a-kind pieces, to full production runs. View our woodturning catalog.</p>
        </section>
      </div>
    </main>
  );
}