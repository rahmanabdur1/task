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
        <Image src={backgroundImage} alt="Background Image" layout="fill" />
       </div>
      <div className="pad">
        <div>
          <MdFlight className="searchpadicon" />
          <span className="searchpadtext">search pad</span>
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
            <select className="option" id="destination" name="destination">
              <option value="airport">Hazrat Shajalal  Inti Airport [ DAC ]</option>
              <option value="airport">Hazrat Shajalal  Inti Airport [ DAC ]</option>
            </select>
          </div>
          <div className="input">
            <span>To:</span>
            <select className="option" id="destination" name="destination">
              <option value="airport">Dubai Inti Airport [ DAX ]</option>
              <option value="airport">Dubai Inti Airport [ DAX ]</option>
            </select>
          </div>
          <div className="input">
            <span><FaCalendarAlt /></span>
            <select className="option" id="destination" name="destination">
              <option value="deperture">Departure</option>
              <option value="deperture">Departure</option>
            </select>
          </div>
          <div className="input">
            <span><FaCalendarAlt /></span>
            <select className="option" id="destination" name="destination">
              <option value="return">Add Return</option>
              <option value="return">Add Return</option>
            </select>
          </div>
          <div className="input">
            <span><FaUserAstronaut /></span>
            <select className="option" id="destination" name="destination">
              <option value="class">Select Class</option>
              <option value="class">Select Class</option>
            </select>
          </div>
          <div className="input">
            <span><FaPersonWalkingLuggage /></span>
            <select className="option" id="destination" name="destination">
              <option value="traveler">Select Traveler</option>
            </select>
          </div>
        </div>
        <button className='search-btn'>Search Flight</button>
      </div>
    </div>
  );
};

export default Home;
