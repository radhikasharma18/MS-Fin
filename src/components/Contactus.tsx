import React from 'react'

const Contactus = () => {
  return (
    <div className='[100wh] '>
        <div className="text-5xl font-serif text-center">
  <span className="relative inline-block">
    <span className="text-red-600">Get in </span>
    <span className="text-blue-900">Touch</span>
    <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-600 to-blue-900 rounded-full"></span>
  </span>
</div>

<div className='flex p-8 w-[100%] gap-4'>
         <div className="w-[50%]">
      

      <p className="mb-6">We’d love to hear from you. Visit us at our office:</p>

      <div className="w-[100%] h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="MSFIN Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2123.5054363136182!2d75.7758487512818!3d26.960615135077184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b488a5c3d1%3A0xd5ba54a1d251271f!2sTime%20square%2C%20Sector%202%2C%20Central%20Spine%2C%20Vidyadhar%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302039!5e0!3m2!1sen!2sin!4v1762072246707!5m2!1sen!2sin" 
          width="100%" 
          height="100%"
          loading="lazy"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div >
    <div className='w-[50%]'>hiiii</div>
    </div>
      
    </div>
  )
}

export default Contactus;

