import { useState } from "react";
import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import RightPanel from "../components/RightPanel";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

  const handleMenuItemChange = (menuItemID) => {
    setSelectedMenuItem(menuItemID);
  };

  return (
    <div className="grid grid-rows-[0.5fr_3.5fr] grid-cols-[0.5fr_3.5fr_1fr] gap-2 h-screen p-4">
      <Sidebar />
      <Header onMenuItemChange={handleMenuItemChange} />
      <MainComponent selectedMenuItem={selectedMenuItem} />
      <RightPanel />
    </div>
  );
};

export default DashboardLayout;
