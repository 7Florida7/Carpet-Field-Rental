import React from 'react';
import { Link } from 'react-router-dom';
import { FolderRoot as Football, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Football className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold text-white">FootballPitch</span>
            </div>
            <p className="text-sm text-gray-400">
              Book your perfect football field with ease. Professional fields for casual games, training sessions, and tournaments.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fields" className="text-gray-400 hover:text-green-400 transition-colors">Find Fields</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-green-400 transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-green-400 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-green-400 transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-green-400 transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/legal-notices" className="text-gray-400 hover:text-green-400 transition-colors">Legal Notices</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Sports Avenue, Football City</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@footballpitch.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} FootballPitch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;