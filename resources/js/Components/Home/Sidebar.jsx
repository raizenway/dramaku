import { Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Sidebar({ user }) {
  const isAdmin = user && user.role === 'admin';
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { post } = useForm();

  const handleLogout = () => {
    post(route('logout'));
    setShowLogoutConfirm(false);
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div className="hideOnMobile w-1/6 bg-dark hide">
        <a className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Admin
        </a>
        <Link
          href={route('cms.countries')}
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Content Management
        </Link>
        <h1 className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Region
        </h1>
        <a
          href="#"
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Jepang
        </a>
        <a
          href="#"
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Cina
        </a>
        <a
          href="#"
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Korea
        </a>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className="fixed hideOnDesktop sidebar flex-col w-full h-full hide p-10 z-50 justify-between"
        style={{ backgroundColor: 'rgba(17, 24, 40, 0.9)' }}
      >
        <div>
          {isAdmin && (
            <>
              <a className="mx-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Admin
              </a>
              <Link
                href={route('cms.countries')}
                className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
              >
                Content Management
              </Link>
            </>
          )}
          <h1 className="mx-8 mt-4 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Region
          </h1>
          <a
            href="#"
            className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
          >
            Jepang
          </a>
          <a
            href="#"
            className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
          >
            Cina
          </a>
          <a
            href="#"
            className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
          >
            Korea
          </a>
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="mx-8 mt-16 flex py-2 text-base font-medium text-white hover:text-red-500"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="mr-4 py-2 px-4 text-white bg-primary rounded hover:primary-dark"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="py-2 px-4 bg-gray-300 text-base rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}