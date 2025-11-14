import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
 <footer className="bg-[#20244a] text-white py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4"><span className='text-blue-700'>MS</span><span className='text-red-600'>FIN</span></h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Empowering your financial goals with smart, quick, and reliable loan solutions.
            Get the support you need — anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Apply Loan</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            <li>📍 Jaipur, Rajasthan, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@msfin.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:scale-110 transition-transform"><FaFacebookF /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaInstagram /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaLinkedinIn /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} <span className="font-semibold">MS Fin</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

