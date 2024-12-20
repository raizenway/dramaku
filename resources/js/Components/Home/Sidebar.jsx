import { Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Sidebar({ countries, onCountrySelect, selectedCountry }) {
  const { props } = usePage();
  const user = props.auth.user;
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
        <h1 className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Region
        </h1>
        <a
          onClick={() => onCountrySelect(null)}
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary 
            ${selectedCountry === null ? 'text-gray-500 cursor-not-allowed' : 'text-white cursor-pointer'}`}
          style={{ pointerEvents: selectedCountry === null ? 'none' : 'auto' }}
        >
          Semua
        </a>
        {countries && countries.map((country, index) => (
          <a
            key={index}
            onClick={() => onCountrySelect(country.name || country)}
            className={`mx-8 flex py-2 text-base font-medium hover:text-primary 
              ${selectedCountry === (country.name || country) ? 'text-gray-500 cursor-not-allowed' : 'text-white cursor-pointer'}`}
            style={{ pointerEvents: selectedCountry === (country.name || country) ? 'none' : 'auto' }}
          >
            {country.name || country}
          </a>
        ))}
        <div className='mx-8 mt-10 '>
        {isAdmin && (
            <Link 
            href={route('cms.shows')} 
            className={`flex py-2 text-base text-white font-medium hover:text-primary`}
            >
            CMS
            </Link>
          )}
        {/* Only show logout if user is logged in */}
        {user && (
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="flex py-2 text-base font-medium text-white hover:text-red-500"
          >
            Logout
          </button>
        )}
        </div>
        
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
                className="py-2 px-4 bg-gray-300 text-base rounded hover:bg-red-600 hover:text-white"
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
