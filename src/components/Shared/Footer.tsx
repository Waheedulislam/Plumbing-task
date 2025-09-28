"use client";

import { Instagram } from "lucide-react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 sm:px-6 lg:px-20 py-10 border-t">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8 text-sm text-gray-700">
        <div className="space-y-4">
          <h2 className="text-4xl md font-bold">Business Logo</h2>

          <div className="flex space-x-5 mt-5">
            <FaFacebook className="h-6 w-6 cursor-pointer text-black hover:text-[#1877F2] transition-colors duration-200" />
            <FaLinkedinIn className="h-6 w-6 cursor-pointer text-black hover:text-[#0A66C2] transition-colors duration-200" />
            <FaTwitter className="h-6 w-6 cursor-pointer text-black hover:text-[#1DA1F2] transition-colors duration-200" />
            <Instagram className="h-6 w-6 cursor-pointer text-black hover:text-[#E4405F] transition-colors duration-200" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li>Plumbing</li>
            <li>Drainage</li>
            <li>Bathrooms</li>
            <li>Commercial</li>
          </ul>
        </div>
        {/* Middle Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Updates</li>
              <li>About Us</li>
              <li>Rates</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2">
              <li>Updates</li>
              <li>Locations</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Contact Us</h3>

          <div className="flex items-center space-x-2">
            <CiLocationOn className="text-black w-5 h-5" />
            <p className="font-semibold">1 Sail Street, London, SE11 6NQ</p>
          </div>

          <div className="flex items-center space-x-2">
            <MdOutlineEmail className="text-black w-5 h-5" />
            <p className="font-semibold">enquiries@PlumbingPros.com</p>
          </div>

          <div className="flex items-center space-x-2">
            <FiPhoneCall className="text-black w-5 h-5" />
            <p className="font-semibold">020 4527 6474</p>
          </div>
        </div>
      </div>

      <div className="md:flex max-w-7xl  text-center mx-auto justify-between items-center mt-6 text-xs">
        <p className="text-gray-400">© Plumbing Pros. All Rights Reserved</p>
        <p className="text-gray-400 md:-mr-15 lg:-mr-32 px-14">
          Website by IH Adventure And Creative
        </p>
      </div>
    </footer>
  );
}
