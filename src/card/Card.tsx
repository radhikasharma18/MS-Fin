import React from "react";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group">
      <div className="flex justify-center items-center mb-6">
        <div className="text-blue-600 text-5xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-md leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
