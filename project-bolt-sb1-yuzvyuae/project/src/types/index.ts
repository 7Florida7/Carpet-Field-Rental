export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Field {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  imageUrl: string;
  size: string;
  type: string;
  amenities: string[];
  rating: number;
  availableHours: {
    start: number;
    end: number;
  };
}

export interface TimeSlot {
  id: string;
  fieldId: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  fieldId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}