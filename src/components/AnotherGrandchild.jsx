export default function AnotherGrandchild({ notifications, markAsRead }) {
  return (
    <div className="bg-purple-50 rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-3 text-purple-700">
        👶👶 Another Grandchild (Level 4)
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        I finally use the notifications data!
      </p>
      
      <div className="space-y-2">
        <h4 className="font-medium">Notifications:</h4>
        {notifications.map(notif => (
          <div 
            key={notif.id}
            className={`p-2 rounded text-sm ${notif.read ? 'bg-gray-100' : 'bg-purple-100'}`}
          >
            {notif.message}
            {!notif.read && (
              <button
                onClick={() => markAsRead(notif.id)}
                className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded"
              >
                Mark Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}