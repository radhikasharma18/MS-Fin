import ServicesCrad from "../card/ServicesCrad"
import { CiBank } from "react-icons/ci";
import { motion } from "framer-motion";
import { IoCarOutline } from "react-icons/io5";
import { PiMotorcycleLight } from "react-icons/pi";
import services from '../assets/istockphoto-1393059175-612x612.jpg';
import Catcard from "./Catcard";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a1f3a] to-[#222a52] w-full py-24 px-6 md:px-12 lg:px-24">
      {/* Services Overview Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed space-y-4"
            >
              <p className="text-base">
                At our NBFC, we understand that financial needs are diverse, time-sensitive, and deeply personal. Whether you are planning a major life event, looking to expand your business, or purchasing a vehicle, access to the right credit at the right time can make all the difference. Our goal is to simplify the borrowing process and make finance accessible, transparent, and stress-free for individuals and businesses alike.
              </p>
              <p className="text-base">
                We offer a comprehensive range of loan products — Personal Loans, Vehicle Loans, and MSME Loans — each designed with flexibility, convenience, and speed in mind. Our streamlined digital process ensures minimal paperwork, quick approval, and instant disbursal, allowing you to focus on your goals rather than the process.
              </p>
              <p className="text-base">
                Personal Loans are ideal for managing urgent or planned financial needs such as home renovations, education, medical expenses, travel, or weddings. We provide competitive interest rates, customizable repayment tenures, and zero hidden charges.
              </p>
              <p className="text-base">
                Vehicle Loans empower you to drive your dream car or two-wheeler without financial strain. Whether you're buying a new vehicle or a pre-owned one, our loans come with attractive interest rates, fast approvals, and flexible EMIs.
              </p>
              <p className="text-base">
                For entrepreneurs, our MSME Loans are crafted to fuel growth and stability. We understand the unique challenges faced by small and medium-sized businesses — from managing working capital to purchasing machinery or expanding operations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={services} 
                  alt="Financial Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Loan Products Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}   
          whileInView={{ opacity: 1, y: 0 }}           
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}  
          className="text-white text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Loan Products
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}       
            whileInView={{ opacity: 1, y: 0 }}           
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          > 
            <ServicesCrad 
              icon={<CiBank />}
              title="Micro Loans" 
              description="These loans are aimed at the weaker sections of the society who do not have the means or the required paperwork to obtain funds from Banks or other financial institutions, to meet their credit requirements"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServicesCrad 
              icon={<CiBank />}
              title="Personal Loans" 
              description="A Personal Loan is a viable way to fund anything from a holiday abroad to your child's education and a home renovation to a wedding in the family"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}       
            whileInView={{ opacity: 1, y: 0 }}           
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServicesCrad 
              icon={<IoCarOutline />}
              title="Used Vehicle Loans" 
              description="Used cars, second-hand cars or pre-owned cars have become popular amongst consumers nowadays. This is mainly due to the establishment of several organised used car dealerships across the country."
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}       
            whileInView={{ opacity: 1, y: 0 }}           
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ServicesCrad 
              icon={<CiBank />}
              title="Mortgage Loans" 
              description="Preapproval by a mortgage lender will give you a range of what a bank is willing to lend you, while also showing the home's current owner that you have the backing of a financial institution."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}   
            whileInView={{ opacity: 1, y: 0 }}           
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ServicesCrad 
              icon={<PiMotorcycleLight />}
              title="Two Wheeler Loans" 
              description="These loans are given against two wheelers (i.e., Motorcycles, Scooters). The ticket size varies as per the cost of the vehicle for a maximum tenure of 28 months."
            />
          </motion.div>
        </div>
      </section>
      
      <Catcard />
    </div>
  )
}

export default Services
