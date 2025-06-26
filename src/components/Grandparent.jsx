import React, { useState } from 'react';
import Parent from '@/components/Parent';
export default function Grandparent() {
  const [user, setUser] = useState({
    name: 'John Doe',
    theme: 'dark',
    email: 'john@example.com'
  });

  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Welcome!', read: false },
    { id: 2, message: 'You have 3 new messages', read: false }
  ]);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const updateTheme = (newTheme) => {
    setUser(prev => ({ ...prev, theme: newTheme }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          🚨 Prop Drilling Demonstration 🚨
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-red-600">
            👴 Grandparent Component (Level 1)
          </h2>
          <p className="text-gray-600 mb-4">
            I have the data but I don't use it. I just pass it down...
          </p>
          <div className="bg-gray-50 p-4 rounded">
            <code className="text-sm">
              user = {JSON.stringify(user, null, 2)}
            </code>
          </div>
        </div>

        {/* 🚨 PROP DRILLING STARTS HERE! 🚨 */}
        <Parent 
          user={user}
          notifications={notifications}
          markAsRead={markAsRead}
          updateTheme={updateTheme}
        />
      </div>
    </div>
  );
}