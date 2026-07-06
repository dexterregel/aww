import './home.css';
import conferenceRoom from '../../assets/images/misc/conference-room.jpg';
import receptionArea from '../../assets/images/misc/reception-area.jpg';

export default function Home() {
  return (
    <main>
      <h1>Premier Woodworking Specialists</h1>
      <section>
        <p>We manufacture wood products for a wide variety of clients. Our industrial manufacturing facility, located in St. Petersburg, FL, encompasses 19,000 square feet. We encourage you to take a moment to learn how our commitment to quality and service can put a signature of success on your woodworking products.</p>
        <img src={conferenceRoom} />
      </section>
      <section>
        <img src={receptionArea} />
        <p>Our operation is built upon the knowledge and skills that our dedicated staff brings to the table (whether your board room table or our saw tables). When you work with Architectural Woodworking, you're working with real people who have a long tenure of craftsmanship backed by industry certifications and awards. You can be assured your representative will not be afraid to get out into the shop and make sure your job is done right and on time!</p>
      </section>
    </main>
  );
}