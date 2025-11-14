import logo from "./assets/msfin.png";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <><div className="flex justify-between px-8 py-2 ">
      {/* Left - Logo */}
      <motion.div   
      initial={{ opacity: 0,x: 0}}   
      whileInView={{ opacity: 1, x: 20}}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="p-2 w-[20%] flex items-center gap-2 ">
        <img src={logo} alt="MSFIN Logo" className="h-12" />
        <div className="text-2xl font-semibold "><span className="text-blue-900">MS</span><span className="text-2xl font-semibold text-red-700">FIN</span></div>
      </motion.div>

      {/* Center - Navigation Links */}
      <div className="text-xl md:flex items-center justify-center gap-4 w-[55%] hidden font-semibold font-sans ">
        <NavLink
          to="/"
          className="hover:underline  hover:rounded-full p-2"
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus" 
          className="hover:underline  hover:rounded-full p-2"
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className="hover:underline hover:rounded-full p-2"
        >
          Services
        </NavLink>
      
        <NavLink
          to="/contactus"
          className="hover:underline hover:rounded-full p-2"
        >
          Contact Us
        </NavLink>
      </div>

      {/* Right - Buttons */}
      <motion.div   initial={{ opacity: 0,x: 0}}   
      whileInView={{ opacity: 1, x: -20}}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} 
      className="flex items-center gap-2 w-25%">
        <button className="rounded-full border-2 border-blue-700 text-blue-800 font-bold px-4 py-2 hover:scale-95 transition-transform duration-200">
          Apply Loan
        </button>
        <button className="rounded-full bg-blue-800 text-white px-4 py-2 hover:bg-blue-600 hover:scale-95 transition-transform duration-200">
          Track Loan
        </button>
      </motion.div>
    </div>
    </>
  );
};

export default Navbar;
