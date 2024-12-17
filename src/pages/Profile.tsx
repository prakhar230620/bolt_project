import React, { useState } from 'react';
import { Camera, Settings, Clock, Bell, Shield, LogOut } from 'lucide-react';
import Input from '../components/ui/Input';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer | Tech Enthusiast',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: Settings },
    { id: 'activity', label: 'Activity', icon: Clock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                  <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors duration-300">
                    <Camera className="h-5 w-5" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold mt-4">{profileData.name}</h2>
                <p className="text-gray-600">{profileData.bio}</p>
              </div>
              <nav className="space-y-2">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors duration-300 ${
                      activeTab === id
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {label}
                  </button>
                ))}
                <button className="w-full flex items-center px-4 py-2 rounded-md text-red-600 hover:bg-red-50 transition-colors duration-300">
                  <LogOut className="h-5 w-5 mr-3" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {activeTab === 'profile' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Profile Settings</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        value={profileData.name}
                        onChange={handleChange}
                      />
                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <Input
                      label="Bio"
                      name="bio"
                      value={profileData.bio}
                      onChange={handleChange}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Company"
                        name="company"
                        value={profileData.company}
                        onChange={handleChange}
                      />
                      <Input
                        label="Location"
                        name="location"
                        value={profileData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              )}
              {/* Add other tab content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;