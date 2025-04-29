import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, FolderRoot as Football } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Football className={`w-8 h-8 ${isScrolled || !isHomePage ? 'text-green-700' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled || !isHomePage ? 'text-green-700' : 'text-white'} transition-colors`}>FootballPitch</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/fields" className={`font-medium ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-300'} transition-colors`}>Find Fields</Link>
            <Link to="/how-it-works" className={`font-medium ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-300'} transition-colors`}>How It Works</Link>
            
            {user ? (
              <div className="relative group">
                <button className={`flex items-center space-x-2 font-medium ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'}`}>
                  <span>{user.firstName}</span>
                  <User className="w-5 h-5" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">My Dashboard</Link>
                  <Link to="/bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">My Bookings</Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Profile Settings</Link>
                  <button 
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className={`font-medium ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-300'} transition-colors`}>Login</Link>
                <Link to="/register" className="px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition-colors">Register</Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3">
              <Link to="/fields" className="py-2 text-gray-700 hover:text-green-600">Find Fields</Link>
              <Link to="/how-it-works" className="py-2 text-gray-700 hover:text-green-600">How It Works</Link>
              
              {user ? (
                <>
                  <Link to="/dashboard" className="py-2 text-gray-700 hover:text-green-600">My Dashboard</Link>
                  <Link to="/bookings" className="py-2 text-gray-700 hover:text-green-600">My Bookings</Link>
                  <Link to="/profile" className="py-2 text-gray-700 hover:text-green-600">Profile Settings</Link>
                  <button 
                    onClick={logout}
                    className="py-2 text-left text-red-600 hover:text-red-700 flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="py-2 text-gray-700 hover:text-green-600">Login</Link>
                  <Link to="/register" className="py-2 text-gray-700 hover:text-green-600 font-medium">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;