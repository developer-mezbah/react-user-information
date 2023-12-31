import React from "react";

const Footer = () => {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="container my-5">
        <footer className="bg-primary text-center text-lg-start text-white">
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row my-4">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div
                  className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                  style={{ width: 150, height: 150 , overflow: "hidden"}}
                >
                  <img
                    src="https://res.cloudinary.com/de4xozulb/image/upload/v1704000539/Profile%20Pictures/h2behzdsb67kmqy1lvon.png"
                    height={150}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <p className="text-center">
                  My name is Mezbah Uddin , and i am a full stack developer.
                </p>
                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Github</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      When your pet is missing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Recently found
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      How to adopt?
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Pets for adoption
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Material gifts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Help with walks
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Volunteer activities
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Linkedin</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      General information
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      About the shelter
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Statistic data
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Job
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Tenders
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Contact</h5>
                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-map-marker-alt pe-2" />
                      Dhaka, Bangladesh
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone pe-2" />+880 1707954201
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope pe-2 mb-0" />
                      developer.mezbah@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright:
            <a className="text-white" href="https://github.com/developer-mezbah">
              developer.mezbah@gmail.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
};

export default Footer;
