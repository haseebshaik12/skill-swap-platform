import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, MessageSquare } from 'lucide-react';

const Browse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for demonstration
  const users = [
    {
      id: '1',
      name: 'John Doe',
      location: 'New York, NY',
      availability: 'Weekends',
      rating: 4.8,
      skillsOffered: ['JavaScript', 'React', 'Node.js'],
      skillsWanted: ['Python', 'Machine Learning']
    },
    {
      id: '2',
      name: 'Jane Smith',
      location: 'San Francisco, CA',
      availability: 'Evenings',
      rating: 4.9,
      skillsOffered: ['Python', 'Data Science', 'SQL'],
      skillsWanted: ['JavaScript', 'React']
    },
    {
      id: '3',
      name: 'Mike Johnson',
      location: 'Austin, TX',
      availability: 'Weekdays',
      rating: 4.7,
      skillsOffered: ['UI/UX Design', 'Figma', 'Adobe Creative Suite'],
      skillsWanted: ['JavaScript', 'React']
    }
  ];

  const categories = [
    'all',
    'programming',
    'design',
    'marketing',
    'languages',
    'music',
    'cooking',
    'fitness'
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.skillsOffered.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         user.skillsWanted.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           user.skillsOffered.some(skill => skill.toLowerCase().includes(selectedCategory)) ||
                           user.skillsWanted.some(skill => skill.toLowerCase().includes(selectedCategory));
    
    return matchesSearch && matchesCategory;
  });

  const handleRequestSwap = (userId: string) => {
    // TODO: Implement swap request
    console.log('Requesting swap with user:', userId);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Skills</h1>
        <p className="text-gray-600">Find people with the skills you need and who need your expertise</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              {/* User Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {user.location}
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{user.rating}</span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                Available: {user.availability}
              </div>

              {/* Skills Offered */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Skills Offering:</h4>
                <div className="flex flex-wrap gap-2">
                  {user.skillsOffered.map(skill => (
                    <span
                      key={skill}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Wanted */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Skills Wanting:</h4>
                <div className="flex flex-wrap gap-2">
                  {user.skillsWanted.map(skill => (
                    <span
                      key={skill}
                      className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleRequestSwap(user.id)}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Request Swap</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No users found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Browse; 