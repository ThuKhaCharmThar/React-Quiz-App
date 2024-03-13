import tkct from "../src/TKCT3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3">About Us</h1>
      <div className="row mt-5">
        <div className="col-md-6 ">
          <img src={tkct} alt="bu" className="about-img" />
        </div>
        <div className="col-md-6">
        <div className="contact-info">
            <h2>Contact Information</h2>
            <ul>
              <li><FontAwesomeIcon icon={faPhone} />Phone: +123456789</li>
              <li><FontAwesomeIcon icon={faEnvelope}/> Email: example@example.com</li>
              {/* <li><FontAwesomeIcon icon={Github} />Phone: +123456789</li> */}
              {/* <li><FontAwesomeIcon icon={faTwitter}/> Email: example@example.com</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
