import React from 'react';

function App2() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">SkillSwap</h1>
        <p className="text-xl text-gray-600">Welcome to Skill Swap Platform!</p>
        <p className="text-gray-500 mt-2">Your platform is running successfully!</p>
        <div className="mt-8 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Features Ready:</h2>
            <ul className="text-left space-y-2 text-gray-600">
              <li>✅ User Registration & Login</li>
              <li>✅ Profile Management</li>
              <li>✅ Skill Browsing & Search</li>
              <li>✅ Swap Requests</li>
              <li>✅ Admin Dashboard</li>
              <li>✅ Real-time Updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2; 