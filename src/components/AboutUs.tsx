import photo from "../assets/download.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="py-20 px-8 md:px-16 bg-gray-50">
    
      <motion.div
       initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
       className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-linaer-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
          About Us
        </h2>
      </motion.div>

      <motion.div 
       initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={photo}
            alt="About"
            className="rounded-2xl shadow-lg w-full md:w-3/5 h-120 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h3 className="text-4xl md:text-5xl font-semibold leading-snug text-gray-800">
            We provide loan for any purpose
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Esteem spirit temper too say adieus who direct esteem. It esteems
            luckily or picture placing drawing. Apartments frequently or
            motionless on reasonable.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
            <li>Loans with quick approval</li>
            <li>Customize a loan based on the amount</li>
            <li>Good credit profile and you have built your loan</li>
            <li>We provide online instant cash loans</li>
          </ul>

          <button className="bg-linear-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all w-fit">
            Apply For Loan
          </button>
        </div>
      </motion.div>


      <div>
        <motion.h2 
         initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2}}
            viewport={{ once: true }}className="text-5xl font-semibold text-center mb-12">
          <span className="bg-linear-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            Our Team
          </span>
        </motion.h2>

        <motion.div 
        initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2}}
            viewport={{ once: false}}
            className="flex flex-col gap-16 ">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`w-full md:w-1/3 rounded-2xl overflow-hidden shadow-md flex justify-center ${
                  i % 2 === 0 ? "bg-blue-100" : "bg-red-100"
                }`}
              >
                <img
                  src={photo}
                  alt="Team Member"
                  className="w-2/3 h-2/3 object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
              </div>

              <div
                className={`w-full md:w-2/3 rounded-2xl shadow-md p-6 md:p-8 text-gray-700 leading-relaxed ${
                  i % 2 === 0 ? "bg-red-100" : "bg-blue-100"
                }`}
              >
                <h4 className="text-2xl font-semibold mb-4 text-gray-800">
                  Name Name
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  magni, quaerat illo veniam totam esse obcaecati reiciendis
                  impedit dolor aut nihil, perferendis delectus modi unde quo
                  quasi quisquam non reprehenderit. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Omnis magni, quaerat illo veniam
                  totam esse obcaecati reiciendis impedit dolor aut nihil,
                  perferendis delectus modi unde quo quasi quisquam non
                  reprehenderit.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
};

export default AboutUs;
