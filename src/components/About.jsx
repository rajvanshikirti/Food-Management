import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to a place where food is more than just a meal – it’s an experience! 🍽️✨

We are passionate about bringing people together through delicious flavors, fresh ingredients, and a warm, inviting atmosphere. Our chefs carefully craft each dish, blending traditional tastes with modern creativity to create something truly special.

Whether you’re here for a quick bite, a family gathering, or a celebration, we are committed to serving you with love and quality. Every dish tells a story, and we can’t wait for you to be a part of it.

So sit back, relax, and enjoy the journey of flavors. Good food, great company, and unforgettable moments await!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;