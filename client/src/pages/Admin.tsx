import React, { useState } from 'react';
import { Users, Shield, BarChart3, MessageSquare, Download, Ban, CheckCircle, XCircle } from 'lucide-react';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'moderation' | 'analytics' | 'announcements'>('users');

  // Mock data for demonstration
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active', role: 'user', joinDate: '2024-01-01' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'banned', role: 'user', joinDate: '2024-01-02' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', status: 'active', role: 'user', joinDate: '2024-01-03' }
  ];

  const pendingModeration = [
    { id: '1', type: 'skill', content: 'JavaScript Expert', user: 'John Doe', reason: 'Inappropriate description' },
    { id: '2', type: 'profile', content: 'Profile photo', user: 'Jane Smith', reason: 'Inappropriate content' }
  ];

  const stats = {
    totalUsers: 1250,
    activeUsers: 890,
    totalSwaps: 456,
    pendingSwaps: 23,
    completedSwaps: 433,
    averageRating: 4.7
  };

  const handleBanUser = (userId: string) => {
    // TODO: Implement ban user
    console.log('Banning user:', userId);
  };

  const handleUnbanUser = (userId: string) => {
    // TODO: Implement unban user
    console.log('Unbanning user:', userId);
  };

  const handleApproveContent = (contentId: string) => {
    // TODO: Implement approve content
    console.log('Approving content:', contentId);
  };

  const handleRejectContent = (contentId: string) => {
    // TODO: Implement reject content
    console.log('Rejecting content:', contentId);
  };

  const handleSendAnnouncement = () => {
    // TODO: Implement send announcement
    console.log('Sending announcement');
  };

  const handleDownloadReport = () => {
    // TODO: Implement download report
    console.log('Downloading report');
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <p className="text-gray-600">Manage users, moderate content, and monitor platform activity</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Swaps</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalSwaps}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { key: 'users', label: 'User Management', icon: Users },
              { key: 'moderation', label: 'Content Moderation', icon: Shield },
              { key: 'analytics', label: 'Analytics', icon: BarChart3 },
              { key: 'announcements', label: 'Announcements', icon: MessageSquare }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* User Management */}
          {activeTab === 'users' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
                <button
                  onClick={handleDownloadReport}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Report</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map(user => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            user.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.joinDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {user.status === 'active' ? (
                            <button
                              onClick={() => handleBanUser(user.id)}
                              className="text-red-600 hover:text-red-900 flex items-center space-x-1"
                            >
                              <Ban className="h-4 w-4" />
                              <span>Ban</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleUnbanUser(user.id)}
                              className="text-green-600 hover:text-green-900 flex items-center space-x-1"
                            >
                              <CheckCircle className="h-4 w-4" />
                              <span>Unban</span>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Content Moderation */}
          {activeTab === 'moderation' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Content Moderation</h2>
              
              <div className="space-y-4">
                {pendingModeration.map(item => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.user}</h3>
                        <p className="text-sm text-gray-600">Type: {item.type}</p>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending Review
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm text-gray-700"><strong>Content:</strong> {item.content}</p>
                      <p className="text-sm text-gray-600"><strong>Reason:</strong> {item.reason}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApproveContent(item.id)}
                        className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => handleRejectContent(item.id)}
                        className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                      >
                        <XCircle className="h-4 w-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>
                ))}
                
                {pendingModeration.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No content pending moderation</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Platform Analytics</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Swap Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Swaps:</span>
                      <span className="font-medium">{stats.totalSwaps}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pending Swaps:</span>
                      <span className="font-medium">{stats.pendingSwaps}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed Swaps:</span>
                      <span className="font-medium">{stats.completedSwaps}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completion Rate:</span>
                      <span className="font-medium">
                        {Math.round((stats.completedSwaps / stats.totalSwaps) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">User Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Users:</span>
                      <span className="font-medium">{stats.totalUsers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Users:</span>
                      <span className="font-medium">{stats.activeUsers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Rate:</span>
                      <span className="font-medium">
                        {Math.round((stats.activeUsers / stats.totalUsers) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average Rating:</span>
                      <span className="font-medium">{stats.averageRating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Announcements */}
          {activeTab === 'announcements' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Platform Announcements</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Send Announcement</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Announcement title"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Announcement message"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      <option value="info">Information</option>
                      <option value="warning">Warning</option>
                      <option value="success">Success</option>
                      <option value="error">Error</option>
                    </select>
                  </div>
                  <button
                    onClick={handleSendAnnouncement}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Send Announcement
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin; 