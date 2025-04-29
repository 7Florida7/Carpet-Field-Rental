import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, Calendar, Award, Search } from 'lucide-react';
import { mockFields } from '../data/mockData';
import FieldCard from '../components/FieldCard';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  // Get 3 random fields for featured section
  const featuredFields = [...mockFields].sort(() => 0.5 - Math.random()).slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg" 
            alt="Football Field" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Book Your Perfect
            <span className="text-green-400"> Football Field</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Find and book football fields in your area. Professional pitches for casual games, training sessions, and tournaments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
            <Link to="/fields">
              <Button size="lg" variant="primary">
                Find Fields
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-700">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div 
            className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-green-500 shadow-lg rounded-full flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Booking a football field has never been easier. Follow these simple steps to secure your pitch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Find a Field</h3>
              <p className="text-gray-600">
                Browse available football fields in your area and find the perfect pitch for your game.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Book a Time Slot</h3>
              <p className="text-gray-600">
                Select an available time slot that works for you and your team.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Play & Enjoy</h3>
              <p className="text-gray-600">
                Show up at the field, play your game, and have a great time with your friends.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Fields Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Fields</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our top-rated football fields with excellent facilities and amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFields.map((field) => (
              <FieldCard key={field.id} field={field} featured={true} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/fields">
              <Button variant="outline">View All Fields</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose FootballPitch</h2>
            <p className="max-w-2xl mx-auto opacity-80">
              We're committed to providing the best booking experience for football enthusiasts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick & Easy Booking</h3>
              <p className="opacity-80">Book your field in minutes with our simple, intuitive booking system.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Fields</h3>
              <p className="opacity-80">We partner with top-rated facilities to ensure you get the best experience.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="opacity-80">Your transactions are protected with our secure payment gateway.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="opacity-80">Choose from a wide range of available time slots that fit your schedule.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. See what our customers have to say about their booking experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                  <span className="text-green-700 font-semibold text-lg">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Michael Johnson</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The booking process was so easy! I found a great field for our weekly game and the confirmation was instant. Will definitely use again."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                  <span className="text-green-700 font-semibold text-lg">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Williams</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a coach, I needed a reliable way to book training sessions. FootballPitch has been a game-changer for organizing our team practices."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                  <span className="text-green-700 font-semibold text-lg">D</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">David Rodriguez</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The quality of the fields listed is outstanding. The photos were accurate and the amenities were exactly as described. Great service!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Field?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Join thousands of happy customers who book football fields through our platform every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/fields">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Browse Fields
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="primary" className="bg-white text-green-600 hover:bg-gray-100">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;