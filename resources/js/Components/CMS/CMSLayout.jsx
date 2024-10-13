import React from 'react';
import CMSNav from './CMSNav';
import Navbar from '../Navbar';
import Footer from '../Footer';

const CMSLayout = ({ children, title }) => {
  return (
    <>
        <Navbar />
        <div className="flex justify-center mt-20">
        
        <CMSNav />
        <div className="flex-1 flex-wrap p-10 w-1">
            <div className="mb-4">
            <h2 className="text-4xl font-semibold text-dark dark:text-white">{title}</h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
            </div>
            {children}
        </div>
        </div>
        <Footer />
        </>
  );
};

export default CMSLayout;
