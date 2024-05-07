import React, { useState, useContext } from "react";
import "../../../styles/components/slider.css";
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronsRight } from "react-icons/fi";
import { AuthContext } from "../../../context/AuthContext";

export function SliderHome() {
  return (
    <div className="slider-container fadeInUp animation">
      <span className="subheading"> WELCOME TO BLISSFUL PETS </span>
      <h1 className="slider-text">
        we will make <span> YOUR </span> <br /> <span> STYLE</span> of your
        dreams
      </h1>

      
      <div className="text-p">
        <p style={{marginRight:"40px", textAlign:"justify"}}>
        Let us create the style of your dreams for your beloved pet. Just as a gentle river named Duden flows by our sanctuary, we provide the essential regelialia to pamper your furry companion. Our oasis is a paradisematic haven, where every moment is adorned with the delight of roasted parts of sentences flying into your senses.
        </p>

        
        <button className="link-about">
          <Link to="/about" className="link">
            Learn more about us
          </Link>
        </button>
      </div>
    </div>
  );
}

export function SliderServices({ title }) {
  return (
    <div className="slider-container fadeInUp animation">
      <div className="about-slider">
        <div className="title-about">
          <Link to="/home" className="link">
            <h5>Home</h5>
          </Link>
          <FiChevronsRight className="icon-link" />
          <h5>{title}</h5>
          <FiChevronsRight className="icon-link" />
        </div>
        <h1 className="slider-text"> {title}</h1>
      </div>
    </div>
  );
}
export function SliderSingleServices({ title, name }) {
  return (
    <div className="slider-container fadeInUp animation">
      <div className="about-slider">
        <div className="title-about">
          <Link to="/home" className="link">
            <h5>Home</h5>
          </Link>
          <FiChevronsRight className="icon-link" />
          <Link to="/services" className="link">
            <h5>{title}</h5>
          </Link>

          <FiChevronsRight className="icon-link" />
          <h5>{name}</h5>
        </div>
        <h1 className="slider-text"> {name}</h1>
      </div>
    </div>
  );
}

export function SliderProfile() {
  // const { user: currentUser } = useContext(AuthContext);
  // const [user, setUser] = useState(currentUser);
  return (
    <div className="slider-container fadeInUp animation profile">
      <div className="about-slider">
        <div className="title-about">
          <Link to="/home" className="link">
            <h5>Home</h5>
          </Link>
          <FiChevronsRight className="icon-link" />
          <h5>Profile</h5>
          <FiChevronsRight className="icon-link" />
        </div>
        <h1 className="slider-text">welcome to BLISSFUL PETS</h1>
        <p className="content">Thank you for trusting and using our service</p>
      </div>
    </div>
  );
}
