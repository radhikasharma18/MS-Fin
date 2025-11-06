import React from 'react'

interface ServicesCradProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const ServicesCrad: React.FC<ServicesCradProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group max-w-sm">
      <div className="flex justify-center items-center mb-6">
        <div className="text-blue-400 text-6xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default ServicesCrad;


