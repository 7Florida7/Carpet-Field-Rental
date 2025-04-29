import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { mockBookings, mockFields } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Authentication Required</h2>
          <p className="text-gray-600 mb-4">Please log in to access your dashboard.</p>
          <Link to="/login">
            <Button variant="primary">Login</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Get user's bookings
  const userBookings = mockBookings.filter(booking => booking.userId === user.id);
  
  const getFieldName = (fieldId: string) => {
    const field = mockFields.find(f => f.id === fieldId);
    return field ? field.name : 'Unknown Field';
  };
  
  // Group bookings by status
  const upcomingBookings = userBookings.filter(booking => booking.status === 'confirmed' && new Date(booking.date) >= new Date());
  const pastBookings = userBookings.filter(booking => booking.status === 'confirmed' && new Date(booking.date) < new Date());
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.firstName}!</p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Bookings</p>
                <p className="text-xl font-semibold">{userBookings.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Upcoming</p>
                <p className="text-xl font-semibold">{upcomingBookings.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-xl font-semibold">{pastBookings.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <XCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Cancelled</p>
                <p className="text-xl font-semibold">0</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming Bookings */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Upcoming Bookings</h2>
            <Link to="/bookings" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="p-6">
            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.map(booking => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{getFieldName(booking.fieldId)}</h3>
                        <div className="flex items-center mt-1 text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-3">{new Date(booking.date).toLocaleDateString()}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{booking.startTime} - {booking.endTime}</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                          Confirmed
                        </span>
                        <Link to={`/bookings/${booking.id}`}>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-4">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">No upcoming bookings</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-4">
                  You don't have any upcoming bookings. Browse our fields and book your next game!
                </p>
                <Link to="/fields">
                  <Button variant="primary">Find Fields</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Recent Activity / Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
            </div>
            
            <div className="p-6">
              {userBookings.length > 0 ? (
                <div className="space-y-4">
                  {userBookings.slice(0, 3).map(booking => (
                    <div key={booking.id} className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-800">
                          <span className="font-medium">Booking Confirmed</span> - {getFieldName(booking.fieldId)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(booking.createdAt).toLocaleDateString()} at {new Date(booking.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center py-4">No recent activity</p>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-3">
                <Link to="/fields">
                  <Button variant="primary" fullWidth>
                    Book a Field
                  </Button>
                </Link>
                <Link to="/bookings">
                  <Button variant="outline" fullWidth>
                    View My Bookings
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outline" fullWidth>
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;