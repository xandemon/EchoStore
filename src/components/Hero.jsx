import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">
            "Resonate With Style!"
          </h1>
          <p className="py-8 text-2xl max-md:text-lg text-accent-content">
            Explore the latest fashion must-haves and elevate your wardrobe with
            pieces that speak to your unique taste.
          </p>
          <Link
            to="/shop"
            className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
