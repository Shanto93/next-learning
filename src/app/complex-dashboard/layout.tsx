import Notifications from "./@notifications/page";
import RevenueMetrics from "./@revenue/page";
import UserAnalytics from "./@userAnalytics/page";

interface DashboardLayoutProps {
  children: React.ReactNode;
  notifications?: React.ReactNode;
  userAnalytics?: React.ReactNode;
  revenue?: React.ReactNode;
}

const ComplexDashboardLayout = ({
  children,
  notifications,
  userAnalytics,
  revenue,
}: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content area */}
      <div className="p-4">{children}</div>

      {/* Dashboard grid */}
      <main
        className="h-screen w-full flex gap-6 p-6 bg-gray-50"
        role="main"
        aria-label="Dashboard overview"
      >
        {/* Analytics section */}
        <section
          className="flex-1 flex flex-col gap-6"
          aria-label="Analytics data"
        >
          <article className="flex-1 rounded-xl shadow-sm bg-white p-6 border border-gray-100 hover:shadow-md transition-shadow">
            {userAnalytics}
          </article>

          <article className="flex-1 rounded-xl shadow-sm bg-white p-6 border border-gray-100 hover:shadow-md transition-shadow">
            {revenue}
          </article>
        </section>

        {/* Notifications sidebar */}
        <aside
          className="flex-1 rounded-xl shadow-sm bg-white p-6 border border-gray-100 hover:shadow-md transition-shadow"
          aria-label="Notifications panel"
        >
          {notifications}
        </aside>
      </main>
    </div>
  );
};

export default ComplexDashboardLayout;
