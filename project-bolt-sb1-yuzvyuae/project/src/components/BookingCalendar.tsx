import React, { useState } from 'react';
import { format, addDays, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TimeSlot } from '../types';

interface BookingCalendarProps {
  timeSlots: TimeSlot[];
  onSelectTimeSlot: (timeSlot: TimeSlot) => void;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  timeSlots,
  onSelectTimeSlot,
  selectedDate,
  onDateChange
}) => {
  const [startDate, setStartDate] = useState(new Date());

  const handlePrevWeek = () => {
    setStartDate(prevDate => addDays(prevDate, -7));
  };

  const handleNextWeek = () => {
    setStartDate(prevDate => addDays(prevDate, 7));
  };

  const handleDateSelect = (date: Date) => {
    onDateChange(date);
  };

  // Generate 7 days from start date
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  // Filter time slots for selected date
  const selectedDateString = format(selectedDate, 'yyyy-MM-dd');
  const slotsForSelectedDate = timeSlots.filter(slot => slot.date === selectedDateString);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Date selector */}
      <div className="bg-green-700 p-4 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Select Date & Time</h3>
          <div className="flex space-x-2">
            <button 
              onClick={handlePrevWeek}
              className="p-1 rounded-full hover:bg-green-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNextWeek}
              className="p-1 rounded-full hover:bg-green-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const isSelected = isSameDay(day, selectedDate);
            const isToday = isSameDay(day, new Date());
            
            return (
              <button
                key={index}
                onClick={() => handleDateSelect(day)}
                className={`
                  flex flex-col items-center p-2 rounded-md transition-colors
                  ${isSelected 
                    ? 'bg-white text-green-700' 
                    : 'hover:bg-green-600'
                  }
                  ${isToday && !isSelected ? 'border border-white' : ''}
                `}
              >
                <span className="text-xs">{format(day, 'E')}</span>
                <span className="text-lg font-semibold">{format(day, 'd')}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Time slots */}
      <div className="p-4">
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Available Time Slots for {format(selectedDate, 'EEEE, MMMM d, yyyy')}
        </h4>
        
        {slotsForSelectedDate.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {slotsForSelectedDate.map((slot) => (
              <button
                key={slot.id}
                onClick={() => onSelectTimeSlot(slot)}
                disabled={slot.isBooked}
                className={`
                  py-2 px-3 text-sm rounded-md transition-colors
                  ${slot.isBooked 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                  }
                `}
              >
                {slot.startTime}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-6">No available time slots for this date.</p>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;