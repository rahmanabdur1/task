import { MdFlight } from "react-icons/md";
import { TbPng } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa";
import backgroundImage from '../public/trip-3.jpg'; // Import your background image
import Image from 'next/image'

const Home = () => {
  return (
  
    <div className="home">
  <div className="background-image">
    <Image src={backgroundImage} alt="Background Image" layout="fill" objectFit=" cover" />
  </div>
      <div className="pad">
        <div>
          <MdFlight className="i"/>
          <span className="s">search pad</span>
        </div>
        
      </div>


      <div className="selected">
        <div className="three">
          <button>ONE WAY</button>
          <button>RONALD WAY</button>
          <button>MJJTI CITY</button>
        </div>
        <div className="grid">
          <div className='input'>
            <span>From:</span>
            <select className="option" id="country" name="country">
              <option value="australia">Hazrat Shajalal  Inti Airport [ DAC ]</option>
              <option value="australia">Hazrat Shajalal  Inti Airport [ DAC ]</option>
            </select>
          </div>
          <div className="input">
          <span>To:</span>
            <select className="option" id="country" name="country">
              <option value="australia">DUBAI Inti Airport [ DAX ]</option>
              <option value="australia">dUBAI Inti Airport [ DAX ]</option>
            </select>
          </div>
          <div className="input">
        <span><FaCalendarAlt /></span>
            <select className="option" id="country" name="country">
              <option value="australia">Departure</option>
              <option value="australia">Departure</option>
            </select>
          </div>
          <div className="input">
         <span><FaCalendarAlt /></span>
            <select className="option" id="country" name="country">
              <option value="australia">Add Return</option>
              <option value="australia">Add Return</option>
            </select>
          </div>
          <div className="input">
        <span><FaUserAstronaut /></span>
            <select className="option" id="country" name="country">
              <option value="australia">Select Class</option>
              <option value="australia">Select Class</option>
            </select>
          </div>
          <div className="input">
         <span><FaPersonWalkingLuggage /></span>
            <select className="option" id="country" name="country">
            <option value="australia">Select Traveler</option>
            </select>
          </div>
        </div>
        <button className='search-btn'>Search Flight</button>
      </div>
    </div>
  );
};

export default Home;
