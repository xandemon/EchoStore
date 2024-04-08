import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Footer = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      {/*<nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <Link
          to="/"
          className="link link-hover text-2xl max-md:text-xl text-accent-content"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="link link-hover text-2xl max-md:text-xl text-accent-content"
          onClick={() => window.scrollTo(0, 0)}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="link link-hover text-2xl max-md:text-xl text-accent-content"
          onClick={() => window.scrollTo(0, 0)}
        >
          About us
        </Link>
        <Link
          to="/contact"
          className="link link-hover text-2xl max-md:text-xl text-accent-content"
          onClick={() => window.scrollTo(0, 0)}
        >
          Contact
        </Link>
        {!loginState && (
          <>
            <Link
              to="/login"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Register
            </Link>
          </>
        )}
      </nav>*/}
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://x.com"} target="_blank">
            <FaSquareXTwitter className="text-5xl max-sm:text-4xl text-accent-content hover:cursor-pointer" />
          </Link>
          <Link to={"https://fb.com"} target="_blank">
            <FaSquareFacebook className="text-5xl max-sm:text-4xl text-accent-content hover:cursor-pointer" />
          </Link>
          <Link to={"https://instagram.com"} target="_blank">
            <FaSquareInstagram className="text-5xl max-sm:text-4xl text-accent-content hover:cursor-pointer" />
          </Link>
          <Link to={"https://youtube.com"} target="_blank">
            <FaSquareYoutube className="text-5xl max-sm:text-4xl text-accent-content hover:cursor-pointer" />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="text-xl max-sm:text-sm text-accent-content">
          Copyright © 2023 - All right reserved by EchoStore
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
