import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Clock, Shield, Users, AlertCircle } from 'lucide-react';
import { mockFields, mockTimeSlots } from '../data/mockData';
import { Field, TimeSlot } from '../types';
import Button from '../components/Button';
import BookingCalendar from '../components/BookingCalendar';
import { useAuth } from '../contexts/AuthContext';

const FieldDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  const [field, setField] = useState<Field | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  
  useEffect(() => {
    const foundField = mockFields.find(f => f.id === id);
    if (foundField) {
      setField(foundField);
    }
  }, [id]);
  
  const handleTimeSlotSelect = (timeSlot: TimeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };
  
  const handleBookNow = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { redirectTo: `/fields/${id}` } });
      return;
    }
    
    if (selectedTimeSlot) {
      // In a real app, this would call an API to create a booking
      setTimeout(() => {
        setIsBookingConfirmed(true);
      }, 1000);
    }
  };
  
  if (!field) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Field Not Found</h2>
          <p className="text-gray-600 mb-4">The field you're looking for doesn't exist or has been removed.</p>
          <Button variant="primary" onClick={() => navigate('/fields')}>
            View All Fields
          </Button>
        </div>
      </div>
    );
  }
  
  if (isBookingConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your booking at {field.name} on {selectedDate.toLocaleDateString()} at {selectedTimeSlot?.startTime} has been confirmed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => navigate('/dashboard')}>
              View My Bookings
            </Button>
            <Button variant="outline" onClick={() => navigate('/fields')}>
              Book Another Field
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Field Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-80">
            <img 
              src={field.imageUrl} 
              alt={field.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center shadow-md">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="font-semibold">{field.rating}</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{field.name}</h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{field.location}</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Hourly Rate</div>
                <div className="text-2xl font-bold text-green-600">${field.price}</div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">{field.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Field Size</h3>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  <span>{field.size}</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Available Hours</h3>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span>{field.availableHours.start}:00 - {field.availableHours.end}:00</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Field Type</h3>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span>Professional Grade</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {field.amenities.map((amenity, index) => (
                  <span 
                    key={index} 
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <BookingCalendar 
              timeSlots={mockTimeSlots.filter(slot => slot.fieldId === field.id)}
              onSelectTimeSlot={handleTimeSlotSelect}
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Booking Summary</h3>
              
              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Field</span>
                  <span className="font-medium">{field.name}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">
                    {selectedTimeSlot ? `${selectedTimeSlot.startTime} - ${selectedTimeSlot.endTime}` : 'Not selected'}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between mb-6">
                <span className="text-gray-800 font-medium">Total Price</span>
                <span className="text-xl font-bold text-green-600">
                  {selectedTimeSlot ? `$${field.price}` : '$0'}
                </span>
              </div>
              
              <Button 
                variant="primary" 
                fullWidth 
                onClick={handleBookNow}
                disabled={!selectedTimeSlot}
              >
                Book Now
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By booking, you agree to our terms and conditions. Cancellations made 24 hours before the booking time are eligible for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldDetailPage;