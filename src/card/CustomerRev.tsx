import React from "react";
import { motion } from "framer-motion";

interface CustomerRevProps {
  star: string;
  name: string;
  description: string;
  designation: string;
  image?: string;
}

const CustomerRev: React.FC<CustomerRevProps> = ({
  star,
  name,
  description,
  designation,
  image,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}   
      whileInView={{ opacity: 1, y: 0 }}           
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="break-inside-avoid bg-white rounded-3xl p-8 mb-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group"
    >
      <div className="text-yellow-400 text-xl mb-4 tracking-wider">{star}</div>
      <p className="text-gray-700 text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        {image && (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100" 
          />
        )}
        <div>
          <p className="font-bold text-gray-900 text-sm">{name}</p>
          <p className="text-xs text-gray-500 mt-1">{designation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerRev;
