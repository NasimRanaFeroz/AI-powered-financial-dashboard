import PropTypes from "prop-types";
import spend from "../assets/spend.jpg";
import { useState } from "react";

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full bg-[#0B1020] rounded-full h-3 shadow-inner">
      <div
        className="bg-[#5622B7] h-full rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const RightPanel = () => {
  const currentValue = 690;
  const totalValue = 4200;
  const progress = (currentValue / totalValue) * 100;
  const [spendMoney] = useState(420);

  const [showPrediction, setShowPrediction] = useState(false);

  const handlePredictClick = () => {
    setShowPrediction(true);
  };

  return (
    <div className="bg-[#0B1020] text-white flex flex-col justify-between px-4 gap-4">
      <div className={`bg-[#151A32] p-4 rounded-xl flex flex-col`}>
        <div className="flex justify-between pb-8">
          <div>
            <p className="text-blue-400 text-xl font-bold">
              {progress.toFixed(2)}%
            </p>
            <p className="text-xl font-bold">Income Goal</p>
            <p className="text-sm text-gray-400">Progress to month</p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-right font-bold text-lg">
              ${currentValue} / {totalValue}
            </p>
          </div>
        </div>
        <div className="w-full">
          <ProgressBar current={currentValue} total={totalValue} />
        </div>
      </div>
      <div className="text-lg font-semibold bg-[#151A32] p-4 rounded-xl ">
        <div>Predict Spending Using AI </div>

        <div className="py-4">
          <img src={spend} alt="Logo" className="w-full h-auto rounded-2xl" />
        </div>
        <div className="pb-4 flex justify-center">
          <button
            className="bg-[#EF5D1E] hover:bg-[#D94E18] text-white text-base font-bold py-2 px-4 rounded-xl w-full"
            onClick={handlePredictClick}
          >
            Predict Spending
          </button>
        </div>
        {showPrediction && (
          <div className="">Predicted spending: $ {spendMoney}</div>
        )}
      </div>
      <div className="text-sm font-semibold p-2 rounded-xl text-center">
        Money Empowers Freedom
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default RightPanel;
