import logo from "./assets/msfin.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-100px flex justify-between p-12">
      {/* Left - Logo */}
      <div className="p-2">
        <img src={logo} alt="MSFIN Logo" className="h-12" />
      </div>

      {/* Center - Navigation Links */}
      <div className="text-xl flex items-end gap-4">
        <NavLink
          to="/"
          className="hover:underline hover:bg-red-100 hover:rounded-full p-2 hover:text-red-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          className="hover:underline hover:bg-red-100 hover:rounded-full p-2"
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className="hover:underline hover:bg-red-100 hover:rounded-full p-2"
        >
          Services
        </NavLink>
        <NavLink
          to="/careers"
          className="hover:underline hover:bg-red-100 hover:rounded-full p-2"
        >
          Careers
        </NavLink>
        <NavLink
          to="/contactus"
          className="hover:underline hover:bg-red-100 hover:rounded-full p-2"
        >
          Contact Us
        </NavLink>
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-2">
        <button className="rounded-full bg-blue-800 text-white px-4 py-2 hover:bg-blue-600">
          Apply Loan
        </button>
        <button className="rounded-full bg-blue-800 text-white px-4 py-2 hover:bg-blue-600">
          Track Loan
        </button>
      </div>
    </div>
  );
};

export default Navbar;
