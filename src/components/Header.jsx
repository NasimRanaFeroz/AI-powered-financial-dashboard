import {
  CalendarDaysIcon,
  Squares2X2Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import profile from "../assets/profile.png";
import PropTypes from "prop-types";
import google from "../assets/google.png";

const Header = ({ onMenuItemChange, availableBalance }) => {
  const [name] = useState("Hwang Hyunjin");
  const [role] = useState("Basic User");
  const [currentDate, setCurrentDate] = useState("");
  const [selected, setSelected] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: Squares2X2Icon },
    { id: "spreadsheet", name: "Input Field", icon: MagnifyingGlassIcon },
  ];

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString("en-US", options));
  }, []);

  const handleMenuItemClick = (menuItemID) => {
    setSelected(menuItemID);
    onMenuItemChange(menuItemID);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleAvatarClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleLoginPage = () => {
    setLoginPage(true);
  };

  const handleCloseLoginPage = () => {
    setLoginPage(false);
  };

  const handleSignupPage = () => {
    setSignupPage(true);
  };

  const handleCloseSignupPage = () => {
    setSignupPage(false);
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleCloseForgotPassword = () => {
    setForgotPassword(false);
  };

  return (
    <div className="col-span-2 bg-[#0B1020] text-white flex items-center justify-between p-4  ml-24">
      {/* Left Section */}
      <div>
        <p className="text-md text-gray-400">Personal Finance Tracker</p>
        <p className="text-3xl font-bold">Available Balance</p>
        <p className="text-3xl text-blue-400 font-bold">${availableBalance}</p>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-10">
        <div className="flex space-x-8 bg-[#151A32] p-6 rounded-md text-white">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center cursor-pointer"
              onClick={() => handleMenuItemClick(item.id)}
            >
              <item.icon
                className={`w-6 h-6 ${
                  selected === item.id ? "text-orange-500" : "text-gray-400"
                }`}
              />
              <span
                className={`ml-2 text-sm font-medium ${
                  selected === item.id ? "text-orange-500" : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white p-5 rounded-md bg-[#151A32] ">
          <CalendarDaysIcon className="w-6 h-6 text-blue-400" />{" "}
          <p className="text-lg font-medium">{currentDate}</p>{" "}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 items-center">
        <div className="text-right">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-400">{role}</p>
        </div>

        <button
          className="avatar hover:cursor-pointer"
          onClick={() => {
            handleAvatarClick();
            handleLoginPage();
          }}
        >
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={profile}
              alt="User Avatar"
            />
          </div>
        </button>
      </div>

      {isPopupVisible && loginPage && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm ">
          <div className="relative flex flex-col items-center justify-center bg-[#151A32] p-10 rounded-xl border-2 border-orange-500">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
              onClick={() => {
                handleClosePopup();
                handleCloseLoginPage();
              }}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold mb-6">Welcome to Budget Buddy</h1>

            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  User
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email or phone number"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
                {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <img src={logo} alt="" className="w-6 h-6" />
            </div> */}
              </div>

              <div className="mb-6 flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm text-gray-400">
                    Remember me
                  </span>
                </label>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mb-4">
                <button
                  className="bg-[#EF5D1E] hover:bg-[#D94E18] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Sign in
                </button>
              </div>

              {/* <div className="mb-4">
                <button
                  className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
                  type="button"
                >
                  <img src={google} alt="" className="w-6 h-6 mr-2" />
                  Or sign in with Google
                </button>
              </div> */}

              <div className="text-center">
                <p className="text-sm">
                  Don&apos;t have an account?
                  <a
                    className="text-blue-500 hover:text-blue-800 ml-2"
                    onClick={() => {
                      handleSignupPage();
                      handleCloseLoginPage();
                    }}
                  >
                    Sign up now
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {isPopupVisible && signupPage && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm ">
          <div className="relative flex flex-col items-center justify-center bg-[#151A32] p-10 rounded-xl border-2 border-orange-500">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
              onClick={() => {
                handleClosePopup();
                handleCloseSignupPage();
              }}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold mb-6">Welcome to Budget Buddy</h1>

            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  User
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email or phone number"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
                {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <img src={logo} alt="" className="w-6 h-6" />
            </div> */}
              </div>

              <div className="mb-6 flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm text-gray-400">
                    Remember me
                  </span>
                </label>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mb-4">
                <button
                  className="bg-[#EF5D1E] hover:bg-[#D94E18] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Sign up
                </button>
              </div>

              {/* <div className="mb-4">
                <button
                  className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
                  type="button"
                >
                  <img src={google} alt="" className="w-6 h-6 mr-2" />
                  Or sign up with Google
                </button>
              </div> */}

              <div className="text-center">
                <p className="text-sm">
                  Already have an account?
                  <a
                    className="text-blue-500 hover:text-blue-800 ml-2"
                    onClick={() => {
                      handleLoginPage();
                      handleCloseSignupPage();
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {isPopupVisible && forgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm ">
          <div className="relative flex flex-col items-center justify-center bg-[#151A32] p-10 rounded-xl border-2 border-orange-500">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
              onClick={() => {
                handleClosePopup();
                handleForgotPassword();
              }}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold mb-6">Welcome to Budget Buddy</h1>

            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  User
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email or phone number"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
                {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <img src={logo} alt="" className="w-6 h-6" />
            </div> */}
              </div>

              <div className="mb-6 flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm text-gray-400">
                    Remember me
                  </span>
                </label>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mb-4">
                <button
                  className="bg-[#EF5D1E] hover:bg-[#D94E18] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Sign up
                </button>
              </div>

              <div className="mb-4">
                <button
                  className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
                  type="button"
                >
                  <img src={google} alt="" className="w-6 h-6 mr-2" />
                  Or sign up with Google
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm">
                  Already have an account?
                  <a
                    className="text-blue-500 hover:text-blue-800 ml-2"
                    onClick={() => {
                      handleLoginPage();
                      handleCloseForgotPassword();
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  onMenuItemChange: PropTypes.func.isRequired,
  availableBalance: PropTypes.number.isRequired,
};

export default Header;
