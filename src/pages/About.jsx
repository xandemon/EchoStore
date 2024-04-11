import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* <SectionTitle title="About Us" path="Home | About" /> */}
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">
          We love our customers!
        </h2>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
        Welcome to Echostore, your premier destination for the latest trends and timeless classics in branded fashion.
At Echostore, we believe that style is more than just what you wear it's a reflection of your unique personality and expression. That's why we curate a carefully selected collection of top-tier brands and sought-after designers, ensuring that you have access to the finest quality apparel and accessories that effortlessly elevate your look.
 We take pride in offering authenticity, quality, and value, ensuring that every purchase you make with us is an investment in both style and satisfaction.
Thank you for choosing Echostore as your fashion destination.

        </p>
        <Link
          to="/contact"
          className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
