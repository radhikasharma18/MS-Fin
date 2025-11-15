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

  const rounded1 = useTransform(count1, (latest) => latest.toFixed(0));
  const rounded2 = useTransform(count2, (latest) => latest.toFixed(0));

  useEffect(() => {
    // First counter: 0 → 70000
    const unsubscribeDisplay = rounded1.onChange((v) => setDisplayCount(Number(v)));
    const controls1 = animate(count1, 70000, {
      duration: 1,
      ease: "easeOut",
    });

    // Second counter: 0 → 400
    const unsubscribeCustomer = rounded2.onChange((v) => setCustomerCount(Number(v)));
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
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 bg-linear-to-br from-white via-gray-50 to-blue-50/30 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-linear-to-br from-red-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                Trusted Financial Partner Since 1990
              </motion.div> */}

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
              >
                Your Financial{" "}
                <span className="bg-linear-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Confidence 
                </span>{" "}
                Partner
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light"
              >
                Empowering businesses and individuals with flexible, secure, and
                reliable financial solutions tailored to your needs.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <button className="px-8 py-4 bg-linear-to-r from-blue-700 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg">
                  Apply for Loan
                </button>
                <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 text-lg">
                  Learn More
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">NBFC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Secure & Reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Quick Approval</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Stats Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <p className="text-sm text-gray-500 font-medium mb-3 tracking-wide uppercase">
                    Satisfied Users Globally
                  </p>
                  <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-2">
                    {displayCount}k+
                  </div>
                  <p className="text-sm text-gray-600">Trusted by thousands worldwide</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <p className="text-sm text-gray-500 font-medium mb-3 tracking-wide uppercase">
                    Live Loans
                  </p>
                  <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                    {customerCount}+
                  </div>
                  <p className="text-sm text-gray-600">Active loan portfolios</p>
                </motion.div>
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-linear-to-br from-red-50 to-blue-50 rounded-2xl p-8 border border-red-100/50"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Choose MS Fin Creditors?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>30+ years of financial expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Customized loan solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fast and transparent process</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
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
      <section className="relative bg-white px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-red-50/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-blue-50/50 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-100">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Three Decades of{" "}
              <span className="bg-linear-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Financial Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building trust and empowering growth through innovative financial solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Left Content - Company Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Journey
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Established in 1990 as Arpit Credits Private Limited, we began our journey with a vision to provide accessible financial solutions. Over the years, we've evolved into <span className="font-semibold text-gray-900">MSFIN Credit Private Limited</span>, a trusted Non-Banking Financial Institution (NBFC) serving thousands of customers across India.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  From our initial focus on unsecured lending, we've strategically expanded to offer comprehensive secured lending solutions, including commercial vehicle loans, two-wheeler financing, and loan against property, always maintaining our commitment to transparency and customer satisfaction.
                </p>
              </div>

              {/* Key Milestones */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Founded in 1990</h4>
                    <p className="text-sm text-gray-600">Started as Arpit Credits Private Limited</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">NBFC Certified</h4>
                    <p className="text-sm text-gray-600">Authorized Non-Banking Financial Institution</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Rebranded in 2018</h4>
                    <p className="text-sm text-gray-600">Evolved to MSFIN Credit Private Limited</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Content - Loan Products */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-linear-to-br from-red-50 via-blue-50 to-white rounded-3xl p-8 border border-red-100/50 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Loan Products
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-900 font-bold text-lg">Micro Loan</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-900 font-bold text-lg">Personal Loan</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <p className="text-gray-900 font-bold text-lg">Vehicle Loan</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <p className="text-gray-900 font-bold text-lg">Mortgage Loan</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100 sm:col-span-2"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-gray-900 font-bold text-lg">Two Wheeler Loan</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-28 relative overflow-hidden">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 opacity-60"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    
    {/* Heading */}
    <div className="text-center mb-20">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
        Our <span className="text-red-600">Services</span>
      </h1>
      <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
        Fast, transparent, and flexible financial solutions designed for people and businesses.
      </p>
    </div>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Personal Loans",
          desc: "Quick approvals, flexible EMIs, and zero hidden charges.",
          icon: "💰"
        },
        {
          title: "Vehicle Loans",
          desc: "Finance new or pre-owned vehicles with easy EMIs.",
          icon: "🚗"
        },
        {
          title: "MSME Loans",
          desc: "Fuel business growth with flexible capital solutions.",
          icon: "📈"
        },
        {
          title: "MSME Loans",
          desc: "Fuel business growth with flexible capital solutions.",
          icon: "📈"
        },
        {
          title: "MSME Loans",
          desc: "Fuel business growth with flexible capital solutions.",
          icon: "📈"
        },
        {
          title: "MSME Loans",
          desc: "Fuel business growth with flexible capital solutions.",
          icon: "📈"
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className="group bg-white shadow-xl rounded-3xl border border-gray-200 p-10 
                    hover:shadow-3xl hover:-translate-y-3 transition-all duration-300"
        >
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
 
  </div>
</section>
     
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
