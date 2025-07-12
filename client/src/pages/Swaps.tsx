import React, { useState } from 'react';
import { Clock, Check, X, MessageSquare, Star } from 'lucide-react';

const Swaps: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'active' | 'completed'>('pending');

  // Mock data for demonstration
  const swaps = {
    pending: [
      {
        id: '1',
        type: 'received',
        user: 'John Doe',
        skill: 'JavaScript',
        message: 'I can help you with React in exchange for Python lessons',
        date: '2024-01-15'
      },
      {
        id: '2',
        type: 'sent',
        user: 'Jane Smith',
        skill: 'Data Science',
        message: 'Looking to learn data analysis techniques',
        date: '2024-01-14'
      }
    ],
    active: [
      {
        id: '3',
        user: 'Mike Johnson',
        skill: 'UI/UX Design',
        status: 'in-progress',
        startDate: '2024-01-10',
        sessions: 2
      }
    ],
    completed: [
      {
        id: '4',
        user: 'Sarah Wilson',
        skill: 'React',
        status: 'completed',
        endDate: '2024-01-05',
        rating: 5,
        review: 'Great experience! Learned a lot about React hooks.'
      }
    ]
  };

  const handleAcceptSwap = (swapId: string) => {
    // TODO: Implement accept swap
    console.log('Accepting swap:', swapId);
  };

  const handleRejectSwap = (swapId: string) => {
    // TODO: Implement reject swap
    console.log('Rejecting swap:', swapId);
  };

  const handleCancelSwap = (swapId: string) => {
    // TODO: Implement cancel swap
    console.log('Cancelling swap:', swapId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">My Swaps</h1>
        <p className="text-gray-600">Manage your skill exchange requests and track your learning progress</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { key: 'pending', label: 'Pending', count: swaps.pending.length },
              { key: 'active', label: 'Active', count: swaps.active.length },
              { key: 'completed', label: 'Completed', count: swaps.completed.length }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Pending Swaps */}
          {activeTab === 'pending' && (
            <div className="space-y-4">
              {swaps.pending.map(swap => (
                <div key={swap.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{swap.user}</h3>
                      <p className="text-sm text-gray-600">Skill: {swap.skill}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      swap.type === 'received' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {swap.type === 'received' ? 'Received' : 'Sent'}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{swap.message}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {swap.date}
                    </span>
                    
                    {swap.type === 'received' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAcceptSwap(swap.id)}
                          className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                        >
                          <Check className="h-4 w-4" />
                          <span>Accept</span>
                        </button>
                        <button
                          onClick={() => handleRejectSwap(swap.id)}
                          className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                        >
                          <X className="h-4 w-4" />
                          <span>Reject</span>
                        </button>
                      </div>
                    )}
                    
                    {swap.type === 'sent' && (
                      <button
                        onClick={() => handleCancelSwap(swap.id)}
                        className="flex items-center space-x-1 bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700"
                      >
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              {swaps.pending.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">No pending swaps</p>
                </div>
              )}
            </div>
          )}

          {/* Active Swaps */}
          {activeTab === 'active' && (
            <div className="space-y-4">
              {swaps.active.map(swap => (
                <div key={swap.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{swap.user}</h3>
                      <p className="text-sm text-gray-600">Skill: {swap.skill}</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Started:</span>
                      <p className="text-gray-900">{swap.startDate}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Sessions:</span>
                      <p className="text-gray-900">{swap.sessions}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <p className="text-gray-900 capitalize">{swap.status}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                      <MessageSquare className="h-4 w-4" />
                      <span>Message</span>
                    </button>
                    <button className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">
                      <Check className="h-4 w-4" />
                      <span>Mark Complete</span>
                    </button>
                  </div>
                </div>
              ))}
              
              {swaps.active.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">No active swaps</p>
                </div>
              )}
            </div>
          )}

          {/* Completed Swaps */}
          {activeTab === 'completed' && (
            <div className="space-y-4">
              {swaps.completed.map(swap => (
                <div key={swap.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{swap.user}</h3>
                      <p className="text-sm text-gray-600">Skill: {swap.skill}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{swap.rating}/5</span>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Completed
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Completed:</span>
                      <p className="text-gray-900">{swap.endDate}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Rating:</span>
                      <p className="text-gray-900">{swap.rating}/5 stars</p>
                    </div>
                  </div>
                  
                  {swap.review && (
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-700">{swap.review}</p>
                    </div>
                  )}
                </div>
              ))}
              
              {swaps.completed.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">No completed swaps</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Swaps; 