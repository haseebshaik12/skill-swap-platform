import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, MapPin, Clock, Plus, X, Edit } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    location: '',
    availability: '',
    isPublic: true
  });

  const [skillsOffered, setSkillsOffered] = useState([
    { id: '1', name: 'JavaScript', description: 'Frontend development', category: 'Programming' },
    { id: '2', name: 'React', description: 'UI framework', category: 'Programming' }
  ]);

  const [skillsWanted, setSkillsWanted] = useState([
    { id: '3', name: 'Python', description: 'Backend development', category: 'Programming' }
  ]);

  const [newSkill, setNewSkill] = useState({
    name: '',
    description: '',
    category: '',
    isOffered: true
  });

  const handleSaveProfile = () => {
    // TODO: Implement profile update
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.name.trim()) {
      const skill = {
        id: Date.now().toString(),
        name: newSkill.name,
        description: newSkill.description,
        category: newSkill.category
      };

      if (newSkill.isOffered) {
        setSkillsOffered([...skillsOffered, skill]);
      } else {
        setSkillsWanted([...skillsWanted, skill]);
      }

      setNewSkill({ name: '', description: '', category: '', isOffered: true });
    }
  };

  const removeSkill = (id: string, isOffered: boolean) => {
    if (isOffered) {
      setSkillsOffered(skillsOffered.filter(skill => skill.id !== id));
    } else {
      setSkillsWanted(skillsWanted.filter(skill => skill.id !== id));
    }
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        {/* Profile Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <Edit className="h-4 w-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-6 py-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{profileData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  {isEditing ? (
                    <div className="mt-1 relative">
                      <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="block w-full pl-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your location"
                      />
                    </div>
                  ) : (
                    <p className="mt-1 text-gray-900 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      {profileData.location || 'Not specified'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Availability</label>
                  {isEditing ? (
                    <div className="mt-1 relative">
                      <Clock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        value={profileData.availability}
                        onChange={(e) => setProfileData({...profileData, availability: e.target.value})}
                        className="block w-full pl-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Weekends, Evenings"
                      />
                    </div>
                  ) : (
                    <p className="mt-1 text-gray-900 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      {profileData.availability || 'Not specified'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Profile Visibility</label>
                  {isEditing ? (
                    <select
                      value={profileData.isPublic ? 'public' : 'private'}
                      onChange={(e) => setProfileData({...profileData, isPublic: e.target.value === 'public'})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  ) : (
                    <p className="mt-1 text-gray-900">{profileData.isPublic ? 'Public' : 'Private'}</p>
                  )}
                </div>

                {isEditing && (
                  <button
                    onClick={handleSaveProfile}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
              
              {/* Add New Skill */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Add New Skill</h4>
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Skill name"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <select
                      value={newSkill.isOffered ? 'offered' : 'wanted'}
                      onChange={(e) => setNewSkill({...newSkill, isOffered: e.target.value === 'offered'})}
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="offered">Offering</option>
                      <option value="wanted">Wanting</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Description (optional)"
                    value={newSkill.description}
                    onChange={(e) => setNewSkill({...newSkill, description: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Category (optional)"
                    value={newSkill.category}
                    onChange={(e) => setNewSkill({...newSkill, category: e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={addSkill}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Skill</span>
                  </button>
                </div>
              </div>

              {/* Skills Offered */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Skills I'm Offering</h4>
                <div className="space-y-2">
                  {skillsOffered.map(skill => (
                    <div key={skill.id} className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{skill.name}</p>
                        {skill.description && <p className="text-sm text-gray-600">{skill.description}</p>}
                        {skill.category && <p className="text-xs text-gray-500">{skill.category}</p>}
                      </div>
                      <button
                        onClick={() => removeSkill(skill.id, true)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Wanted */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Skills I Want to Learn</h4>
                <div className="space-y-2">
                  {skillsWanted.map(skill => (
                    <div key={skill.id} className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{skill.name}</p>
                        {skill.description && <p className="text-sm text-gray-600">{skill.description}</p>}
                        {skill.category && <p className="text-xs text-gray-500">{skill.category}</p>}
                      </div>
                      <button
                        onClick={() => removeSkill(skill.id, false)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 