import Child from "@/components/Child";
export default function Parent({ user, notifications, markAsRead, updateTheme }) {
  return (
    <div className="bg-yellow-50 rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-yellow-700">
        👨‍👩‍👧‍👦 Parent Component (Level 2)
      </h2>
      <p className="text-gray-600 mb-4">
        I don't need this data either, but I have to receive it and pass it down...
      </p>
      <div className="text-sm text-gray-500 mb-4">
        Props I'm forced to handle: user, notifications, markAsRead, updateTheme
      </div>
      
      <Child 
        user={user}

      />
    </div>
  );
}
