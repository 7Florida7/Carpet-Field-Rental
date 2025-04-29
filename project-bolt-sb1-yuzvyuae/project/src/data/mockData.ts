import { Field, TimeSlot, Booking } from '../types';

export const mockFields: Field[] = [
  {
    id: '1',
    name: 'Green Park Football Field',
    location: 'Central Park, Downtown',
    description: 'Professional 11-a-side football pitch with premium artificial turf and floodlights for evening games.',
    price: 120,
    imageUrl: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
    size: '11-a-side',
    type: 'football',
    amenities: ['Changing Rooms', 'Showers', 'Floodlights', 'Parking'],
    rating: 4.8,
    availableHours: {
      start: 8,
      end: 22
    }
  },
  {
    id: '2',
    name: 'Urban Soccer Center',
    location: 'Sports Complex, East District',
    description: 'Modern 5-a-side football field with high-quality synthetic grass, perfect for quick games with friends.',
    price: 80,
    imageUrl: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg',
    size: '5-a-side',
    type: 'football',
    amenities: ['Ball Rental', 'Water Dispensers', 'Floodlights', 'Cafe'],
    rating: 4.5,
    availableHours: {
      start: 9,
      end: 23
    }
  },
  {
    id: '3',
    name: 'Victory Basketball Court',
    location: 'North Sports Village',
    description: 'Premium indoor basketball court with professional flooring and equipment.',
    price: 90,
    imageUrl: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg',
    size: 'Full Court',
    type: 'basketball',
    amenities: ['Indoor', 'Scoreboard', 'Spectator Seating', 'Equipment Rental'],
    rating: 4.9,
    availableHours: {
      start: 10,
      end: 20
    }
  },
  {
    id: '4',
    name: 'Ace Tennis Court',
    location: 'Community Center, West Side',
    description: 'Professional tennis court with high-quality surface and equipment rental.',
    price: 60,
    imageUrl: 'https://images.pexels.com/photos/2962696/pexels-photo-2962696.jpeg',
    size: 'Standard',
    type: 'tennis',
    amenities: ['Equipment Rental', 'Lighting', 'Pro Coaching'],
    rating: 4.2,
    availableHours: {
      start: 8,
      end: 21
    }
  },
  {
    id: '5',
    name: 'Elite Volleyball Court',
    location: 'South Beach',
    description: 'Beach volleyball court with professional-grade sand and equipment.',
    price: 70,
    imageUrl: 'https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg',
    size: 'Standard',
    type: 'volleyball',
    amenities: ['Beach Sand', 'Net System', 'Night Lighting', 'Equipment'],
    rating: 4.7,
    availableHours: {
      start: 7,
      end: 22
    }
  },
  {
    id: '6',
    name: 'Riverside Football Complex',
    location: 'Riverside Park',
    description: 'Beautiful outdoor football pitches with scenic river views, perfect for weekend games.',
    price: 90,
    imageUrl: 'https://images.pexels.com/photos/3459979/pexels-photo-3459979.jpeg',
    size: '7-a-side',
    type: 'football',
    amenities: ['Natural Scenery', 'BBQ Areas', 'Family Friendly', 'Parking'],
    rating: 4.4,
    availableHours: {
      start: 9,
      end: 19
    }
  }
];

// Generate some mock time slots for each field
export const generateMockTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const today = new Date();
  
  mockFields.forEach(field => {
    // Generate slots for the next 7 days
    for (let day = 0; day < 7; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() + day);
      const dateString = date.toISOString().split('T')[0];
      
      // Generate hourly slots based on field's available hours
      for (let hour = field.availableHours.start; hour < field.availableHours.end; hour++) {
        slots.push({
          id: `${field.id}-${dateString}-${hour}`,
          fieldId: field.id,
          date: dateString,
          startTime: `${hour}:00`,
          endTime: `${hour + 1}:00`,
          isBooked: Math.random() > 0.7 // Randomly mark some slots as booked
        });
      }
    }
  });
  
  return slots;
};

export const mockTimeSlots = generateMockTimeSlots();

export const mockBookings: Booking[] = [
  {
    id: '1',
    userId: '1',
    fieldId: '1',
    date: new Date().toISOString().split('T')[0],
    startTime: '18:00',
    endTime: '19:00',
    totalPrice: 120,
    status: 'confirmed',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    userId: '1',
    fieldId: '3',
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    startTime: '15:00',
    endTime: '17:00',
    totalPrice: 300,
    status: 'confirmed',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  }
];