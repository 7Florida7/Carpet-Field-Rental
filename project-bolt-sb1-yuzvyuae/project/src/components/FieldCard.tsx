import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock } from 'lucide-react';
import { Field } from '../types';
import Button from './Button';

interface FieldCardProps {
  field: Field;
  featured?: boolean;
}

const FieldCard: React.FC<FieldCardProps> = ({ field, featured = false }) => {
  return (
    <div 
      className={`
        overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl
        ${featured ? 'border-2 border-green-500' : ''}
      `}
    >
      <div className="relative">
        {featured && (
          <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-semibold z-10">
            Featured
          </div>
        )}
        <img 
          src={field.imageUrl} 
          alt={field.name} 
          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{field.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{field.rating}</span>
          </div>
        </div>
        
        <div className="mt-2 flex items-start">
          <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <p className="ml-1 text-sm text-gray-600">{field.location}</p>
        </div>
        
        <div className="mt-1 flex items-start">
          <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <p className="ml-1 text-sm text-gray-600">
            Available {field.availableHours.start}:00 - {field.availableHours.end}:00
          </p>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex flex-wrap gap-2">
            {field.amenities.slice(0, 3).map((amenity, index) => (
              <span 
                key={index} 
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
            {field.amenities.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                +{field.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-green-700 font-semibold">${field.price}/hr</p>
          <Link to={`/fields/${field.id}`}>
            <Button variant="primary" size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FieldCard;