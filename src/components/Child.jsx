
export default function Child({ user, notifications, markAsRead, updateTheme }) {
  return (
    <div className="bg-blue-50 rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">
        👶 Child Component (Level 3)
      </h2>
      <p className="text-gray-600 mb-4">
        I'm just a middleman too. Still passing everything down...
      </p>
      <div className="text-sm text-gray-500 mb-4">
        Props I'm forced to handle: user, notifications, markAsRead, updateTheme
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Grandchild 
          user={user}
          updateTheme={updateTheme}
        />
        <AnotherGrandchild 
          notifications={notifications}
          markAsRead={markAsRead}
        />
      </div>
    </div>
  );
}