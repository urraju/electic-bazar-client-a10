import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-t  to-black from-violet-950 ">
      <footer className="footer grid grid-cols-2 md:grid-cols-4 w-9/12 mx-auto text-white p-10  font-philospar">
        <nav>
          <header className="footer-title border-b ">Services</header>
          <a className="link link-hover">Monitor</a>
          <a className="link link-hover">Mouse</a>
          <a className="link link-hover">Keyboard</a>
          <a className="link link-hover">Laptop</a>
          <a className="link link-hover">Watch</a>
        </nav>
        <nav>
          <header className="footer-title border-b ">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Get Product</a>
        </nav>
        <nav>
          <header className="footer-title border-b ">Brand</header>
          <a className="link link-hover">Samsung</a>
          <a className="link link-hover">Hp</a>
          <a className="link link-hover">Dell</a>
          <a className="link link-hover">Lenovo</a>
          <a className="link link-hover">Asus</a>
          <a className="link link-hover">Acer</a>
          <div className="grid grid-flow-col gap-4"></div>
        </nav>
        <nav>
          <header className="footer-title flex border-b ">Follow Us</header>
        
          <div className="grid text-lg grid-flow-col gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
