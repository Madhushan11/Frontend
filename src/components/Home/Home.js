import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNav from './HomeNav.js';
import backgroundImage1 from './images/front1.png';
import backgroundImage2 from './images/front2.png';
import backgroundImage3 from './images/front3.png';
import aboutImg from './images/about.png';
import car1 from './images/veh4.jpg';
import car2 from './images/car02.jpeg';
import car3 from './images/3weel.png';
import car4 from './images/lorry.png';
import car5 from './images/scooter.png';
import car6 from './images/car.png';
import imgFeature1 from './images/clock.png';
import imgFeature2 from './images/location.png';
import imgFeature3 from './images/charge.png';
import contactImage from './images/contact.png';
import './Home.css';
import Footer from '../Footer/Footer.js';

const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3];
const sentences = [
  "Rent a Car within your finger tips",
  "Quality Cars with unlimited miles",
  "Best rental Cars in your location"
];

export function Home() {
  const navigate = useNavigate();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [animateLines, setAnimateLines] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    // Enable animation for lines after a brief delay
    const animationTimeout = setTimeout(() => {
      setAnimateLines(true);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, []);

  useEffect(() => {
    // Rotate background images and sentences every 5 seconds
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000); // Change background and sentence every 5 seconds (5000ms)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleSearchClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <HomeNav />
      <header className="Home-header" style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}>
        <div className="background-image-container">
          
          <div className="background-text">
            <p>{sentences[currentSentenceIndex]}</p>
          </div>
        </div>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <div className="about-content-wrapper">
          <div className="about-content">
            <p>Welcome to Vishwa Transport, your trusted partner in transportation solutions. 
              We specialize in providing top-notch vehicles for long-term rentals, catering to the 
              diverse needs of businesses across various industries. 
              With a commitment to excellence and customer satisfaction, 
              we take pride in being a reliable partner for all your transportation requirements.</p>
          </div>
          <img src={aboutImg} alt="About Us" />
        </div>
        <div className="new-textbox">
          <p>“At Vishwa Transport, we are more than just a transport company; 
            we are your strategic ally in achieving seamless and efficient operations. 
            With 10 years of industry experience, we have established ourselves 
            as leaders in the long-term vehicle rental market. Our team comprises 
            dedicated professionals who are passionate about delivering unparalleled 
            service and ensuring your business experiences a smooth ride.”</p>
          <p className='author'>Deve Shantha</p>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-box shining">
          <img src={imgFeature1} alt="Feature 1" className="feature-image" />
          <div className="feature-content">
            <h3>Fast and Easy Booking</h3>
            <p>Enjoy a seamless booking experience with just a few clicks. 
              Our intuitive system ensures you can reserve your vehicle quickly and efficiently.</p>
          </div>
        </div>
        <div className="feature-box shining">
          <img src={imgFeature2} alt="Feature 2" className="feature-image" />
          <div className="feature-content">
            <h3>Many Pickup Locations</h3>
            <p>Choose from a wide network of convenient pickup locations. 
              We ensure there's always a spot nearby to make your rental experience as smooth as possible.</p>
          </div>
        </div>
        <div className="feature-box shining">
          <img src={imgFeature3} alt="Feature 3" className="feature-image" />
          <div className="feature-content">
            <h3>No Booking Charges</h3>
            <p>Make your reservations without worrying about hidden fees. 
              We offer transparent pricing with no additional booking charges, 
              ensuring you get the best value.</p>
          </div>
        </div>
      </section>

      <section className="rental-fleets">
        <h2>Our Rental Fleets</h2>
        <div className="fleet-carousel">
          <div className="fleet" data-vehicle="Car 1 - $40/day">
            <img src={car1} alt="Car 1" />
            <div>Jeep - 20,000/day</div>
          </div>
          <div className="fleet" data-vehicle="Car 2 - $50/day">
            <img src={car2} alt="Car 2" />
            <div>Mini Van - 10,000/day</div>
          </div>
          <div className="fleet" data-vehicle="Car 3 - $60/day">
            <img src={car3} alt="Car 3" />
            <div>Three weeler - 5000Rs/day</div>
          </div>
          <div className="fleet" data-vehicle="Car 1 - $40/day">
            <img src={car4} alt="Car 4" />
            <div>Lorry - 30,000Rs/day</div>
          </div>
          <div className="fleet" data-vehicle="Car 2 - $50/day">
            <img src={car5} alt="Car 5" />
            <div>Scooter - 2000Rs/day</div>
          </div>
          <div className="fleet" data-vehicle="Car 3 - $60/day">
            <img src={car6} alt="Car 6" />
            <div>Car - 8000Rs/day</div>
          </div>
        </div>
        <button className="prev">&#10094;</button>
        <button className="next">&#10095;</button>
      </section>

      <section className="contact-us">
  <div className="contact-info">
    <h2>Contact Us</h2>
    <p1>Feel free to reach out to us for any inquiries or assistance.</p1>
    <p className={animateLines ? 'animate-drop' : ''}>
      Email: <a href="mailto:shanthasovis73@gmail.com" className="email-link">shanthasovis73@gmail.com</a>
    </p>
    <p className={animateLines ? 'animate-drop' : ''}>Phone: +94 777 845 830</p>
    <p className={animateLines ? 'animate-drop' : ''}>
      Address: Vishwa Transport (Pvt) Ltd, No 123, Araliya Street, Gampaha, Sri Lanka.
    </p>
  </div>
  <div className="contact-image">
    <img src={contactImage} alt="Contact Us" />
  </div>
</section>



      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review-box">
          <div className="review">
            <p>"Great service and affordable prices!"</p>
            <p className="review-name">- Chamal</p>
          </div>
        </div>
        <div className="review-box">
          <div className="review">
            <p>"Loved the variety of vehicles available."</p>
            <p className="review-name">- Migara</p>
          </div>
        </div>
        <div className="review-box">
          <div className="review">
            <p>"Excellent customer support."</p>
            <p className="review-name">- Indika Prasad</p>
          </div>
        </div>
        <div className="review-box">
          <div className="review">
            <p>"Highly recommend their services!"</p>
            <p className="review-name">- David Wilson</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Home;
