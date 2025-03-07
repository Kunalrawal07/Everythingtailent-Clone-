// components/Footer.tsx

import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white ">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section (Logo and Description) */}
        <div className="md:col-span-1 ml-30 ">
          <Image src="/Assets/footer-logo.webp" alt="Everything Talent Logo" width={180} height={135} className="mb-4" /> {/* Replace with your logo */}
          <h1 className='font-bold text-4xl'>Everything Talent</h1>
          <p className="text-sm">Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
            <FaLinkedin size={30} />
            </a>
            <a href="#" className="hover:text-gray-300">
            <FaYoutube size={30} />
            </a>
            <a href="#" className="hover:text-gray-300">
            <FaTwitter size={30} />
            </a>
            <a href="#" className="hover:text-gray-300">
            <FaFacebook size={30} />
            </a>
          </div>
        </div>

        {/* Right Section (Links Columns) */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resources Column */}
          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-300 text-sm">Blogs</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Success Stories</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Whitepapers</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Hiring Guides</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Support</a></li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h3 className="font-semibold mb-4">GET STARTED</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-300 text-sm">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Hiring Solutions</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Funded Startups</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Free Trial</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Contact Support</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Request Demo</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Trust</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold mb-4 mr-20">LEGAL</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-300 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 text-sm">CCPA Compliance</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section (Background Image and Copyright) */}
      <div className="relative opacity-50  ">
        <Image
          src="/Assets/footer-img.webp" // Replace with your footer background image
          alt="Footer Background"
          layout="responsive"
          width={1920} // Adjust as needed
          height={-150} // Adjust as needed
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-2">EVERYTHINGTALENT.AI</h2>
        </div>
      </div>
      <p className='flex justify-center pb-2 '>© 2025 Everything Talent Labs, LLC. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;