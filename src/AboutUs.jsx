import tkct from "../src/images.jpg";
import yzh from "../src/yezawhtet1.png";
import tha from "../src/thanhtooaung.jpg";
import money from "../src/Money_Drop_Myanmar 1.jpg";
import milli from "../src/Quest_to_Million.jpg";
import wiki from "../src/Wikipedia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mt-3 text-white"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="500"
  data-aos-offset="100">About Us</h1>

      <div className="row p-5 mb-5">
        <div className="col-md-8 offset-2 d-flex">
          <img src={tkct} alt="bu" className="about-img"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1000"
  data-aos-offset="100" />
          <ul className="mx-5" style={{ lineHeight: "2.5" }}>
            <h4 className="text-white" data-aos="fade-down"
  data-aos-duration="1500"
  data-aos-delay="1500"
  data-aos-offset="100">Thu Kha Chan Thar</h4>
            <h6 className=""data-aos="fade-down"
  data-aos-duration="1500"
  data-aos-delay="1400"
  data-aos-offset="100" style={{ color: "#FFDAB9" }}>
              Junior Developer
            </h6>
            <li className="list-unstyled" data-aos="fade-down"
  data-aos-duration="1500"
  data-aos-delay="1300"
  data-aos-offset="100">
              <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
              <span className="mx-2">
                <a
                  href="tel:+959949277794"
                  style={{ color: "#FFDAB9", textDecoration: "none" }}
                >
                  +959 949277794
                </a>
              </span>
            </li>
            <li className="list-unstyled"data-aos="fade-down"
  data-aos-duration="1500"
  data-aos-delay="1200"
  data-aos-offset="100">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
              <span className="mx-2">
                <a
                  href="mailto:thukhachanthar.dev@gmail.com"
                  style={{ color: "#FFDAB9", textDecoration: "none" }}
                >
                  thukhachanthar.dev@gmail.com
                </a>
              </span>
            </li>
            <li className="list-unstyled"data-aos="fade-down"
  data-aos-duration="1500"
  data-aos-delay="1100"
  data-aos-offset="100">
              <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
              <span className="mx-2">
                <a
                  href="https://github.com/ThuKhaCharmThar"
                  style={{ color: "#FFDAB9", textDecoration: "none" }}
                >
                  https://github.com/ThuKhaCharmThar
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="p-3" style={{ color: "#ffffff" }} />

      <h1 className="text-center text-white mb-5"data-aos="fade-down"
  data-aos-duration="1500"
  data-aos-delay="500"
  data-aos-offset="100">Counselling With Friends </h1>
      <h6 className="text-center m-lg-5"data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-delay="1000"
  data-aos-offset="100" style={{ color: "#CCCCCC" }}>
        Thanks to
        <span className="" style={{ color: "#90EE90" }}>
          {" "}
          Ko Ye Zaw Htet{" "}
        </span>
        and
        <span className="" style={{ color: "#90EE90" }}>
          {" "}
          Ko Than Htoo Aung{" "}
        </span>
        for advicing about UI design , Functions & Components
      </h6>

      <div className="mb-5">
        <div className="row mt-5 mb-5">
          <div className="col-md-8 offset-2 d-flex">
            <ul className="mx-5" style={{ lineHeight: "2.5" }}>
              <h4 className="text-white"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1100"
  data-aos-offset="100">Ye Zaw Htet</h4>
              <h6 className=""data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1200"
  data-aos-offset="100" style={{ color: "#FFDAB9" }}>
                Junior Developer
              </h6>
              <li className="list-unstyled"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1300"
  data-aos-offset="100">
                <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
                <span className="mx-2">
                  <a
                    href="tel:+959792937638"
                    style={{ color: "#FFDAB9", textDecoration: "none" }}
                  >
                    +959 792937638
                  </a>
                </span>
              </li>
              <li className="list-unstyled"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1400"
  data-aos-offset="100">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
                <span className="mx-2">
                  <a
                    href="mailto:yezawhtet.web@gmail.com"
                    style={{ color: "#FFDAB9", textDecoration: "none" }}
                  >
                    yezawhtet.web@gmail.com
                  </a>
                </span>
              </li>
              <li className="list-unstyled"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1500"
  data-aos-offset="100">
                <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
                <span className="mx-2">
                  <a
                    href="https://github.com/YeZawHtet"
                    style={{ color: "#FFDAB9", textDecoration: "none" }}
                  >
                    https://github.com/YeZawHtet
                  </a>
                </span>
              </li>
            </ul>
            <img src={yzh} alt="bu" className="about-img bg-light"data-aos="fade-left"
  data-aos-duration="1500"
  data-aos-delay="1000"
  data-aos-offset="100" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-8 offset-2 d-flex">
            <img src={tha} alt="bu" className="about-img"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1000"
  data-aos-offset="100" />
            <ul className="mx-5" style={{ lineHeight: "2.5" }}>
              <h4 className="text-white"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1100"
  data-aos-offset="100">Than Htoo Aung</h4>
              <h6 className=""data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1200"
  data-aos-offset="100" style={{ color: "#FFDAB9" }}>
                Junior Developer
              </h6>
              <li className="list-unstyled"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1300"
  data-aos-offset="100">
                <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
                <span className="mx-2">
                  <a
                    href="tel:+959253599770"
                    style={{ color: "#FFDAB9", textDecoration: "none" }}
                  >
                    +959 253599770
                  </a>
                </span>
              </li>
              <li className="list-unstyled"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1400"
  data-aos-offset="100">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
                <span className="mx-2">
                  <a
                    href="mailto:thanhtooaung.dev@gmail.com"
                    style={{ color: "#FFDAB9", textDecoration: "none" }}
                  >
                    thanhtooaung.dev@gmail.com
                  </a>
                </span>
              </li>
              <li className="list-unstyled"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1500"
  data-aos-offset="100">
                <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
                <span className="mx-2">
                  <a
                    href="https://github.com/thanhtuaung"
                    style={{ color: "#FFDAB9", textDecoration: "none" }}
                  >
                    https://github.com/thanhtuaung
                  </a>
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <hr className="mt-5" style={{ color: "#ffffff" }} />

      <h1 className="text-center mt-5 text-white"data-aos="fade-down"
  data-aos-duration="1500"
  data-aos-delay="500"
  data-aos-offset="100">Reference</h1>

      <div className="d-flex justify-content-around mt-5 p-lg-5">
        <div className="card himg bg-black border-0 rounded-5"data-aos="fade-right"
  data-aos-duration="1500"
  data-aos-delay="1000"
  data-aos-offset="100">
          <img
            src={money}
            className="card-img-top img-fluid rounded-5"
            alt="Quest to Million"
            style={{ minHeight: "200px", maxWidth: "200px" }}

          />
        </div>
        <div className="card himg bg-black border-0 rounded-5"data-aos="fade-up"
  data-aos-duration="1500"
  data-aos-delay="1000"
  data-aos-offset="100">
          <img
            src={wiki}
            className="card-img-top img-fluid rounded-5"
            alt="Quest to Million"
            style={{ minHeight: "200px", maxWidth: "200px" }}
          />
        </div>

        <div className="card himg bg-black border-0 rounded-5"data-aos="fade-left"
  data-aos-duration="1500"
  data-aos-delay="1000"
  data-aos-offset="100">
          <img
            src={milli}
            className="card-img-top rounded-5"
            alt="Quest to Million"
            style={{ maxHeight: "200px", maxWidth: "200px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
