import React from 'react';
import { Link } from '@inertiajs/react';

export default function Sidebar() {
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div className="hideOnMobile w-1/12 bg-dark hide">
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
        className="fixed hideOnDesktop sidebar flex-col w-full h-full hide p-10 z-50"
        style={{ backgroundColor: 'rgba(17, 24, 40, 0.9)' }}
      >
        <a className="mx-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Admin
        </a>
        <Link
          href={route('cms.countries')}
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Content Management
        </Link>
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
    </>
  );
}
