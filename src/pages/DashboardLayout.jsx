import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-rows-[0.5fr_3.5fr] grid-cols-[0.5fr_3.5fr_1fr] gap-2 h-screen p-4">
      <Sidebar />
      <Header />

      {/* Main Content */}
      <div className="bg-[#151A32] text-white flex items-center justify-center">
        Main
      </div>

      {/* Right Panel */}
      <div className="bg-[#EF5D1E] text-white flex items-center justify-center">
        Right Panel
      </div>
    </div>
  );
};

export default DashboardLayout;
