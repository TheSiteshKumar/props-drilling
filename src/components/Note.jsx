import React from "react";

function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-red-800 mb-4">
          🚨 The Prop Drilling Problem:
        </h2>
        <ul className="space-y-2 text-red-700">
          <li>
            • <strong>Grandparent</strong> has the data but doesn't use it
          </li>
          <li>
            • <strong>Parent</strong> doesn't need the data but must pass it
          </li>
          <li>
            • <strong>Child</strong> doesn't need the data but must pass it
          </li>
          <li>
            • <strong>Grandchildren</strong> finally use the data!
          </li>
        </ul>
        <div className="mt-4 p-4 bg-red-100 rounded">
          <p className="text-sm text-red-800">
            <strong>Result:</strong> 3 intermediate components are cluttered
            with props they don't use, making the code harder to maintain and
            refactor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
