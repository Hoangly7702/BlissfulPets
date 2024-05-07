import React from "react";
import "../../styles/components/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="footer-col">
            <h4>BLISSFUL PETS</h4>
            <ul>
              <li><a href="#">If you have any questions, please contact us.</a></li>
              <li><a href="#">Hotline: 099 999 9999</a></li>
              <li><a href="#">Address: 2 Nguyen Cu Trinh, An Nghiep Ward, Ninh Kieu District, Can Tho City.</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>INTRODUCE</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/booking">Booking</a></li>
              <li><a href="/services">Service</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About</a></li>

            </ul>
          </div>
          <div className="footer-col">
            <h4>POLICY</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Linked program</a></li>
              <li><a href="#">Information security</a></li>
              <li><a href="#">Terms of website access</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/hoang.ly02/"> <i style={{ fontSize: "15px" }}><FaFacebookF /></i> </a>
              <a href="https://www.instagram.com/hoang.ly02/"> <i style={{ fontSize: "15px" }}><FaInstagram /></i> </a>
              <a href="https://www.instagram.com/hoang.ly02/"> <i style={{ fontSize: "15px" }}><FaTiktok /></i> </a>

              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
