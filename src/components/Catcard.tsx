import { motion } from "framer-motion";

const Catcard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}   
      whileInView={{ opacity: 1, y: 0 }}           
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} 
      className='w-full px-6 md:px-12 lg:px-24 py-12'
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:from-blue-500 hover:via-purple-500 hover:to-red-500 transition-all duration-700 shadow-lg hover:shadow-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Personal Loan
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Flexible repayment, minimal documentation
                </p>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Catcard