import './home.css';
import conferenceRoom from '../../assets/images/misc/conference-room.jpg';
import receptionArea from '../../assets/images/misc/reception-area.jpg';

export default function Home() {
  return (
    <main className='home-container'>
      <h1>Premier Woodworking Specialists</h1>
      <section className='home'>
        <p>We manufacture wood products for a wide variety of clients. Our industrial manufacturing facility, located in St. Petersburg, FL, encompasses 19,000 square feet. Take a moment to learn how our commitment to quality and service can put a signature of success on your woodworking products.</p>
        <img src={conferenceRoom} />
      </section>
      <section className='home'>
        <img src={receptionArea} />
        <p>Our operation is built upon the knowledge and skills that our dedicated staff bring to the table (whether your boardroom table or our saw tables). When you work with us, you're working with real people who have a long tenure of craftsmanship backed by industry certifications and awards. You can be assured your representative won't be afraid to get out into the shop and make sure your job is done right and on time!</p>
      </section>
    </main>
  );
}