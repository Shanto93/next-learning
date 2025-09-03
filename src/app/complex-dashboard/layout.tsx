import Notifications from "./@notifications/page";
import RevenueMetrics from "./@revenue/page";
import UserAnalytics from "./@userAnalytics/page";

const ComplexDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>
      <main className="h-screen w-full flex gap-5 p-4 bg-gray-50">
        <section className="flex-1 flex flex-col gap-5">
          <div className="flex-1 rounded-lg shadow-sm bg-white p-6">
            <UserAnalytics />
          </div>
          <div className="flex-1 rounded-lg shadow-sm bg-white p-6">
            <RevenueMetrics />
          </div>
        </section>
        <aside className="flex-1 rounded-lg shadow-sm bg-white p-6">
          <Notifications />
        </aside>
      </main>
    </>
  );
};

export default ComplexDashboardLayout;
