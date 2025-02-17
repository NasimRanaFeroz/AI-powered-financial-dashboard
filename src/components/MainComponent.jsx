import PropTypes from "prop-types";

const Main = ({ selectedMenuItem }) => {
  return (
    <div className="bg-[#151A32] text-white flex items-center justify-center">
      {selectedMenuItem === 'dashboard' ? (
        <div>dashboard</div>
      ) : (
        <div>input</div>
      )}
    </div>
  );
};

Main.propTypes = {
  selectedMenuItem: PropTypes.string,
};

export default Main;
