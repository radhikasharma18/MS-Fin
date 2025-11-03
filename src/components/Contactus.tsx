import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Contactus = () => {
  return (
    <div className='w-screen h-screen pt-8'>
        <div className="text-5xl font-serif text-center">
  <span className="relative inline-block">
    <span className="text-red-600">Get in</span>
   <span className="relative  bg-linear-to-r from-red-600 to-blue-900 bg-clip-text text-transparent"> Touch</span>
    <span className="text-blue-900"> With Us!</span>
    <span className="absolute left-0 bottom-0 w-full h-1 bg-linear-to-r from-red-600 to-blue-900 rounded-full"></span>
  </span>
</div>
    <p className="mb-6 pl-8 flex justify-center pt-8">We’d love to hear from you. Visit us at our office:</p>


<div className='flex p-8 w-full h-full gap-4'>
         <div className="w-1/2   rounded-xl overflow-hidden shadow-lg p-8">
            <div className="flex items-center gap-4">
                <p className="pb-8"><TfiLocationPin /></p>
                <p className="text-3xl font-bold pb-8 font-playfair ">Our Location:</p>
            </div>
             
     <div className="h-[70vh] " >
        <iframe
          title="MSFIN Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2123.5054363136182!2d75.7758487512818!3d26.960615135077184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b488a5c3d1%3A0xd5ba54a1d251271f!2sTime%20square%2C%20Sector%202%2C%20Central%20Spine%2C%20Vidyadhar%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302039!5e0!3m2!1sen!2sin!4v1762072246707!5m2!1sen!2sin"
          width="100%"
            height="100%"
            style={{ borderRadius:10  }}
          loading="lazy"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div >
    <div  className='w-1/2 shadow-lg p-8 rounded-lg'>
        <p className="text-3xl font-bold pb-8 font-playfair ">Our Information:</p>
    <div className='flex flex-col gap-4 justify-between'>
<div className="bg-blue-50 h-[90px] rounded-md hover:bg-blue-100">
    <div className="flex gap-4  items-center p-2"> 
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-blue-600 text-lg "><IoMailOutline  /></div>
    <div className=" p-4">
        <div  className="text-2xl text-blue-700 ">Email Id</div>
        <div>info@msfin.in</div>
        </div></div>
    
</div>
<div className="bg-red-50 h-[90px] hover:bg-red-100 rounded-md p-2"> 
    <div className="flex gap-4  items-center"> 
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-red-600 text-lg "> <FaPhone /></div>
    <div className=" p-4">
        <div  className="text-2xl text-red-600 ">Phone</div>
        <div>0141 2339468</div>
        </div></div></div>
        <div className="bg-blue-50 h-[90px] hover:bg-blue-100 rounded-md p-2">
             <div className="flex gap-4  items-center"> 
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-blue-600 text-lg "><FaWhatsapp  /></div>
    <div className="p-4">
        <div  className="text-2xl text-blue-600 ">Whatsapp No.</div>
        <div>+91 7230032601</div>
        </div></div></div>
<div className="bg-red-50 h-[110px] hover:bg-red-100 rounded-md p-2">
     <div className="flex gap-4  items-center "> 
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-red-600 text-lg"><TfiLocationPin /></div>
    <div className=" p-4">
        <div  className="text-2xl text-red-700 ">Office</div>
        <div>F-109-112, 1st Floor, Time Square, Central Spine, Vidhyadhar Nagar, Jaipur JAIPUR, Rajasthan India 302039</div>
        </div></div></div>
    </div>
    <div className="pt-4 ">
        <div className="text-xl">Follow Us On:</div>
        <div>
        <div className="text-3xl"><FaLinkedin /></div>
        <div></div>
        </div>
    </div>
    </div>


    </div>
      
    </div>
  )
}

export default Contactus;

