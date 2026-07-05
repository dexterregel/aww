import { NavLink } from 'react-router-dom';

export default function Services() {
  return (
    <main>
      <h1>Services</h1>
      <p>We offer the following services. Select one to learn more:</p>
      <section className='service'>
        <NavLink to='cabinetry'>Cabinetry</NavLink>
        <p>We have a full in-house design and production facility to meet every kind of cabinetry demand.</p>
        <p>Whether you need a full office, home build, or one-of-a-kind piece, we can provide what you desire.</p>
      </section>
      <NavLink to='millwork'>Millwork</NavLink>
      <NavLink to='molding-and-trim'>Molding and Trim</NavLink>
      <NavLink to='woodturning'>Woodturning</NavLink>
    </main>
  );
}