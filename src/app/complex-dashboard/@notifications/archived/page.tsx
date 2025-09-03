import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <div className="border border-gray-300 rounded p-6 h-full w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Archived Notifications
      </h2>

      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded border-l-4 border-gray-500">
          <p className="text-gray-600">No archived notifications to display</p>
          <p className="text-xs text-gray-500 mt-1">
            Notifications you archive will appear here
          </p>
        </div>

        <Link href="/complex-dashboard">
          <span>← Back to Default Notifications</span>
        </Link>
      </div>
    </div>
  );
};

export default ArchivedNotifications;
