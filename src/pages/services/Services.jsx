import { NavLink } from 'react-router-dom';
import './services.css';

export default function Services() {
  return (
    <main>
      <h1>Services</h1>
      <p>We offer the following services:</p>
      <div className='service-container'>
        <section className='service'>
          <NavLink to='cabinetry'>→ Cabinetry</NavLink>
          <p>We have a full in-house design and production facility to meet every kind of cabinetry demand.</p>
          <p>Whether you need a full office, home build, or one-of-a-kind piece, we can provide what you desire.</p>
        </section>
        <section className='service'>
          <NavLink to='millwork'>→ Millwork</NavLink>
          <p>Millwork description here</p>
        </section>
        <section className='service'>
          <NavLink to='molding-and-trim'>→ Molding and Trim</NavLink>
          <p>Molding and trim description here</p>
        </section>
        <section className='service'>
          <NavLink to='woodturning'>→ Woodturning</NavLink>
          <p>Woodturning description here</p>
        </section>
      </div>
    </main>
  );
}