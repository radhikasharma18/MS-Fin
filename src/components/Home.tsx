import Card from "../card/Card";
import { SiTransmission } from "react-icons/si";
import { IoLogoXing } from "react-icons/io";
import Services from "./Services";
import CustomerRev from "../card/CustomerRev";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";




const testimonials = [
  {
    star: "★★★★★",
    name: "David Ali",
    description:
      "Sleekix has been an amazing investment partner for me. Their services are easy to use and accessible from any device.Sleekix has been an amazing investment partner for me. Their services are easy to use and accessible from aSleekix has been an amazing investment partner for me. Their services are easy to use and accessible from any device.ny device.",
    designation: "Investor",
  },
  {
    star: "★★★★★",
    name: "Jack Frost",
    description:
      "The platform has been a game-changer for our business growth.",
    designation: "Manager",
  },
  {
    star: "★★★★★",
    name: "Olivia Wattson",
    description:
      "Switching to Sleekix was one of our best decisions. Amazing support!",
    designation: "Operations Head",
  },  {
    star: "★★★★★",
    name: "David Ali",
    description:
      "Their services are easy to use and accessible from any device.",
    designation: "Investor",
  },
  {
    star: "★★★",
    name: "Jack Frost",
    description:
      "The platform has been a game-changer..",
    designation: "Manager",
  },
  {
    star: "★★★★★",
    name: "Olivia Wattson",
    description:
      "Switching to Sleekix was one of our best decisionsSwitching to Sleekix was one of our best decisions. Amazing support!. Amazing support!Switching to Sleekix was one of our best decisions. Amazing support!",
    designation: "Operations Head",
  },
    {
    star: "★★★★★",
    name: "Jack Frost",
    description:
      "The platform has been a game-changer..",
    designation: "Manager",
  },
  {
    star: "★★★★★",
    name: "Olivia Wattson",
    description:
      "Switching to Sleekix was one of our best decisionsSwitching to Sleekix was one of our best decisions. Amazing support!. Amazing support!Switching to Sleekix was one of our best decisions. Amazing support!",
    designation: "Operations Head",
  },
    {
    star: "★★★★",
    name: "Olivia Wattson",
    description:
      "Switching to Sleekix was one of our best decisionsSwitching to Sleekix was one of our best decisions. Amazing support!. Amazing support!Switching to Sleekix was one of our best decisions. Amazing support!",
    designation: "Operations Head",
  }
  ];


const Home = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);

  const rounded1 = useTransform(count1, (latest) => Math.round(latest));
  const rounded2 = useTransform(count2, (latest) => Math.round(latest));

  useEffect(() => {
    // First counter: 0 → 70000
    const unsubscribeDisplay = rounded1.onChange((v: number) => setDisplayCount(v));
    const controls1 = animate(count1, 70000, {
      duration: 1,
      ease: "easeOut",
    });

    // Second counter: 0 → 400
    const unsubscribeCustomer = rounded2.onChange((v: number) => setCustomerCount(v));
    const controls2 = animate(count2, 400, {
      duration: 2,
      ease: "easeOut",
    });

    // Cleanup
    return () => {
      unsubscribeDisplay();
      unsubscribeCustomer();
      controls1.stop();
      controls2.stop();
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl w-full">
          <div className="flex items-center justify-center gap-4 mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}   
              whileInView={{ opacity: 1, scale: 1 }}           
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }} 
              className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl rotate-12 shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}   
              whileInView={{ opacity: 1, y: 0 }}           
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide mb-2">
                Welcome to
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                MS Fin Creditors
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-4 font-light">
                Build your business with confidence
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}   
              whileInView={{ opacity: 1, scale: 1 }}           
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }} 
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl -rotate-12 shadow-lg"
            />
          </div>
        
          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-16 md:gap-32 mt-20"
          >
            <div className="text-center">
              <p className="text-sm md:text-base text-gray-500 font-medium mb-3 tracking-wide uppercase">
                Satisfied Users Globally
              </p>
              <motion.div className="text-5xl md:text-6xl font-bold text-gray-900">
                {displayCount}k+
              </motion.div>
            </div>
            
            <div className="hidden md:block w-px h-20 bg-gray-200" />
            
            <div className="text-center">
              <p className="text-sm md:text-base text-gray-500 font-medium mb-3 tracking-wide uppercase">
                Live Loans
              </p>
              <motion.div className="text-5xl md:text-6xl font-bold text-gray-900">
                {customerCount}+
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-medium tracking-wide mb-6">
                How it works
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Super convenient online banking
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Our online banking platform is protected with the latest encryption
              technology and multi-factor authentication.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                icon={<IoLogoXing />}
                title="Mission Statement"
                description="Our mission is to provide compatible and trusted financial assistance to a huge untapped market of people living or working in the rural areas to catalyze economic development by identification of commercially viable individuals/businesses and rendering of funds to them through a professional."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                icon={<SiTransmission />}
                title="Vision Statement"
                description="Our vision is to make a professionally managed, dynamic, vibrant and value based organization that stands as the most preferred financier, provides customized and speedy financial solutions to rural, along with the 'upcoming urban areas' with confidence to secure customer trust and satisfaction."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card
                icon={<SiTransmission />}
                title="Core Values"
                description="Client Focused: Providing a high quality, timely and effective service with fair dealings is a priority for our organization in order to provide the utmost level of Customer satisfaction"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="min-h-screen bg-gray-50 px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-red-600 font-bold text-xl mb-6 tracking-wide uppercase">
                We Are MS Financers
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Company was originally incorporated with the name Arpit Credits
                Private Limited under the Companies Act, 1956 as private limited
                company on 26th of December, 1990. The company has been granted a
                certificate to carry on the business of Non-Banking Financial
                Institution without accepting public deposits. The company, in the
                light of its main object, pursued the business of finance by
                offering unsecured lending such as personal loans and micro loans.
                The company has been changed from Arpit Credits Private Limited to
                MSFIN Credit Private Limited with effect from 13th of July, 2018.
                The company has shifted its focus to secured lending by adding
                products like commercial vehicle lending, 2-wheelers lending and
                Loan against property.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-3xl p-12 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-900 font-semibold text-lg">Micro Loan</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-900 font-semibold text-lg">Personal Loan</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-900 font-semibold text-lg">Vehicle Loan</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-900 font-semibold text-lg">Mortgage Loan</p>
                  </div>
                  <div className="col-span-2 bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-900 font-semibold text-lg">Two Wheeler Loan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Services />
      {/* <Catcard /> */}
     
      {/* Testimonials Section */}
      <section className="bg-white px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}   
              whileInView={{ opacity: 1, y: 0 }}           
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              5000+ Happy Customers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}   
              whileInView={{ opacity: 1, y: 0 }}           
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600"
            >
              Hear What Our Customers Say About Us
            </motion.p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {testimonials.map((item, index) => (
              <CustomerRev
                key={index}
                star={item.star}
                name={item.name}
                description={item.description}
                designation={item.designation}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
