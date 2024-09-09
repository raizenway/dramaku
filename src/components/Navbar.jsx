import logo from "../assets/images/logo/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed header left-0 top-0 z-40 flex w-full items-center bg-dark">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="w-60 max-w-full px-4">
            <Link to="/" className="navbar-logo block w-full py-5">
              <img src={logo} alt="logo" className="header-logo w-full" />
            </Link>
          </div>
          <div>
            <form className="flex items-center gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Masukkan judul"
                  className="w-full px-10 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke text-white placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none"
                />
              </div>
              <div>
                <input
                  type="submit"
                  defaultValue="Telusuri"
                  className="px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-white bg-dark hover:bg-white hover:text-dark"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="hidden sm:flex items-center mr-4">
          <Link
            to="/signin"
            className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:text-primary"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-gray-900"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
