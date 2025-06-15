// components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Address */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847zM13.68 8.798l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <span className="text-xl font-bold text-primary">WanderNest</span>
          </div>
          <p className="text-sm mb-2 leading-relaxed">
            WanderNest Inc. <br />
            123 Tech Park, Silicon Valley, CA
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 WanderNest. All rights reserved.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="footer-title">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="link link-hover">Branding</a></li>
            <li><a href="#" className="link link-hover">Design</a></li>
            <li><a href="#" className="link link-hover">Marketing</a></li>
            <li><a href="#" className="link link-hover">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="footer-title">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="link link-hover">About Us</a></li>
            <li><a href="#" className="link link-hover">Contact</a></li>
            <li><a href="#" className="link link-hover">Jobs</a></li>
            <li><a href="#" className="link link-hover">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h3 className="footer-title">Legal</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="link link-hover">Terms of Use</a></li>
            <li><a href="#" className="link link-hover">Privacy Policy</a></li>
            <li><a href="#" className="link link-hover">Cookie Policy</a></li>
          </ul>

          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-primary" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;