import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import RightPanel from "../components/RightPanel";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-rows-[0.5fr_3.5fr] grid-cols-[0.5fr_3.5fr_1fr] gap-2 h-screen p-4">
      <Sidebar />
      <Header />
      <MainComponent />
      <RightPanel />
    </div>
  );
};

export default DashboardLayout;
