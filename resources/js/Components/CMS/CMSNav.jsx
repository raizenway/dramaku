import React from 'react';
import { Link, usePage } from '@inertiajs/react';

const CMSNav = () => {
  const { url } = usePage();

  return (
    <div className="bg-dark text-white space-y-6 py-7 px-1 w-70 hidden md:block">
      <nav>
        <Link 
          href={route('cms.shows')} 
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary`}
        >
          Shows
        </Link>
        <div className="ml-8">
          <Link 
            href={route('cms.shows')} 
            className={`mx-8 flex py-2 text-base font-medium hover:text-primary ${url === route('cms.shows') ? 'border-l-4 pl-4 border-primary' : ''}`}
          >
            Validate
          </Link>
          <Link 
            href={route('cms.show.input')} 
            className={`mx-8 flex py-2 text-base font-medium hover:text-primary ${url === route('cms.show.input') ? 'border-l-4 pl-4 border-primary' : ''}`}
          >
            Input New Shows
          </Link>
        </div>
        <Link 
          href={route('cms.countries')} 
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary ${url === route('cms.countries') ? 'border-l-4 pl-4 border-primary' : ''}`}
        >
          Countries
        </Link>
        <Link 
          href={route('cms.awards')} 
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary ${url === route('cms.awards') ? 'border-l-4 pl-4 border-primary' : ''}`}
        >
          Awards
        </Link>
        <Link 
          href={route('cms.genres')} 
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary ${url === route('cms.genres') ? 'border-l-4 pl-4 border-primary' : ''}`}
        >
          Genres
        </Link>
        <Link 
          href={route('cms.actors')} 
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary ${url === route('cms.actors') ? 'border-l-4 pl-4 border-primary' : ''}`}
        >
          Actors
        </Link>
        <Link 
          href={route('cms.reviews')} 
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary ${url === route('cms.reviews') ? 'border-l-4 pl-4 border-primary' : ''}`}
        >
          Reviews
        </Link>
        <Link 
          href={route('cms.users')} 
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary ${url === route('cms.users') ? 'border-l-4 pl-4 border-primary' : ''}`}
        >
          Users
        </Link>
        <Link 
          href={route('logout')} 
          className={`mx-8 flex py-2 text-base font-medium hover:text-primary`}
        >
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default CMSNav;