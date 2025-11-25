// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <FaGraduationCap className="w-6 h-6 text-blue-300" />
              </div> */}
              <div>
                <a href="/" className="text-2xl font-bold text-white no-underline hover:text-white">
                  Don Bosco School
                </a>
                {/* <p className="text-blue-200 text-sm">Educational Institution</p> */}
              </div>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Providing quality education and holistic development since 1950. 
              Shaping future leaders through academic excellence and moral values.
            </p>
            
            {/* <div className="flex items-center space-x-4 text-blue-200">
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4 text-blue-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 text-blue-300" />
                <span>info@donbosco.edu</span>
              </div>
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-blue-200 hover:text-white transition-colors duration-300 no-underline flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-200 hover:text-white transition-colors duration-300 no-underline flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  About
                </a>
              </li>
              <li>
                <a href="/academics" className="text-blue-200 hover:text-white transition-colors duration-300 no-underline flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  Academics
                </a>
              </li>
              <li>
                <a href="/facilities" className="text-blue-200 hover:text-white transition-colors duration-300 no-underline flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  Facilities
                </a>
              </li>
              <li>
                <a href="/events" className="text-blue-200 hover:text-white transition-colors duration-300 no-underline flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  Events
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-200 hover:text-white transition-colors duration-300 no-underline flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3 text-blue-200">
              <a href="mailto:info@donbosco.edu" className="text-white font-semibold hover:text-blue-300 transition-colors duration-300 no-underline flex items-center gap-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                info@donbosco.edu
              </a>
              <a href="tel:+15551234567" className="text-white font-semibold hover:text-blue-300 transition-colors duration-300 no-underline flex items-center gap-3">
                <FaPhone className="text-blue-400 flex-shrink-0" />
                987654321
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-300 transition-colors duration-300 no-underline flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                123 Education Street,
                Knowledge City, KC 12345
              </a>
            </div>
          </motion.div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;