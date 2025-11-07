import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { TfiInfoAlt } from "react-icons/tfi";
import { motion } from "framer-motion";
import { FaSquareInstagram } from "react-icons/fa6";


const Contactus = () => {
  return (
    <div className='w-full min-h-screen bg-linear-to-b from-white to-gray-50 px-6 md:px-12 lg:px-24 py-24'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
  <span className="text-gray-900">Get in </span>
  <span className="relative inline-block">
    <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
      Touch    </span>
    <span className="absolute left-0 bottom-0 w-full h-1 bg-linear-to-r from-red-600 to-blue-600 rounded-full"></span>
  </span>
  <span className="text-gray-900"> With Us!</span>
</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-6"
          >
            We'd love to hear from you. Visit us at our office
          </motion.p>
        </div>
        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex justify-center items-center"> 
                <TfiLocationPin className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
            </div>
             
            <div className="h-96 rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="MSFIN Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2123.5054363136182!2d75.7758487512818!3d26.960615135077184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b488a5c3d1%3A0xd5ba54a1d251271f!2sTime%20square%2C%20Sector%202%2C%20Central%20Spine%2C%20Vidyadhar%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302039!5e0!3m2!1sen!2sin!4v1762072246707!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true}
              />
            </div>
          </motion.div>
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='bg-white rounded-3xl shadow-lg p-8 border border-gray-100'
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-red-100 flex justify-center items-center"> 
                <TfiInfoAlt className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
            </div>
   
            <div className='space-y-4'>
              {/* Email */}
              <div className="bg-blue-50 rounded-2xl p-5 hover:bg-blue-100 transition-colors duration-300 border border-blue-100">
                <div className="flex gap-4 items-center"> 
                  <div className="bg-white h-12 w-12 rounded-xl flex justify-center items-center text-blue-600 text-xl shadow-sm">
                    <IoMailOutline />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-900 mb-1">Email</div>
                    <div className="text-gray-700">info@msfin.in</div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-red-50 rounded-2xl p-5 hover:bg-red-100 transition-colors duration-300 border border-red-100"> 
                <div className="flex gap-4 items-center"> 
                  <div className="bg-white h-12 w-12 rounded-xl flex justify-center items-center text-red-600 text-xl shadow-sm">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-red-900 mb-1">Phone</div>
                    <div className="text-gray-700">0141 2339468</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-green-50 rounded-2xl p-5 hover:bg-green-100 transition-colors duration-300 border border-green-100">
                <div className="flex gap-4 items-center"> 
                  <div className="bg-white h-12 w-12 rounded-xl flex justify-center items-center text-green-600 text-xl shadow-sm">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-900 mb-1">WhatsApp</div>
                    <div className="text-gray-700">+91 7230032601</div>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="bg-purple-50 rounded-2xl p-5 hover:bg-purple-100 transition-colors duration-300 border border-purple-100">
                <div className="flex gap-4 items-start"> 
                  <div className="bg-white h-12 w-12 rounded-xl flex justify-center items-center text-purple-600 text-xl shadow-sm flex-shrink-0">
                    <TfiLocationPin />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-purple-900 mb-1">Office Address</div>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      F-109-112, 1st Floor, Time Square, Central Spine, Vidhyadhar Nagar, Jaipur, Rajasthan India 302039
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-8 border-t border-gray-100 ">
              <div className="text-lg font-semibold text-gray-900 mb-4">Follow Us</div>
              <div className="flex gap-2">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin className="text-3xl" />
                
                
              </a>
               <a 
                href="#" 
                className="inline-flex items-center gap-2 text-[#e630a3] hover:text-[#e630a3] transition-colors duration-300"
              >
                <FaSquareInstagram className="text-3xl" />
              
                
              </a>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contactus;

