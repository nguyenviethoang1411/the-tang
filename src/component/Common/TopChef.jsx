import React, { Component } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ReactComponent as Arrow } from "../../svg/right-arrow.svg";
import { ReactComponent as Phone } from "../../svg/phone-call2.svg";
import { Link } from "react-router-dom";
const ChefImage = (
  <img src="assets/images/resources/chef1.png" alt="chef List" />
);
const ChefImage1 = (
  <img src="assets/images/resources/chef2.png" alt="chef List" />
);
const ChefImage2 = (
  <img src="assets/images/resources/chef3.png" alt="chef List" />
);
const Cheflist = [
  {
    image: ChefImage,
    category: "Thomas Jackki",
    title: "24 Recips",
  },
  {
    image: ChefImage1,
    category: "Thomas Jackki",
    title: "24 Recips",
  },
  {
    image: ChefImage2,
    category: "Thomas Jackki",
    title: "24 Recips",
  },
];

class TopChef extends Component {
  render() {
    return (
      <div className="sec-space  position-relative">
        <div
          className="bg-fixed"
          style={{
            backgroundImage:
              "url(" + "assets/images/resources/parallax.jpg" + ")",
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sec-heading text-center">
                <span className="text-theme theme-color fs-20 d-block mb-2">
                  Expert and Professional
                </span>
                <h2 className="text-uppercase fs-45 mb-40">Top Chef’s Recips</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {Cheflist.map((value, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="chef-box position-relative bg-white">
                    <div className="chef-box-content d-flex align-items-center">
                      <figure>{value.image}</figure>
                      <div className="chef-box-info">
                        <span className="text-theme fs-16">{value.title}</span>
                        <h3 className="text-capitalize fs-26 mb-3">
                          {value.category}
                        </h3>
                        <Link
                          className="rounded-circle text-center"
                          to="/ChefDetail"
                          title=""
                        >
                          <Arrow />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chef-contct-info justify-content-center d-flex align-items-center pt-60 mb-20">
              <Phone />
              <span className="fs-20">Waiting Your Call: ( 378 ) 400-1234 </span>
            </div>
            <ul className="social-icons d-flex align-items-center justify-content-center m-0 p-0 list-unstyled">
              <li>
                <a
                  className="rounded-circle d-inline-block fs-16 text-center text-black"
                  href="javascript:void(0)"
                  title=""
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="rounded-circle d-inline-block fs-16 text-center text-black"
                  href="javascript:void(0)"
                  title=""
                >
                  <FaGoogle />
                </a>
              </li>
              <li>
                <a
                  className="rounded-circle d-inline-block fs-16 text-center text-black"
                  href="javascript:void(0)"
                  title=""
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className="rounded-circle d-inline-block fs-16 text-center text-black"
                  href="javascript:void(0)"
                  title=""
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default TopChef;
