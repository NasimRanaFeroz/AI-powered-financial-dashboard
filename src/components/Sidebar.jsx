import { useState } from "react";
import logo from "../assets/logo.png";
import home from "../assets/home.png";

const Sidebar = () => {
  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  return (
    <div className="row-span-2 bg-[#151A32] text-white flex flex-col justify-between items-center rounded-4xl">
      <div className="flex flex-col justify-center items-center p-4">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <div>Budget Buddy</div>
      </div>
      <div className="flex flex-col items-center pt-4">
        {months.map((month) => (
          <div
            key={month.id}
            id={month.id}
            onClick={() => setSelectedMonth(month.id)}
            className={`cursor-pointer p-1 ${
              selectedMonth === month.id ? "font-bold text-[#EF5D1E]" : ""
            }`}
          >
            {month.name}
          </div>
        ))}
      </div>
      <div className="pb-4">
        <img src={home} alt="Logo" className="w-28 h-28" />
      </div>
    </div>
  );
};

export default Sidebar;
