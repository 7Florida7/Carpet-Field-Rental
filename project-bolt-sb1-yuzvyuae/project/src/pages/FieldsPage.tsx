import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { mockFields } from '../data/mockData';
import { Field } from '../types';
import FieldCard from '../components/FieldCard';
import Button from '../components/Button';

const FieldsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFields, setFilteredFields] = useState<Field[]>(mockFields);
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [sizeFilter, setSizeFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const fieldTypes = [
    { value: 'football', label: 'Football Field' },
    { value: 'basketball', label: 'Basketball Court' },
    { value: 'volleyball', label: 'Volleyball Court' },
    { value: 'tennis', label: 'Tennis Court' }
  ];
  
  useEffect(() => {
    let results = mockFields;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(field => 
        field.name.toLowerCase().includes(term) || 
        field.location.toLowerCase().includes(term)
      );
    }
    
    // Filter by price
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      results = results.filter(field => {
        if (max) {
          return field.price >= min && field.price <= max;
        }
        return field.price >= min;
      });
    }
    
    // Filter by size
    if (sizeFilter !== 'all') {
      results = results.filter(field => field.size === sizeFilter);
    }

    // Filter by field type
    if (typeFilter !== 'all') {
      results = results.filter(field => field.type === typeFilter);
    }
    
    setFilteredFields(results);
  }, [searchTerm, priceFilter, sizeFilter, typeFilter]);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Perfect Field</h1>
          <p className="text-gray-600">Browse and book from our selection of premium sports facilities</p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="relative">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full md:w-48 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white pr-8"
              >
                <option value="all">All Field Types</option>
                {fieldTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                icon={<Filter className="h-5 w-5" />}
              >
                Filters
              </Button>
              
              <div className="hidden md:block">
                <span className="text-sm text-gray-500">
                  {filteredFields.length} results found
                </span>
              </div>
            </div>
          </div>
          
          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="all">Any Price</option>
                  <option value="0-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-150">$100 - $150</option>
                  <option value="150">$150 and above</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Field Size
                </label>
                <select
                  value={sizeFilter}
                  onChange={(e) => setSizeFilter(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="all">Any Size</option>
                  <option value="5-a-side">5-a-side</option>
                  <option value="7-a-side">7-a-side</option>
                  <option value="11-a-side">11-a-side</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setPriceFilter('all');
                    setSizeFilter('all');
                    setTypeFilter('all');
                  }}
                  variant="outline"
                  className="text-red-600 border-red-600 hover:bg-red-50"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile Results Count */}
        <div className="md:hidden mb-4">
          <span className="text-sm text-gray-500">
            {filteredFields.length} results found
          </span>
        </div>
        
        {/* Results Grid */}
        {filteredFields.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFields.map((field) => (
              <FieldCard key={field.id} field={field} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-4">
              <MapPin className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No fields found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any fields matching your criteria. Try adjusting your filters or search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FieldsPage;