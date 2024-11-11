import logo from "../../../public/images/logo.svg";
import React, { useState } from "react";
import Search from "./Search";
import AutenthicationButton from "./AutenthicationButton";
import { usePage } from '@inertiajs/react';

function showSearch() {
  const searchForm = document.querySelector('.searchForm');
  const searchButton = document.querySelector('.searchButton');
  const cancelButton = document.querySelector('.cancelButton');

  searchForm.style.display = "flex";
  searchButton.style.display = "none";
  cancelButton.style.display = "flex";
}

function hideSearchForm() {
  const searchForm = document.querySelector('.searchForm');
  const searchButton = document.querySelector('.searchButton');
  const cancelButton = document.querySelector('.cancelButton');

  searchForm.style.display = 'none';
  cancelButton.style.display = 'none';
  searchButton.style.display = 'flex';
}

function showSidebar() {
  const sidebarButton = document.querySelector('.sidebarButton');
  const sidebar = document.querySelector('.sidebar');
  const closeButton = document.querySelector('.closeButton');

  sidebar.style.display = 'flex';
  sidebarButton.style.display = 'none';
  closeButton.style.display = 'flex';
}

function hideSidebar() {
  const sidebarButton = document.querySelector('.sidebarButton');
  const sidebar = document.querySelector('.sidebar');
  const closeButton = document.querySelector('.closeButton');

  sidebar.style.display = 'none';
  sidebarButton.style.display = 'flex';
  closeButton.style.display = 'none';
}


export default function Navbar({searchQuery, handleSearchChange}) {
  const { props } = usePage();
  const user = props.auth.user;

  return (
    <div className="flex-col fixed header left-0 top-0 z-40 flex w-full items-center bg-dark">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center w-full">
          <div className="w-60 max-w-full px-4 hideOnMobile">
            <a href="/" className="navbar-logo block w-full py-5">
              <img src={logo} alt="logo" className="header-logo w-full" />
            </a>
          </div>
          <div className="w-full">
            <div className="flex w-full justify-between">
              <Search
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
              />
                        <div className="hideOnMobile sm:flex items-center mr-4">
            {user ? (
              <a
                className="text-base font-medium text-white"
              >
                Hello, {user.name}
              </a>
            ) : (
              <>
                <a
                  href="/login"
                  className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:text-primary"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Register
                </a>
              </>
            )}
          </div>
            </div>
          </div>
        </div>
      </div>

  
  {/* MOBILE */}
  <div className="flex items-center w-full">
    <div className="flex items-center w-full">
      {/* logo */}
      <div className="w-60 max-w-full px-4 hideOnDesktop">
        <a href="/" className="navbar-logo block w-full py-5">
          <img
            src={logo}
            alt="logo"
            className="header-logo w-full"
          />
        </a>
      </div>
      {/* fitur */}
      <div className="w-full flex justify-end items-center">
        {/* autentikasi */}
        <div className="sm:flex items-center">
          <a
            href="/sign-in"
            className="hideOnDesktop loginBtn px-2 text-sm font-medium text-white hover:text-primary"
          >
            Sign In
          </a>
          <a
            href="/sign-up"
            className="hideOnDesktop signUpBtn rounded-md bg-white bg-opacity-20 px-2 py-2 text-sm font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
          >
            Sign Up
          </a>
        </div>
        {/* SEARCH BUTTON */}
        <div className="searchButton p-4" onClick={showSearch}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e8eaed"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </a>
        </div>
        {/* CANCEL BUTTON */}
        <div className="cancelButton p-4" onClick={hideSearchForm}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </div>
        {/* MENU BUTTON */}
        <div className="sidebarButton mr-3" onClick={showSidebar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </div>
        {/* CANCEL BUTTON */}
        <div className="closeButton mr-3" onClick={hideSidebar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}