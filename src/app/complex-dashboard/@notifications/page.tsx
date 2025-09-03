import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div className="border border-gray-300 rounded p-6 h-full w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Notifications
      </h2>
      
      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded border-l-4 border-blue-500">
          <p className="text-gray-700">Default Notifications</p>
        </div>
        
        <Link 
          href="/complex-dashboard/archived"
        >
         <button className="border px-3 rounded-b-md"> Archived Notifications</button>
        </Link>
      </div>
    </div>
  );
};

export default Notifications;
